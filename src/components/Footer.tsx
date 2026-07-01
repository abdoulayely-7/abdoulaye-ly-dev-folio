import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Download, Heart, Code, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {personal.name}
            </h3>
            <p className="text-muted-foreground mb-4">{personal.role}</p>
            <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-elegant"
              >
                <a
                  href="/CV_Abdoulaye_Ly.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Télécharger CV
                </a>
              </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              {["Accueil", "À propos", "Compétences", "Projets", "Contact"].map(
                (item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    onClick={() => {
                      const id = item
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .replace(/\s+/g, "");
                      const element = document.getElementById(
                        id === "accueil" ? "hero" : id === "apropos" ? "about" : id === "competences" ? "skills" : id
                      );
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </motion.button>
                )
              )}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="font-semibold mb-4">Me suivre</h4>
            <div className="flex gap-3 mb-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personal.email}`}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personal.WhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="h-5 w-5" />
              </motion.a>
            </div>
            <p className="text-sm text-muted-foreground">
              Langues : {personal.languages.join(", ")}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} {personal.name}. Créé par{" "}
            <Code className="h-4 w-4 text-primary fill-primary" />  LyDevTech<Code className="h-4 w-4 text-primary fill-primary" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
