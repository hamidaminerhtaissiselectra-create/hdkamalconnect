import { useParams, Navigate, Link } from "react-router-dom";
import { getCityBySlug, CityData } from "@/data/citiesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import ServicesHubLink from "@/components/ServicesHubLink";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Camera,
  ShieldAlert,
  Lock,
  Home,
  Wifi,
  Wrench,
  Radio,
  DoorOpen,
} from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

// Mapping des services
const servicesConfig = {
  videosurveillance: {
    icon: Camera,
    title: "Vidéosurveillance",
    shortTitle: "Vidéosurveillance",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    mainService: "/services/videosurveillance",
    features: [
      "Caméras 4K Ultra HD avec IA intégrée",
      "Vision nocturne avancée 30m",
      "Détection intelligente de mouvements",
      "Accès mobile 24/7 sécurisé",
      "Stockage cloud chiffré ou NVR local",
      "Installation discrète et professionnelle",
    ],
    benefits: [
      "Réduction des cambriolages de 60%",
      "Preuves vidéo exploitables",
      "Surveillance à distance en temps réel",
      "Alertes instantanées sur smartphone",
    ],
  },
  alarme: {
    icon: ShieldAlert,
    title: "Alarme",
    shortTitle: "Alarme",
    color: "from-red-500/20 to-orange-500/20",
    iconColor: "text-red-500",
    mainService: "/services/alarme",
    features: [
      "Alarmes certifiées NF&A2P",
      "Sirène 110dB intérieure/extérieure",
      "Détecteurs de mouvement PIR",
      "Contacts d'ouverture portes/fenêtres",
      "Télésurveillance 24/7 optionnelle",
      "Bouton panique et alerte silencieuse",
    ],
    benefits: [
      "Protection active contre les intrusions",
      "Effet dissuasif garanti",
      "Intervention rapide des forces de l'ordre",
      "Réduction prime assurance jusqu'à 15%",
    ],
  },
  "controle-acces": {
    icon: Lock,
    title: "Contrôle d'Accès",
    shortTitle: "Contrôle Accès",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    mainService: "/services/controle-acces",
    features: [
      "Lecteurs de badges RFID/NFC",
      "Biométrie empreinte et faciale",
      "Interphones vidéo IP",
      "Gestion cloud centralisée",
      "Historique des accès complet",
      "Intégration domotique et alarme",
    ],
    benefits: [
      "Contrôle total des entrées/sorties",
      "Traçabilité des accès",
      "Gestion multi-sites simple",
      "Sécurité renforcée sans clés",
    ],
  },
  domotique: {
    icon: Home,
    title: "Domotique",
    shortTitle: "Domotique",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
    mainService: "/services/domotique",
    features: [
      "Éclairage intelligent automatisé",
      "Thermostat connecté et programmable",
      "Volets roulants motorisés",
      "Scénarios personnalisés",
      "Commande vocale compatible",
      "Application mobile unifiée",
    ],
    benefits: [
      "Économies d'énergie jusqu'à 30%",
      "Confort au quotidien",
      "Simulation de présence",
      "Valorisation du bien immobilier",
    ],
  },
  reseau: {
    icon: Wifi,
    title: "Réseau Informatique",
    shortTitle: "Réseau",
    color: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-500",
    mainService: "/services/reseau",
    features: [
      "WiFi 6E haute performance",
      "Câblage Cat 6A certifié",
      "Fibre optique entreprise",
      "Firewall et sécurité réseau",
      "Baies de brassage professionnelles",
      "Onduleurs et protection électrique",
    ],
    benefits: [
      "Connexion ultra-rapide et stable",
      "Sécurité des données renforcée",
      "Infrastructure évolutive",
      "Support technique réactif",
    ],
  },
  maintenance: {
    icon: Wrench,
    title: "Maintenance",
    shortTitle: "Maintenance",
    color: "from-amber-500/20 to-yellow-500/20",
    iconColor: "text-amber-500",
    mainService: "/services/maintenance",
    features: [
      "Contrats de maintenance annuels",
      "Interventions préventives régulières",
      "Dépannage 24/7 urgences",
      "Mises à jour firmware incluses",
      "Remplacement matériel défaillant",
      "Rapport d'état annuel",
    ],
    benefits: [
      "Tranquillité d'esprit totale",
      "Durée de vie prolongée du matériel",
      "Tarifs préférentiels interventions",
      "Priorité support technique",
    ],
  },
  "antenne-satellite": {
    icon: Radio,
    title: "Antenne & Satellite",
    shortTitle: "Antenne",
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-500",
    mainService: "/services/antenne-satellite",
    features: [
      "Installation antenne TNT HD",
      "Paraboles satellite multi-têtes",
      "Antennes collectives immeuble",
      "Amplificateurs et répartiteurs",
      "Réception chaînes étrangères",
      "Dépannage et réglage précis",
    ],
    benefits: [
      "Réception optimale garantie",
      "Accès à toutes les chaînes",
      "Installation propre et durable",
      "Service après-vente réactif",
    ],
  },
  "portails-parking": {
    icon: DoorOpen,
    title: "Portails & Parking",
    shortTitle: "Portails",
    color: "from-slate-500/20 to-gray-500/20",
    iconColor: "text-slate-500",
    mainService: "/services/portails-parking",
    features: [
      "Motorisation portail coulissant",
      "Portail battant automatique",
      "Porte de garage sectionnelle",
      "Barrières levantes parking",
      "Télécommandes et badges",
      "Photocellules et sécurités",
    ],
    benefits: [
      "Accès automatisé sécurisé",
      "Confort au quotidien",
      "Intégration domotique possible",
      "Robustesse et fiabilité",
    ],
  },
};

