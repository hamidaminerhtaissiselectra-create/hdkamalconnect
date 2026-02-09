import { Star, Quote, MapPin, Building2, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MiniTestimonialsProps {
  location?: string;
  showCTA?: boolean;
}

// Composant mini-témoignages pour les pages locales
// 3 témoignages courts et percutants avec preuve sociale dynamique
const MiniTestimonials = ({ location, showCTA = true }: MiniTestimonialsProps) => {
  // Hash simple pour générer des témoignages pseudo-uniques par ville
  const hashLocation = (str: string): number => {
    if (!str) return 0;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  };

  const locationHash = hashLocation(location || "");
  
  // Pool de noms et rôles pour variété
  const firstNames = ["Marie", "Sophie", "Philippe", "Jean", "Isabelle", "Pierre", "Catherine", "Laurent", "Nathalie", "François", "Sandrine", "Michel"];
  const lastInitials = ["L.", "D.", "M.", "B.", "R.", "G.", "P.", "T.", "V.", "C."];
  const roles = [
    "Gérante boutique", "Directeur PME", "Particulier", "Responsable sécurité", 
    "Propriétaire", "Gérant restaurant", "Directrice agence", "Chef d'entreprise"
  ];
  
  const baseTestimonials = [
    {
      texts: [
        "Installation rapide et professionnelle. Plus aucun incident depuis !",
        "6 caméras installées en une journée. Plus aucun vol depuis !",
        "Équipe réactive et matériel de qualité. Je recommande sans hésiter."
      ],
      highlights: ["ROI en 3 mois", "Zéro incident", "Intervention 24h"],
      service: "Vidéosurveillance"
    },
    {
      texts: [
        "Tous nos accès sont sécurisés. Gestion centralisée parfaite.",
        "3 sites sécurisés avec contrôle d'accès. Aucune intrusion depuis 2 ans.",
        "Badge + biométrie : nos locaux sont vraiment protégés maintenant."
      ],
      highlights: ["50 collaborateurs", "Multi-sites", "Biométrie"],
      service: "Contrôle d'accès"
    },
    {
      texts: [
        "Suite à un cambriolage, HD Connect m'a rassurée. Je dors sereinement !",
        "Alarme NF&A2P installée rapidement. Mon assurance a baissé de 15% !",
        "Télésurveillance 24/7 : on se sent vraiment protégés maintenant."
      ],
      highlights: ["Télésurveillance 24/7", "Assurance -15%", "Certifié NF&A2P"],
      service: "Alarme"
    }
  ];

  // Générer des témoignages pseudo-uniques basés sur la localisation
  const testimonials = baseTestimonials.map((base, index) => {
    const seed = locationHash + index;
    const firstName = firstNames[(seed) % firstNames.length];
    const lastInitial = lastInitials[(seed * 3) % lastInitials.length];
    const role = roles[(seed * 2) % roles.length];
    const text = base.texts[seed % base.texts.length];
    const highlight = base.highlights[seed % base.highlights.length];
    
    // Localisation dynamique
    const displayLocation = location 
      ? location 
      : ["Paris 11e", "Nanterre (92)", "Versailles (78)", "Lyon 3e", "Marseille 8e"][index % 5];

    return {
      name: `${firstName} ${lastInitial}`,
      role,
      location: displayLocation,
      rating: 5,
      text,
      highlight,
      service: base.service
    };
  });

  const stats = [
    { value: "2000+", label: "Clients" },
    { value: "4.9/5", label: "Note" },
    { value: "98%", label: "Recommandent" },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Stats rapides */}
        <AnimatedSection animation="fade-up">
          <div className="flex justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Ils nous font confiance {location ? `près de ${location}` : ""}
            </h2>
          </div>
        </AnimatedSection>

        {/* Témoignages */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
              <Card className="hover-lift h-full border-border">
                <CardContent className="p-5">
                  {/* Badge service */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                      {testimonial.service}
                    </span>
                  </div>
                  
                  {/* Témoignage court */}
                  <Quote className="w-5 h-5 text-primary/30 mb-2" />
                  <p className="text-foreground text-sm mb-3">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Highlight */}
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-500/10 text-green-600 text-xs font-medium mb-3">
                    <CheckCircle className="w-3 h-3" />
                    {testimonial.highlight}
                  </div>
                  
                  {/* Auteur */}
                  <div className="border-t pt-3 flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link to="/#testimonials">
                  Voir tous les avis clients →
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
};

export default MiniTestimonials;
