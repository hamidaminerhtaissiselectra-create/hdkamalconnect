import { Link } from "react-router-dom";
import { services } from "@/data/seoData";
import { ArrowRight, MapPin, Building2, Camera, ShieldAlert, Lock, Home, Wifi, Wrench, Radio, DoorOpen, Package, Settings, Truck } from "lucide-react";

interface LocalServiceLinksProps {
  cityName?: string;
  regionName?: string;
  regionSlug?: string;
  currentService?: string;
}

// Composant de maillage interne pour pages locales
// Architecture SEO : liens vers tous les services pertinents + page nationale
const LocalServiceLinks = ({ cityName, regionName, regionSlug, currentService }: LocalServiceLinksProps) => {
  const location = cityName || regionName || "";

  // Services principaux avec icônes
  const mainServices = [
    { slug: "videosurveillance", name: "Vidéosurveillance", icon: Camera },
    { slug: "alarme", name: "Alarme", icon: ShieldAlert },
    { slug: "controle-acces", name: "Contrôle d'accès", icon: Lock },
    { slug: "domotique", name: "Domotique", icon: Home },
    { slug: "reseau", name: "Réseau", icon: Wifi },
    { slug: "maintenance", name: "Maintenance", icon: Wrench },
    { slug: "antenne-satellite", name: "Antenne", icon: Radio },
    { slug: "portails-parking", name: "Portails", icon: DoorOpen },
  ];

  // Prestations transversales
  const prestations = [
    { slug: "installation", name: "Installation", icon: Package },
    { slug: "depannage", name: "Dépannage", icon: Settings },
    { slug: "location", name: "Location", icon: Truck },
  ];

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Services nationaux */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center flex items-center justify-center gap-2">
            <Camera className="w-5 h-5 text-primary" />
            Nos Services {location ? `disponibles à ${location}` : ""}
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {mainServices.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="flex items-center gap-2 p-3 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                  {service.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Prestations */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-foreground mb-3 text-center">
            Types de prestations
          </h4>
          
          <div className="flex flex-wrap justify-center gap-3">
            {prestations.map((prestation) => (
              <Link
                key={prestation.slug}
                to={`/services/${prestation.slug}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/30 transition-all group"
              >
                <prestation.icon className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground group-hover:text-primary transition-colors text-sm">
                  {prestation.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Lien région */}
        {regionSlug && (
          <div className="text-center">
            <Link
              to={`/zones-intervention/${regionSlug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium hover:bg-primary/20 transition-all"
            >
              <MapPin className="w-4 h-4" />
              Voir tous nos services en {regionName}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Hub régions */}
        <div className="text-center mt-6">
          <Link
            to="/zones-intervention"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Building2 className="w-4 h-4" />
            Découvrir toutes nos zones d'intervention
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocalServiceLinks;
