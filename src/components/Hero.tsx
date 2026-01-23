import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, MessageCircleMore, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolioData from "@/data/portfolio.json";
import photo from "@/assets/photo.jpeg";

const Hero = () => {
  const { personal } = portfolioData;

  const getGreeting = () => {
    const hour = new Date().getHours();
    return hour < 18 ? "Bonjour" : "Bonsoir";
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={photo}
                alt={`Photo de ${personal.name}`}
                className="relative w-72 h-72 lg:w-96 lg:h-96 object-cover object-top rounded-2xl shadow-elegant"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
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
              className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"
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
                  personal.role,
                  2000,
                  'Passionné par le développement web',
                  2000,
                  'Expert en technologies modernes',
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
              Spécialisé en développement fullstack avec React, Node.js, Laravel et plus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
              >
                <Mail className="mr-2 h-5 w-5" />
                Me contacter
              </Button>

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
