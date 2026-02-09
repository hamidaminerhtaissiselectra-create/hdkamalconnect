import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabaseClient } from "@/lib/supabase";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { content } from "@/data/content";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom ne doit pas dépasser 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email ne doit pas dépasser 255 caractères"),
  phone: z.string().trim().min(1, "Le téléphone est requis").max(20, "Le téléphone ne doit pas dépasser 20 caractères"),
  message: z.string().trim().min(1, "Le message est requis").max(1000, "Le message ne doit pas dépasser 1000 caractères"),
});

type RequestType = 'quote' | 'info' | 'emergency';

const Contact = () => {
  const { toast } = useToast();
  const companyInfo = content.company.contact;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [requestType, setRequestType] = useState<RequestType>('quote');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      const typeLabels = {
        quote: 'Devis',
        info: 'Information',
        emergency: 'Urgence'
      };

      // Envoi vers Formspree
      const response = await fetch('https://formspree.io/f/mwpzrqyl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          message: validatedData.message,
          request_type: typeLabels[requestType],
          _subject: `Nouvelle demande ${typeLabels[requestType]} - HDConnect`,
        }),
      });

      // 2. Stockage dans Supabase (Panel Admin)
      const { error: supabaseError } = await supabaseClient
        .from('customer_requests')
        .insert([{
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          request_type: requestType,
          message: validatedData.message,
          status: 'new'
        }]);

      if (supabaseError) {
        console.error("Erreur stockage Supabase:", supabaseError);
      }

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du formulaire.');
      }

      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons rapidement. Votre demande a été enregistrée.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setRequestType('quote');
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur de validation",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error('Erreur lors de l\'envoi:', error);
        toast({
          title: "Erreur",
          description: error instanceof Error ? error.message : "Une erreur s'est produite. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-primary/5 via-secondary/30 to-accent/5 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            <Phone className="w-4 h-4" />
            <span>Contact Direct</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {content.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {content.contact.subtitle}
          </p>
        </div>

        {/* Formulaire en premier */}
        <Card className="max-w-2xl mx-auto mb-10 shadow-2xl border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
          {/* Gradient top bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary"></div>
          
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl md:text-3xl font-bold">{content.contact.formTitle}</CardTitle>
            <CardDescription className="text-base">Remplissez ce formulaire et nous vous recontacterons rapidement</CardDescription>
          </CardHeader>
          <CardContent className="px-6 sm:px-8 pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground">Type de demande</label>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <Button
                    type="button"
                    variant={requestType === 'quote' ? 'default' : 'outline'}
                    onClick={() => setRequestType('quote')}
                    className={cn(
                      "w-full h-12 text-xs sm:text-sm transition-all duration-300",
                      requestType === 'quote' && "bg-gradient-to-r from-primary to-accent shadow-lg scale-105"
                    )}
                  >
                    📋 Devis
                  </Button>
                  <Button
                    type="button"
                    variant={requestType === 'info' ? 'default' : 'outline'}
                    onClick={() => setRequestType('info')}
                    className={cn(
                      "w-full h-12 text-xs sm:text-sm transition-all duration-300",
                      requestType === 'info' && "bg-gradient-to-r from-primary to-accent shadow-lg scale-105"
                    )}
                  >
                    ℹ️ Info
                  </Button>
                  <Button
                    type="button"
                    variant={requestType === 'emergency' ? 'default' : 'outline'}
                    onClick={() => setRequestType('emergency')}
                    className={cn(
                      "w-full h-12 text-xs sm:text-sm transition-all duration-300",
                      requestType === 'emergency' && "bg-gradient-to-r from-destructive to-red-600 shadow-lg scale-105"
                    )}
                  >
                    🚨 Urgence
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jean.dupont@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Téléphone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre besoin..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-base font-semibold"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "✉️ Envoyer la demande"}
              </Button>
              
              {/* Trust text */}
              <p className="text-center text-sm text-muted-foreground mt-4">
                ✓ Sans engagement • ✓ Réponse rapidement • ✓ Données sécurisées
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Informations de contact en dessous */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Téléphone</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <a href={`tel:${companyInfo.phoneMobile.replace(/\s/g, '')}`} className="text-primary font-bold text-lg hover:underline block">
                {companyInfo.phoneMobile}
              </a>
              <a href={`tel:${companyInfo.phoneFixe.replace(/\s/g, '')}`} className="text-primary/80 font-medium hover:underline block">
                {companyInfo.phoneFixe}
              </a>
              <p className="text-xs text-muted-foreground mt-2">9h - 18h</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <a href={`mailto:${companyInfo.email}`} className="text-primary font-bold text-base hover:underline break-all block">
                {companyInfo.email}
              </a>
              <p className="text-xs text-muted-foreground mt-2">Réponse rapidement</p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg">Adresse</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-foreground font-semibold">{companyInfo.address}</p>
              <p className="text-xs text-muted-foreground mt-2">Toute l'Île-de-France</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