type ServiceKey = keyof typeof servicesConfig;

interface CityServiceDetailPageProps {
  city?: CityData;
}

const CityServiceDetailPage = ({ city: propCity }: CityServiceDetailPageProps) => {
  const { citySlug, serviceSlug } = useParams<{ citySlug: string; serviceSlug: string }>();
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  const city = propCity || (citySlug ? getCityBySlug(citySlug) : null);
  const service = serviceSlug ? servicesConfig[serviceSlug as ServiceKey] : null;

  if (!city || !service) {
    return <Navigate to="/zones-intervention" replace />;
  }

  useSEO({
    title: `${service.title} ${city.name} (${city.departmentCode}) | Expert 2025-2026 | HD Connect`,
    description: `Expert ${service.title.toLowerCase()} à ${city.name} : installation, dépannage et maintenance. Certifié NF&A2P, intervention rapide en ${city.department}. Devis gratuit.`,
    keywords: `${service.title.toLowerCase()} ${city.name}, ${service.shortTitle.toLowerCase()} ${city.departmentCode}, installation ${service.shortTitle.toLowerCase()} ${city.department}, HD Connect ${city.region}`,
    canonicalUrl: `https://hdconnect.fr/villes/${city.slug}/${serviceSlug}`,
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: city.region, url: `/zones-intervention/${city.regionSlug}` },
    { name: city.name, url: `/villes/${city.slug}` },
    { name: service.title, url: `/villes/${city.slug}/${serviceSlug}` },
  ];

  const faqItems = [
    {
      question: `Quel est le prix d'une installation ${service.title.toLowerCase()} à ${city.name} ?`,
      answer: `Le prix d'une installation ${service.title.toLowerCase()} à ${city.name} varie selon la superficie et les équipements choisis. HD Connect vous propose un devis gratuit et personnalisé après étude de vos besoins. Nos solutions démarrent à partir de tarifs compétitifs avec garantie 5 ans.`,
    },
    {
      question: `HD Connect intervient-il rapidement pour ${service.title.toLowerCase()} à ${city.name} ?`,
      answer: `Oui, HD Connect dispose d'équipes locales en ${city.department} permettant une intervention rapide à ${city.name}. Délai standard : 24-48h pour les installations, intervention urgence possible le jour même.`,
    },
    {
      question: `Quelles garanties pour votre ${service.title.toLowerCase()} à ${city.name} ?`,
      answer: `HD Connect garantit toutes ses installations ${service.title.toLowerCase()} à ${city.name} pendant 5 ans minimum. Nous proposons également des contrats de maintenance pour assurer la pérennité de vos équipements.`,
    },
    {
      question: `Proposez-vous la maintenance ${service.title.toLowerCase()} à ${city.name} ?`,
      answer: `Absolument. HD Connect propose des contrats de maintenance préventive et curative pour vos équipements ${service.title.toLowerCase()} à ${city.name}. Interventions régulières et support prioritaire inclus.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.title} ${city.name}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "HD Connect",
      "telephone": "+33 6 27 13 53 04",
      "email": "contact@hdconnect.fr",
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
    },
    "serviceType": service.title,
    "description": `Installation et maintenance ${service.title.toLowerCase()} à ${city.name} par HD Connect.`,
  };

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">🏠</Link>
            {breadcrumbItems.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <span>›</span>
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-foreground font-medium">{item.name}</span>
                ) : (
                  <Link to={item.url} className="hover:text-primary transition-colors">{item.name}</Link>
                )}
              </span>
            ))}
          </nav>

          {/* Navigation retour */}
          <div className="flex gap-3 mb-8">
            <Button variant="outline" size="sm" className="gap-2" asChild>
              <Link to={`/villes/${city.slug}`}>
                <ArrowLeft className="w-4 h-4" />
                {city.name}
              </Link>
            </Button>
            <ServicesHubLink />
          </div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} mb-6`}>
                <ServiceIcon className={`w-5 h-5 ${service.iconColor}`} />
                <span className="font-medium text-foreground">{service.title}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {service.title} à{" "}
                <span className="text-primary">{city.name}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
                Expert {service.title.toLowerCase()} à {city.name} ({city.departmentCode}). 
                HD Connect installe et maintient vos systèmes avec des équipements certifiés. 
                Intervention rapide en {city.department}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-lg"
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                >
                  Devis gratuit {service.shortTitle}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href={callUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 w-5 h-5" />
                    {phoneNumber}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Notre offre {service.title} à {city.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Solutions professionnelles adaptées aux besoins des particuliers et entreprises de {city.name}.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-all">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Avantages {service.title}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50"
              >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className={`w-5 h-5 ${service.iconColor}`} />
                </div>
                <span className="text-foreground font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions Fréquentes - {service.title} {city.name}
              </h2>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ServiceIcon className={`w-12 h-12 mx-auto mb-4 ${service.iconColor}`} />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Prêt pour votre projet {service.title} à {city.name} ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous pour une étude personnalisée et un devis gratuit. 
              Nos experts {city.department} sont à votre disposition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-lg"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to={service.mainService}>
                  Découvrir le service {service.shortTitle}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CityServiceDetailPage;
