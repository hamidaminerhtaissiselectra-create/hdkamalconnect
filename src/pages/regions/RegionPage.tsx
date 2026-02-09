import { useParams, Navigate, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/FAQAccordion";
import LocalServiceLinks from "@/components/LocalServiceLinks";
import MiniTestimonials from "@/components/MiniTestimonials";
import WhyHDConnect from "@/components/WhyHDConnect";
import RegionHeroParallax from "@/components/region/RegionHeroParallax";
import { getRegionBySlug, regionsData } from "@/data/regionsData";
import { getCitiesByRegion } from "@/data/citiesData";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Building2,
  Shield,
  Phone,
  CheckCircle,
  Clock,
  Award,
  Users,
  Camera,
  ShieldAlert,
  Lock,
  Home,
  Wifi,
  Wrench,
  Zap,
  Building,
} from "lucide-react";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";


const RegionPage = () => {
  const { regionSlug } = useParams<{ regionSlug: string }>();
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();


  if (!regionSlug) {
    return <Navigate to="/zones-intervention" replace />;
  }

  const region = getRegionBySlug(regionSlug);

  if (!region) {
    return <Navigate to="/zones-intervention" replace />;
  }

  // Récupérer les villes de la région qui ont une page dédiée
  const regionCities = getCitiesByRegion(region.name);

  useSEO({
    title: `Expert Sécurité 2025-2026 ${region.name} | Vidéosurveillance & Alarme IA | HD Connect`,
    description: `${region.seoDescription} Solutions de sécurité intelligentes 2025-2026 en ${region.name}. Installation vidéosurveillance 4K et alarme NF&A2P rapidement.`,
    keywords: `sécurité ${region.name} 2025-2026, vidéosurveillance ${region.name}, alarme ${region.name}, installation caméra IA, HD Connect, expert sécurité ${region.name}`,
    canonicalUrl: `https://hdconnect.fr/zones-intervention/${region.slug}`,
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: region.name, url: `/zones-intervention/${region.slug}` },
  ];

  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: `Installation de caméras HD et 4K en ${region.name}. Surveillance intérieure et extérieure, accès mobile 24/7.`,
      link: "/services/videosurveillance"
    },
    {
      icon: ShieldAlert,
      title: "Systèmes d'Alarme",
      description: `Alarmes anti-intrusion certifiées NF&A2P en ${region.name}. Télésurveillance 24/7 et intervention rapide.`,
      link: "/services/alarme"
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      description: `Solutions de contrôle d'accès professionnelles en ${region.name}. Badges, biométrie, interphones vidéo.`,
      link: "/services/controle-acces"
    },
    {
      icon: Home,
      title: "Domotique",
      description: `Maison intelligente en ${region.name}. Automatisation sécurité, éclairage, chauffage. Contrôle smartphone.`,
      link: "/services/domotique"
    },
    {
      icon: Wifi,
      title: "Réseau & Câblage",
      description: `Infrastructure réseau professionnelle en ${region.name}. WiFi 6E, câblage Cat 6A, Firewall.`,
      link: "/services/reseau"
    },
    {
      icon: Wrench,
      title: "Maintenance 24/7",
      description: `Maintenance et dépannage express en ${region.name}. Contrats préventifs, intervention rapide.`,
      link: "/services/maintenance"
    }
  ];

  const faqItems = [
    {
      question: `HD Connect intervient-il dans toute la région ${region.name} ?`,
      answer: `Oui, HD Connect assure une couverture complète de la région ${region.name}. Nos techniciens interviennent dans l'ensemble des ${region.departments.length} départements : ${region.departments.map(d => d.name).join(", ")}.`
    },
    {
      question: `Quels sont les délais d'intervention en ${region.name} ?`,
      answer: `Nos délais d'intervention en ${region.name} sont généralement de 24 à 48 heures pour les installations et maintenances programmées. Pour les urgences, nous disposons d'équipes de proximité capables d'intervenir le jour même selon les disponibilités.`
    },
    {
      question: `Les frais de déplacement sont-ils inclus en ${region.name} ?`,
      answer: `Les frais de déplacement en ${region.name} sont généralement inclus dans nos devis. Pour les projets importants, le déplacement est toujours gratuit. Nous vous communiquons un devis transparent avant toute intervention.`
    },
    {
      question: `Quelles villes couvrez-vous en ${region.name} ?`,
      answer: `Nous intervenons dans les principales villes de ${region.name} : ${region.mainCities.join(", ")}, ainsi que dans toutes les communes des ${region.departments.length} départements de la région.`
    },
    {
      question: `Proposez-vous des contrats de maintenance en ${region.name} ?`,
      answer: `Oui, nous proposons des contrats de maintenance annuels pour les clients de ${region.name}. Ces contrats incluent des visites préventives régulières, un support prioritaire et des tarifs préférentiels sur les interventions.`
    }
  ];

  // JSON-LD pour la page région
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HD Connect - Sécurité ${region.name}`,
    "image": "https://hdconnect.fr/logo.png",
    "url": `https://hdconnect.fr/zones-intervention/${region.slug}`,
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": region.name
    },
    "serviceType": [
      "Installation vidéosurveillance",
      "Installation alarme",
      "Contrôle d'accès",
      "Domotique",
      "Maintenance sécurité"
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Régions voisines pour le maillage
  const currentIndex = regionsData.findIndex(r => r.slug === region.slug);
  const nearbyRegions = regionsData
    .filter((_, index) => Math.abs(index - currentIndex) <= 2 && index !== currentIndex)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section avec Parallax */}
      <RegionHeroParallax region={region} breadcrumbItems={breadcrumbItems} />

      {/* Départements - avec animations */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Départements Couverts</h2>
            </div>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {region.departments.map((dept, index) => (
              <motion.span 
                key={dept.code}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
              >
                {dept.name} ({dept.code})
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Services en {region.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HD Connect propose une gamme complète de solutions de sécurité pour les particuliers et professionnels de {region.name}.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="hover-lift h-full border-border">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <Link 
                      to={service.link}
                      className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Villes Stratégiques */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Villes Principales en {region.name}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez nos services dans les principales villes de la région.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {region.mainCities.map((cityName, index) => {
              // Vérifier si la ville a une page dédiée
              const cityData = regionCities.find(c => c.name === cityName);
              const hasPage = !!cityData;
              
              return (
                <AnimatedSection key={cityName} animation="scale-in" delay={index * 50}>
                  {hasPage ? (
                    <Link to={`/villes/${cityData.slug}`}>
                      <div className="p-4 bg-card border border-border rounded-xl text-center hover-lift cursor-pointer transition-all hover:border-primary/50">
                        <Building className="w-6 h-6 text-primary mx-auto mb-2" />
                        <span className="font-medium text-foreground">{cityName}</span>
                        <div className="text-xs text-primary mt-1">Voir la page →</div>
                      </div>
                    </Link>
                  ) : (
                    <div className="p-4 bg-card border border-border rounded-xl text-center">
                      <Building className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                      <span className="font-medium text-foreground">{cityName}</span>
                    </div>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients Types */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos Clients en {region.name}
            </h2>
            <p className="text-white/90 text-lg mb-8">
              HD Connect accompagne tous types de clients dans la région.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {region.clientTypes.map((clientType, index) => (
                <div key={index} className="flex items-center gap-2 text-left">
                  <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                  <span className="text-sm">{clientType}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Points Forts Économiques */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Atouts Économiques de la Région
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {region.economicHighlights.map((highlight, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <div className="text-center p-6 rounded-2xl bg-card border hover-lift h-full">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-medium">{highlight}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Régions Voisines */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Régions Voisines
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HD Connect intervient également dans les régions limitrophes.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {nearbyRegions.map((nearbyRegion, index) => (
              <AnimatedSection key={nearbyRegion.slug} animation="scale-in" delay={index * 100}>
                <Link to={`/zones-intervention/${nearbyRegion.slug}`}>
                  <Card className="hover-lift h-full border-border group cursor-pointer transition-all duration-300 hover:border-primary/50">
                    <CardContent className="p-6 text-center">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">
                        {nearbyRegion.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        {nearbyRegion.departments.length} départements
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Questions Fréquentes - {region.name}
              </h2>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Prêt à Sécuriser Votre Propriété en {region.name} ?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour une étude personnalisée et un devis gratuit. 
              Nos experts sont à votre disposition pour répondre à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi HD Connect */}
      <WhyHDConnect regionName={region.name} />

      {/* Mini Témoignages */}
      <MiniTestimonials location={region.name} />

      {/* Maillage interne local */}
      <LocalServiceLinks regionName={region.name} regionSlug={region.slug} />
      <Footer />
    </div>
  );
};

export default RegionPage;
