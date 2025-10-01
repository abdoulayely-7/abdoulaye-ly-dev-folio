import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import portfolioData from "@/data/portfolio.json";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "Toutes" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Base de données" },
    { id: "tools", label: "Outils" },
    { id: "mobile", label: "Mobile" },
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

        <div className="grid gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground font-mono">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                  className="h-full bg-gradient-primary rounded-full relative overflow-hidden"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
