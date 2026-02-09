import { Wrench, Settings, Package, CheckCircle, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface ServicePrestationsProps {
  serviceName: string;
  interventionMode?: boolean;
}

const prestations = [
  {
    icon: Settings,
    title: "Installation Professionnelle",
    description: "Installation complète par nos techniciens certifiés avec mise en service et formation.",
    features: ["Étude de site gratuite", "Installation rapidement", "Configuration incluse", "Garantie 5 ans"],
  },
  {
    icon: Wrench,
    title: "Dépannage Express",
    description: "Intervention rapide en cas de panne ou dysfonctionnement de vos équipements.",
    features: ["Intervention Rapide", "Disponible 24/7", "Diagnostic gratuit", "Pièces d'origine"],
  },
  {
    icon: Package,
    title: "Location d'Équipements",
    description: "Location de matériel pour événements, chantiers ou besoins temporaires.",
    features: ["Équipement premium", "Installation incluse", "Durée flexible", "Support technique"],
  },
];

const ServicePrestations = ({ serviceName, interventionMode = false }: ServicePrestationsProps) => {
  const { scrollToSection } = useSmoothScroll();
  
  const ctaLabel = interventionMode ? "Besoin d'une intervention" : "Demander un devis gratuit";
  const ctaMode = interventionMode ? "intervention" : "quote";

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-center">
            Installation, Dépannage & Location
          </h2>
          <p className="section-subtitle text-center">
            HD Connect vous accompagne de A à Z pour votre {serviceName.toLowerCase()} : installation neuve, dépannage express ou location temporaire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {prestations.map((prestation, index) => {
            const Icon = prestation.icon;
            return (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{prestation.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{prestation.description}</p>
                <ul className="space-y-2">
                  {prestation.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => scrollToSection("quote", { mode: ctaMode })}
            size="lg"
            variant={interventionMode ? "intervention" : undefined}
            className={interventionMode ? "gap-2" : "bg-gradient-to-r from-primary to-accent hover:opacity-90 gap-2"}
          >
            {interventionMode ? (
              <Wrench className="w-4 h-4" />
            ) : (
              <FileText className="w-4 h-4" />
            )}
            {ctaLabel}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicePrestations;
