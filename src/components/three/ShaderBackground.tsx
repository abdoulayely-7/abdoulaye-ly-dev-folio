import { useEffect, useRef } from "react";
import * as THREE from "three";

const ShaderBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.dataset.testid = "shader-background";
    mount.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    };

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms,
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;
        uniform vec2 uMouse;

        // Noise functions
        float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          f = f * f * (3.0 - 2.0 * f);
          float n00 = random(i);
          float n10 = random(i + vec2(1.0, 0.0));
          float n01 = random(i + vec2(0.0, 1.0));
          float n11 = random(i + vec2(1.0, 1.0));
          float nx0 = mix(n00, n10, f.x);
          float nx1 = mix(n01, n11, f.x);
          return mix(nx0, nx1, f.y);
        }

        float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          for (int i = 0; i < 6; i++) {
            value += amplitude * noise(st * frequency);
            st *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        // Snake stripe: computes a smooth stripe following a sinusoidal path
        float snakeStripe(vec2 p) {
          // path y0 as function of x, influenced by time and noise
          float freq = 6.0;
          float amp = 0.12;
          float wobble = fbm(p * 1.5 + uTime * 0.1) * 0.06;
          float y0 = sin((p.x * freq) + uTime * 1.2) * amp + wobble + (uMouse.y - 0.5) * 0.08;

          // distance from point to the path
          float d = abs(p.y - y0);

          // taper the snake along x to create a head motion
          float head = smoothstep(0.9, -0.2, p.x + sin(uTime * 0.6) * 0.1);
          float width = 0.06 * (0.6 + 0.4 * head);

          return smoothstep(width, 0.0, d) * head;
        }

        void main() {
          vec2 uv = vUv;
          vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) / uResolution.y;

          // Distance from mouse
          vec2 mouseDir = normalize(uMouse - uv);
          float mouseDist = distance(uMouse, uv);

          // Layer 1: Grid with distortion
          vec2 gridUv = p + vec2(sin(uTime * 0.3) * 0.05, cos(uTime * 0.25) * 0.05);
          float grid = abs(sin((gridUv.x + uTime * 0.025) * 24.0)) * abs(sin((gridUv.y - uTime * 0.018) * 24.0));
          float gridLine = smoothstep(0.965, 1.0, grid);

          // Layer 2: Flowing noise
          vec2 noiseUv = p * 2.0 + vec2(uTime * 0.05, uTime * 0.03);
          float n = fbm(noiseUv);
          float wave1 = sin((p.x + uTime * 0.15) * 8.0 + n * 3.0) * 0.5 + 0.5;
          float wave2 = cos((p.y - uTime * 0.12) * 6.0 + n * 2.5) * 0.5 + 0.5;
          float flow = mix(wave1, wave2, n);

          // Layer 3: Radial pulses
          float pulse = sin(length(p) * 8.0 - uTime * 2.0) * 0.5 + 0.5;
          pulse *= exp(-length(p) * 1.5);

          // Layer 4: Mouse interaction
          float mouseGlow = exp(-mouseDist * mouseDist * 3.0) * 0.3;

          // Layer 5: Spiral effect
          float angle = atan(p.y, p.x);
          float spiral = sin(angle * 5.0 + uTime * 0.5 - length(p) * 3.0) * 0.5 + 0.5;
          spiral *= exp(-length(p) * 2.0);

          // Layer 6: Serpent stripe
          float snake = snakeStripe(p);

          // Combine layers
          float intensity = gridLine * 0.18 +
                           flow * 0.12 +
                           pulse * 0.10 +
                           spiral * 0.14 +
                           mouseGlow * 0.16 +
                           snake * 0.6;

          // Color gradient based on position and time
          vec3 color1 = vec3(0.06, 0.72, 0.47); // Primary green
          vec3 color2 = vec3(0.0, 0.4, 0.6);    // Cyan
          vec3 color3 = vec3(0.2, 0.1, 0.5);    // Purple
          vec3 snakeColor = vec3(1.0, 0.85, 0.25);

          vec3 color = mix(color1, color2, sin(uTime * 0.3 + length(p)) * 0.5 + 0.5);
          color = mix(color, color3, flow * 0.3);

          // Blend in snake color
          color = mix(color, snakeColor, snake * 0.9);

          // Add depth effect
          float vignette = smoothstep(0.95, 0.15, distance(uv, vec2(0.5)));
          vec3 deep = vec3(0.0, 0.06, 0.045);
          color = mix(deep, color, intensity);

          float alpha = intensity * vignette * 1.6;
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let animationFrame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX / window.innerWidth;
      mousePos.current.y = 1 - e.clientY / window.innerHeight;
      uniforms.uMouse.value.set(mousePos.current.x, mousePos.current.y);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mount.removeChild(renderer.domElement);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-90"
    />
  );
};

export default ShaderBackground;
