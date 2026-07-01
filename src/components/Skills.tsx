import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolioData from "@/data/portfolio.json";
import { Button } from "@/components/ui/button";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiDocker,
  SiFlutter,
  SiHono,
  SiVuedotjs,
  SiNextdotjs,
  SiNestjs,
  SiSpringboot,
  SiSymfony,
  SiDjango,
  SiFlask,
  SiDart,
  SiJenkins,
  SiKubernetes,
  SiGit,
  SiGithub,
  SiAmazonwebservices,
  SiRender,
  SiVercel,
  SiSonarqube,
  SiMongodb,
  SiSupabase,
  SiSwagger,
  SiGithubactions,
  SiTerraform,
  SiAnsible,
} from "react-icons/si";
import { FaJava, FaHashtag } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const getSkillIcon = (name: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      JavaScript: <SiJavascript className="w-8 h-8" />,
      TypeScript: <SiTypescript className="w-8 h-8" />,
      React: <SiReact className="w-8 h-8" />,
      Angular: <SiAngular className="w-8 h-8" />,
      "Node.js": <SiNodedotjs className="w-8 h-8" />,
      Express: <SiExpress className="w-8 h-8" />,
      PHP: <SiPhp className="w-8 h-8" />,
      Laravel: <SiLaravel className="w-8 h-8" />,
      Python: <SiPython className="w-8 h-8" />,
      Java: <FaJava className="w-8 h-8" />,
      PostgreSQL: <SiPostgresql className="w-8 h-8" />,
      MySQL: <SiMysql className="w-8 h-8" />,
      Prisma: <SiPrisma className="w-8 h-8" />,
      Docker: <SiDocker className="w-8 h-8" />,
      Flutter: <SiFlutter className="w-8 h-8" />,
      Hono: <SiHono className="w-8 h-8" />,
      "React Native": <SiReact className="w-8 h-8" />,
      Vue: <SiVuedotjs className="w-8 h-8" />,
      "Next.js": <SiNextdotjs className="w-8 h-8" />,
      NestJS: <SiNestjs className="w-8 h-8" />,
      "Spring Boot": <SiSpringboot className="w-8 h-8" />,
      Symfony: <SiSymfony className="w-8 h-8" />,
      Django: <SiDjango className="w-8 h-8" />,
      Flask: <SiFlask className="w-8 h-8" />,
      "C#": <FaHashtag className="w-8 h-8" />,
      "ASP.NET": <FaHashtag className="w-8 h-8" />,
      Dart: <SiDart className="w-8 h-8" />,
      Jenkins: <SiJenkins className="w-8 h-8" />,
      Kubernetes: <SiKubernetes className="w-8 h-8" />,
      Git: <SiGit className="w-8 h-8" />,
      GitHub: <SiGithub className="w-8 h-8" />,
      "GitHub Actions": <SiGithubactions className="w-8 h-8" />,
      Terraform: <SiTerraform className="w-8 h-8" />,
      Ansible: <SiAnsible className="w-8 h-8" />,
      AWS: <SiAmazonwebservices className="w-8 h-8" />,
      "Microsoft Azure": <TbBrandAzure className="w-8 h-8" />,
      Render: <SiRender className="w-8 h-8" />,
      Vercel: <SiVercel className="w-8 h-8" />,
      SonarQube: <SiSonarqube className="w-8 h-8" />,
      MongoDB: <SiMongodb className="w-8 h-8" />,
      Supabase: <SiSupabase className="w-8 h-8" />,
      Swagger: <SiSwagger className="w-8 h-8" />,
    };
    return iconMap[name] || <div className="w-8 h-8 bg-muted rounded" />;
  };

  const categories = [
    { id: "all", label: "Toutes" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "mobile", label: "Mobile" },
    { id: "database", label: "Bases de données" },
    { id: "devops", label: "DevOps & Cloud" },
    { id: "tools", label: "Outils" },
  ];

  const filteredSkills =
    filter === "all"
      ? portfolioData.skills
      : portfolioData.skills.filter((skill) => skill.category === filter);

  return (
    <section id="skills" className="py-24 px-4 bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mes{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              compétences
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications
            modernes et performantes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setFilter(category.id)}
              variant={filter === category.id ? "default" : "outline"}
              className={
                filter === category.id
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:border-primary"
              }
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group flex flex-col items-center justify-center p-4 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-elegant"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3.2 + (index % 4) * 0.25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mb-3 text-primary transition-all group-hover:drop-shadow-[0_0_14px_hsl(var(--primary)/0.75)]"
              >
                {getSkillIcon(skill.name)}
              </motion.div>
              <span className="font-medium text-foreground text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
