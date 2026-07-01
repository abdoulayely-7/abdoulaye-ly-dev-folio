import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Palette, Zap } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Code maintenable et bien structuré",
    },
    {
      icon: Database,
      title: "Architecture",
      description: "Solutions scalables et robustes",
    },
    {
      icon: Palette,
      title: "UI/UX",
      description: "Interfaces modernes et intuitives",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Applications rapides et optimisées",
    },
  ];

  return (
    <section id="about" className=" px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            À propos de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              moi
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {personal.about}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Au fil de mes projets, j'ai développé des plateformes SaaS, des API sécurisées, des applications mobiles Flutter et des mini apps, en mettant l'accent sur la qualité du code, l'expérience utilisateur et les bonnes pratiques de développement.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Curieux et passionné par les nouvelles technologies, j'apprécie relever des défis techniques, apprendre en continu et collaborer au sein d'équipes agiles pour concevoir des solutions à forte valeur ajoutée.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-card/80 border border-border rounded-xl p-5 shadow-card hover:border-primary/40 hover:shadow-elegant transition-all"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
