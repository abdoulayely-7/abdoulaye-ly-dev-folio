import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        {/* <Services /> */}
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
