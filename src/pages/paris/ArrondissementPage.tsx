import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import FAQAccordion from "@/components/FAQAccordion";
import MiniTestimonials from "@/components/MiniTestimonials";
import WhyHDConnect from "@/components/WhyHDConnect";
import ExpertiseSection from "@/components/ExpertiseSection";
import QuoteFunnelSimple from "@/components/QuoteFunnelSimple";
import InterventionProcess from "@/components/InterventionProcess";
import {
  MapPin,
  Phone,
  Clock,
  Shield,
  ArrowRight,
  Camera,
  ShieldAlert,
  Lock,
  Home,
  Wifi,
  Wrench,
  Award,
  Zap,
  Users,
  AlertTriangle,
  Building2,
  CheckCircle,
  Star,
  BadgeCheck,
  TrendingUp,
  Target,
  Sparkles,
} from "lucide-react";
import { getArrondissementBySlug, parisArrondissements } from "@/data/parisArrondissements";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const ArrondissementPage = () => {
  const { arrondissementSlug } = useParams<{ arrondissementSlug: string }>();
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  if (!arrondissementSlug) {
    return <Navigate to="/villes/paris" replace />;
  }

  const arrondissement = getArrondissementBySlug(arrondissementSlug);

  if (!arrondissement) {
    return <Navigate to="/villes/paris" replace />;
  }

  const ordinalNumber = arrondissement.number === 1 ? "1er" : `${arrondissement.number}e`;

  useSEO({
	    title: `Top 3 Sécurité ${arrondissement.name} 2025-2026 | Vidéosurveillance IA & Alarme NF&A2P | HD Connect`,
	    description: `Atteignez le Top 3 Sécurité à Paris ${ordinalNumber} : HD Connect installe des systèmes de vidéosurveillance IA 4K et des alarmes NF&A2P. Intervention Rapide Urgence garantie dans les quartiers de ${arrondissement.quartiers.slice(0, 2).join(" et ")}.`,
    keywords: `expert sécurité Paris ${ordinalNumber} 2025-2026, vidéosurveillance IA ${arrondissement.name}, alarme NF&A2P ${arrondissement.quartiers[0]}, installation caméra Paris ${arrondissement.number}, HD Connect Paris`,
    canonicalUrl: `https://hdconnect.fr/paris/${arrondissement.slug}`,
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Île-de-France", url: "/zones-intervention/ile-de-france" },
    { name: "Paris", url: "/villes/paris" },
    { name: `${ordinalNumber} arrondissement`, url: `/paris/${arrondissement.slug}` },
  ];

  // Services avec données locales
  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: `Installation caméras HD/4K dans le ${ordinalNumber} arrondissement. Surveillance commerces, copropriétés, bureaux.`,
      link: "/services/videosurveillance",
      features: ["Caméras HD/4K", "Vision nocturne", "Accès mobile 24/7"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldAlert,
      title: "Alarmes",
      description: `Systèmes d'alarme certifiés NF&A2P pour ${arrondissement.quartiers[0]} et environs.`,
      link: "/services/alarme",
      features: ["Certification NF&A2P", "Télésurveillance", "Anti-intrusion"],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès",
      description: `Badges, biométrie, interphones vidéo pour immeubles et bureaux du ${ordinalNumber}.`,
      link: "/services/controle-acces",
      features: ["Badges RFID", "Biométrie", "Interphone vidéo"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Home,
      title: "Domotique",
      description: `Maison intelligente et automatisation sécurité dans le ${ordinalNumber} arrondissement.`,
      link: "/services/domotique",
      features: ["Éclairage connecté", "Thermostat", "Volets automatiques"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Wifi,
      title: "Réseau",
      description: `Infrastructure réseau professionnelle pour entreprises du ${ordinalNumber}.`,
      link: "/services/reseau",
      features: ["WiFi 6E", "Câblage Cat 6A", "Firewall UTM"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: `Maintenance préventive et dépannage 24/7 dans le ${ordinalNumber} arrondissement.`,
      link: "/services/maintenance",
      features: ["Contrat annuel", "Intervention Rapide", "Support 24/7"],
      color: "from-amber-500 to-yellow-500",
    },
  ];

  // Statistiques locales animées
  const localStats = [
    { value: arrondissement.population, label: "Habitants", icon: Users, suffix: "" },
    { value: arrondissement.quartiers.length.toString(), label: "Quartiers", icon: Building2, suffix: "" },
    { value: arrondissement.crimeRate.split("/")[0], label: "Taux criminalité", icon: Shield, suffix: "/1000" },
	    { value: "4", label: "Heures intervention", icon: Clock, suffix: "h" },
  ];

  // Avantages spécifiques arrondissement
  const advantages = [
    {
      icon: MapPin,
      title: "Connaissance Locale",
      description: `Nos équipes connaissent parfaitement le ${ordinalNumber} : ${arrondissement.quartiers.slice(0, 2).join(", ")}...`,
    },
    {
      icon: Zap,
      title: "Intervention Express",
      description: `Délai d'intervention garanti Urgence pour les urgences dans tout le ${ordinalNumber} arrondissement.`,
    },
    {
      icon: Award,
      title: "Expertise Certifiée",
      description: "Techniciens formés et certifiés par les plus grandes marques du secteur.",
    },
    {
      icon: Target,
      title: "Solutions Adaptées",
      description: `Solutions sur mesure pour les spécificités du ${ordinalNumber} : ${arrondissement.priority === 'critique' ? 'secteur sensible' : 'quartier résidentiel'}.`,
    },
  ];

  // FAQ spécifiques à l'arrondissement
  const faqItems = [
    {
      question: `Quels quartiers du ${ordinalNumber} arrondissement couvrez-vous ?`,
      answer: `HD Connect intervient dans tous les quartiers du ${ordinalNumber} arrondissement de Paris : ${arrondissement.quartiers.join(", ")}. Nous connaissons parfaitement les spécificités de chaque quartier pour adapter nos solutions.`,
    },
    {
	      question: `Quel est le délai d'intervention dans le ${ordinalNumber} arrondissement ?`,
	      answer: `Nous garantissons une <strong>intervention rapide</strong> pour les urgences (panne, effraction) dans le ${ordinalNumber} arrondissement de Paris. Pour les installations, nous intervenons rapidement. Notre réactivité est un gage de sécurité pour nos clients parisiens.`,
    },
    {
      question: `Le ${ordinalNumber} arrondissement est-il un secteur à risque ?`,
      answer: `Le taux de criminalité du ${ordinalNumber} arrondissement est de ${arrondissement.crimeRate} habitants. ${arrondissement.priority === 'critique' ? "Ce secteur nécessite une vigilance particulière, c'est pourquoi nous proposons des solutions renforcées adaptées." : "Nous recommandons néanmoins une protection adaptée à vos besoins."}`,
    },
    {
      question: `Proposez-vous des solutions pour les copropriétés du ${ordinalNumber} ?`,
      answer: `Oui, nous équipons de nombreuses copropriétés du ${ordinalNumber} arrondissement : vidéosurveillance des parties communes, interphones vidéo connectés, contrôle d'accès par badge. Nous travaillons régulièrement avec les syndics.`,
    },
    {
      question: `Quels monuments ou lieux sensibles sécurisez-vous dans le ${ordinalNumber} ?`,
      answer: `Dans le ${ordinalNumber} arrondissement, nous sécurisons les commerces et résidences à proximité de ${arrondissement.landmarks.slice(0, 2).join(" et ")}. Notre expertise nous permet de proposer des solutions discrètes et efficaces.`,
    },
    {
      question: `Les frais de déplacement sont-ils inclus dans le ${ordinalNumber} ?`,
      answer: `Oui, les frais de déplacement sont inclus pour toutes nos interventions dans le ${ordinalNumber} arrondissement. Le devis que nous vous fournissons est global et transparent, sans frais cachés.`,
    },
  ];

  // JSON-LD LocalBusiness enrichi
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `HD Connect - Sécurité ${arrondissement.name}`,
    "image": "https://hdconnect.fr/logo.png",
    "url": `https://hdconnect.fr/paris/${arrondissement.slug}`,
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${ordinalNumber} arrondissement`,
      "addressLocality": "Paris",
      "postalCode": `750${arrondissement.number.toString().padStart(2, '0')}`,
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `Paris ${ordinalNumber} arrondissement`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
	    "reviewCount": "215"
    },
	    "priceRange": "€€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "19:00"
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

  // Autres arrondissements pour le maillage interne
  const otherArrondissements = parisArrondissements
    .filter(arr => arr.slug !== arrondissement.slug)
    .slice(0, 6);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section avec animations avancées */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={floatingAnimation}
        />

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />

          <motion.div 
            className="max-w-4xl mx-auto text-center mt-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badges animés */}
            <motion.div 
              className="flex flex-wrap justify-center gap-2 mb-6"
              variants={itemVariants}
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-4 h-4" />
                Paris {ordinalNumber} (75{arrondissement.number.toString().padStart(2, '0')})
              </motion.span>
              {arrondissement.priority === 'critique' && (
                <motion.span 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-600 font-medium border border-red-500/20 animate-pulse"
                  whileHover={{ scale: 1.05 }}
                >
                  <AlertTriangle className="w-4 h-4" />
                  Secteur prioritaire
                </motion.span>
              )}
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-600 font-medium border border-amber-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <Star className="w-4 h-4 fill-amber-500" />
                4.9/5 avis clients
              </motion.span>
            </motion.div>

            {/* Titre animé */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
              variants={itemVariants}
            >
              Sécurité <span className="text-gradient-animated">{arrondissement.name}</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              {arrondissement.description}
            </motion.p>

            {/* Stats locales animées */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
              variants={containerVariants}
            >
              {localStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all group"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons animés */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 shadow-xl hover:shadow-2xl transition-all"
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  Devis gratuit {ordinalNumber}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="text-lg px-8 bg-primary/20 backdrop-blur-sm border-2 border-primary/50 hover:bg-primary/30 text-primary transition-all"
                  asChild
                >
                  <a href={callUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 w-5 h-5 animate-pulse" />
                    {phoneNumber}
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quartiers couverts - avec badges interactifs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                <MapPin className="w-4 h-4" />
                <span>Zone de couverture</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quartiers du {ordinalNumber} Arrondissement
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                HD Connect intervient dans tous les quartiers du {ordinalNumber}. Nos techniciens connaissent parfaitement chaque secteur.
              </p>
            </div>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-8">
            {arrondissement.quartiers.map((quartier, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 50}>
                <motion.span 
                  className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 cursor-pointer"
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {quartier}
                </motion.span>
              </AnimatedSection>
            ))}
          </div>

          {/* Lieux remarquables */}
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">Lieux remarquables à proximité :</p>
              <div className="flex flex-wrap justify-center gap-2">
                {arrondissement.landmarks.map((landmark, index) => (
                  <motion.span 
                    key={index} 
                    className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {landmark}
                  </motion.span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Avantages spécifiques */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 font-medium mb-4">
                <CheckCircle className="w-4 h-4" />
                <span>Nos atouts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Pourquoi Choisir HD Connect dans le {ordinalNumber} ?
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <motion.div whileHover={{ y: -10 }}>
                  <Card className="h-full border-border hover:border-primary/50 transition-all hover:shadow-xl">
                    <CardContent className="p-6 text-center">
                      <motion.div 
                        className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <advantage.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="font-bold text-foreground text-lg mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground text-sm">{advantage.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid avec animations */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                <BadgeCheck className="w-4 h-4" />
                <span>Solutions complètes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nos Services dans le {ordinalNumber}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Solutions de sécurité professionnelles pour particuliers et entreprises du {ordinalNumber} arrondissement
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 75}>
                <Link to={service.link}>
                  <motion.div whileHover={{ y: -10 }}>
                    <Card className="h-full border-border group cursor-pointer transition-all hover:border-primary/50 hover:shadow-xl overflow-hidden">
                      <CardContent className="p-6 relative">
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                        
                        <motion.div 
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <service.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        
                        <h3 className="font-bold text-foreground text-xl mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                        
                        {/* Features badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((feature, i) => (
                            <span key={i} className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          <span>En savoir plus</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Section E-E-A-T Expertise */}
      <ExpertiseSection location={`Paris ${ordinalNumber}`} />

      {/* Processus d'intervention */}
      <InterventionProcess />

      {/* Pourquoi HD Connect */}
      <WhyHDConnect cityName={`Paris ${ordinalNumber}`} />

      {/* Mini Témoignages */}
      <MiniTestimonials location={`Paris ${ordinalNumber}`} />

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>Questions fréquentes</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                FAQ - {ordinalNumber} Arrondissement
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Retrouvez les réponses aux questions les plus posées sur nos interventions dans le {ordinalNumber}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Tunnel de devis */}
      <QuoteFunnelSimple />

      {/* Autres arrondissements */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Autres Arrondissements de Paris
              </h2>
              <p className="text-muted-foreground">
                HD Connect intervient dans les 20 arrondissements parisiens
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {otherArrondissements.map((arr, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 50}>
                <Link to={`/paris/${arr.slug}`}>
                  <motion.div whileHover={{ scale: 1.1, y: -5 }}>
                    <Card className="text-center cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-primary mb-1">
                          {arr.number === 1 ? "1er" : `${arr.number}e`}
                        </div>
                        <p className="text-xs text-muted-foreground truncate">{arr.quartiers[0]}</p>
                        {arr.priority === 'critique' && (
                          <span className="inline-block mt-1 text-[10px] px-1.5 py-0.5 bg-red-500/10 text-red-500 rounded-full">
                            Prioritaire
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up">
            <div className="text-center mt-10">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="/villes/paris">
                    <MapPin className="mr-2 w-5 h-5 group-hover:text-primary transition-colors" />
                    Voir tous les arrondissements
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final avec animations */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <motion.div 
            className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
            animate={{ y: [0, -20, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 left-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"
            animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </motion.div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Shield className="w-16 h-16 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sécurisez Votre {ordinalNumber} Arrondissement
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Devis gratuit rapidement pour votre projet de sécurité. Intervention rapide dans tout le {ordinalNumber}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-10 py-6"
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-primary text-lg px-10 py-6"
                  asChild
                >
                  <a href={callUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 w-5 h-5" />
                    {phoneNumber}
                  </a>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArrondissementPage;
