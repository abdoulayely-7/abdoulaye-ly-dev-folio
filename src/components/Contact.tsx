import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Copy, Check, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import portfolioData from "@/data/portfolio.json";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    toast({
      title: "Email copié !",
      description: "L'adresse email a été copiée dans le presse-papier.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://portfolio-mailer-0zvf.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
        setFormData({ nom: "", email: "", message: "" });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-card/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Me{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              contacter
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter. Je suis
            toujours ouvert aux nouvelles opportunités et collaborations.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-card border border-border rounded-xl p-6 shadow-card ring-2 ring-green-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">Réponse instantanée 24/7</p>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-green-600 hover:bg-green-700 text-white shadow-elegant"
              >
                <a
                  href={personal.WhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Ouvrir WhatsApp
                </a>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card ring-2 ring-purple-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">Réponse garantie sous 24h</p>
                </div>
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="block text-sm text-purple-600 hover:underline break-all font-medium mb-4"
              >
                {personal.email}
              </a>
              <Button
                onClick={handleCopyEmail}
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copié !
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copier l'email
                  </>
                )}
              </Button>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card ring-2 ring-blue-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p className="text-sm text-muted-foreground">Appel direct disponible</p>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {personal.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="block text-sm text-blue-600 hover:underline font-medium"
                  >
                    {phone}
                  </a>
                ))}
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <a href={`tel:${personal.phone[0]}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Appeler maintenant
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
