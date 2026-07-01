import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import portfolioData from "@/data/portfolio.json";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const projectFilters = [
    { value: "all", label: "Tous" },
    { value: "fullstack", label: "Fullstack" },
    { value: "frontend", label: "Frontend" },
    { value: "backend", label: "Backend" },
    { value: "mobile", label: "Mobile" },
    { value: "devops", label: "DevOps" },
  ];

  const filteredProjects =
    filter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((project) =>
          project.tags.includes(filter)
        );

  return (
    <section id="projects" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Mes{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              projets
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Une sélection de projets sur lesquels j'ai travaillé, démontrant ma
            polyvalence et mon expertise technique.
          </p>

          <div className="flex flex-wrap gap-2 justify-center items-center">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {projectFilters.map((item) => (
              <Button
                key={item.value}
                onClick={() => setFilter(item.value)}
                variant={filter === item.value ? "default" : "outline"}
                size="sm"
                className={
                  filter === item.value
                    ? "bg-primary text-primary-foreground"
                    : "border-border hover:border-primary"
                }
              >
                {item.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [perspective:1200px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateX: 2.5,
                rotateY: -3,
                z: 24,
              }}
              className="group break-inside-avoid [transform-style:preserve-3d]"
            >
              <div className="relative overflow-hidden bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 [transform-style:preserve-3d] group-hover:border-primary/40">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 [transform:translateZ(18px)]">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 whitespace-pre-line">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 [transform:translateZ(12px)]">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-muted text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.referent && (
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border [transform:translateZ(10px)]">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">Référent :</span> {project.referent}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-border [transform:translateZ(14px)]">
                  <span className="text-sm text-muted-foreground">
                    {project.year}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors text-right"
                  >
                    <Github className="h-4 w-4" />
                    Voir sur GitHub
                  </a>
                </div>
                <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-background/90 px-3 py-2 text-sm font-medium text-primary shadow-card backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-4 w-4" />
                    Code source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
