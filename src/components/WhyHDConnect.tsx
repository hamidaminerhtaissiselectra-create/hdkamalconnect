import { Shield, Clock, Award, Phone, CheckCircle, AlertTriangle, TrendingDown, Lock, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface WhyHDConnectProps {
  cityName?: string;
  regionName?: string;
}

// Composant "Pourquoi HD Connect" orienté problèmes clients
// SEO: adresse les pain points et construit la confiance
const WhyHDConnect = ({ cityName, regionName }: WhyHDConnectProps) => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();
  const locationName = cityName || regionName || "votre région";

  // Pain points clients avec solutions
  const painPoints = [
    {
      problem: "Cambriolages en hausse",
      icon: AlertTriangle,
      solution: "Alarmes NF&A2P + télésurveillance 24/7",
      result: "Protection certifiée assurances"
    },
    {
      problem: "Intervention trop lente",
      icon: Clock,
      solution: "Techniciens locaux formés",
      result: "Intervention sous 24-48h garantie"
    },
    {
      problem: "Devis opaques et surprises",
      icon: TrendingDown,
      solution: "Audit gratuit + devis détaillé",
      result: "Prix fixe sans mauvaise surprise"
    },
    {
      problem: "Matériel obsolète rapidement",
      icon: Lock,
      solution: "Marques leaders (Hikvision, Ajax)",
      result: "Garantie 5 ans pièces et main d'œuvre"
    }
  ];

  // Engagements concrets
  const commitments = [
    { icon: Zap, label: "Devis rapidement", description: "Réponse rapide garantie" },
    { icon: Clock, label: "Intervention Rapide", description: "Techniciens de proximité" },
    { icon: Award, label: "Garantie 5 ans", description: "Pièces et main d'œuvre" },
    { icon: Phone, label: "Support 24/7", description: "Assistance téléphonique" },
    { icon: Shield, label: "Certifié NF&A2P", description: "Reconnu assurances" },
    { icon: Heart, label: "Satisfaction garantie", description: "Ou intervention offerte" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header orienté problème */}
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-medium mb-4">
              <AlertTriangle className="w-4 h-4" />
              <span>Vous avez un projet sécurité ?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pourquoi Choisir HD Connect {cityName ? `à ${cityName}` : regionName ? `en ${regionName}` : ""} ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Nous comprenons vos préoccupations. Voici comment HD Connect répond à vos besoins concrets.
            </p>
          </div>
        </AnimatedSection>

        {/* Pain Points → Solutions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {painPoints.map((item, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
              <Card className="hover-lift h-full border-border hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-destructive font-medium mb-1">Votre préoccupation</div>
                      <h3 className="font-bold text-foreground text-lg mb-3">{item.problem}</h3>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{item.solution}</span>
                      </div>
                      
                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-sm font-medium">
                        <CheckCircle className="w-3 h-3" />
                        {item.result}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Engagements */}
        <AnimatedSection animation="fade-up">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-xl font-bold text-center text-foreground mb-6">
              Nos 6 Engagements pour {locationName}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {commitments.map((commitment, index) => (
                <div key={index} className="text-center p-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <commitment.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="font-medium text-foreground text-sm">{commitment.label}</div>
                  <div className="text-xs text-muted-foreground">{commitment.description}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA de réassurance */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="max-w-2xl mx-auto text-center mt-10">
            <p className="text-muted-foreground mb-6">
              <strong>Pas de risque :</strong> Audit gratuit, devis sans engagement, et satisfaction garantie ou intervention offerte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                Demander un audit gratuit
              </Button>
              <Button 
                size="lg" 
                className="bg-primary/20 backdrop-blur-sm text-primary border-2 border-primary/50 hover:bg-primary/30 hover:border-primary/70 transition-all"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyHDConnect;
