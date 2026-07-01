import { MouseEvent } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, MessageCircleMore, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";
import photo from "@/assets/moi3.jpeg";

const Hero = () => {
  const { personal } = portfolioData;
  const constellationTechs = [
    "Communication",
    "Empathie",
    "Teamwork",
    "Problem Solving",
    "Adaptability",
    "Creativity",
    "Organization",
    "Collaboration",
    "Innovation",
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 18 ? "Bonjour" : "Bonsoir";
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    event.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      <div className="aurora-green absolute -inset-24 opacity-80 blur-3xl" />
      <div className="mouse-grid absolute inset-0 opacity-80" />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative w-[24rem] h-[24rem] lg:w-[36rem] lg:h-[36rem] flex items-center justify-center [perspective:900px]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 rounded-full border border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 rounded-full border border-primary/10"
              />
              {constellationTechs.map((tech, index) => {
                const angle = (index / constellationTechs.length) * Math.PI * 2;
                const x = Math.cos(angle) * 46;
                const y = Math.sin(angle) * 46;

                return (
                  <div
                    key={tech}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${50 + x}%`,
                      top: `${50 + y}%`,
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                      transition={{
                        opacity: { delay: 0.7 + index * 0.08 },
                        scale: { delay: 0.7 + index * 0.08 },
                        y: {
                          duration: 2.8 + index * 0.12,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                      className="block rounded-full border border-primary/25 bg-background/80 px-3 py-1 text-xs font-medium text-primary shadow-card backdrop-blur-md"
                    >
                      {tech}
                    </motion.span>
                  </div>
                );
              })}
              <motion.img
                whileHover={{ scale: 1.04, rotateY: -5, rotateX: 3 }}
                transition={{ duration: 0.3 }}
                src={photo}
                alt={`Photo de ${personal.name}`}
                className="relative z-10 h-96 w-72 lg:h-[32rem] lg:w-[25rem] object-cover object-center rounded-3xl shadow-2xl ring-4 ring-primary/30 border-2 border-primary/50 backdrop-blur-sm"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1 "
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-medium mb-4"
            >
              {getGreeting()}, je suis
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent pb-4"
            >
              <TypeAnimation
                sequence={[
                  personal.name,
                  2000,
                  '',
                  500,
                  personal.name,
                ]}
                wrapper="h1"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl lg:text-3xl text-muted-foreground mb-8"
            >
              <TypeAnimation
                sequence={[
                  "Développeur Fullstack",
                  2000,
                  "DevOps Engineer",
                  2000,
                  "Développeur Frontend Mini Apps",
                  2000,
                  "Architecte SaaS",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionné par la création d'applications web modernes et performantes.
              Spécialisé en développement fullstack avec Spring-Boot, React, Node.js, Laravel, Angular, Next, Nest, Vue, et plus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                asChild
                size="lg"
                className="shimmer-hover bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant"
              >
                <a
                  href={personal.WhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-3 text-white font-semibold"
                  aria-label="Contacter via WhatsApp"
                >
                  <MessageCircleMore className="mr-2 h-5 w-5" />
                  Me contacter sur WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="shimmer-hover border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-elegant"
              >
                <a
                  href="/CV_Abdoulaye_Ly.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-2 text-5md"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Voir mon  CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-card"
              >
                <Github className="h-5 w-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-card"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personal.email}`}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-card"
              >
                <Mail className="h-5 w-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                href={`${personal.WhatsApp}`}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-card"
              >
                <MessageCircleMore className="h-5 w-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
