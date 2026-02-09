import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  LandPlot,
  ChevronRight,
  Play,
} from "lucide-react";
import { parisArrondissements, getCriticalArrondissements, getHighPriorityArrondissements } from "@/data/parisArrondissements";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

// Import des images de monuments parisiens
import louvreImage from "@/assets/monuments/louvre.webp";
import eiffelImage from "@/assets/monuments/tour-eiffel.webp";
import notredameImage from "@/assets/monuments/notre-dame.webp";
import sacrecoeurImage from "@/assets/monuments/sacre-coeur.webp";
import arcImage from "@/assets/monuments/arc-triomphe.webp";
import champselyseesImage from "@/assets/monuments/champs-elysees.webp";

const ParisPage = () => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useSEO({
    title: "Expert Sécurité Paris 2025-2026 | Vidéosurveillance IA & Alarme NF&A2P | HD Connect",
    description: "Expert sécurité 2025-2026 à Paris : installation vidéosurveillance IA 4K, alarmes NF&A2P et contrôle d'accès biométrique. Intervention Rapide dans les 20 arrondissements. Devis gratuit.",
    keywords: "expert sécurité Paris 2025-2026, vidéosurveillance IA Paris, alarme NF&A2P Paris, installation caméra surveillance Paris, contrôle accès biométrique Paris, HD Connect Paris",
    canonicalUrl: "https://hdconnect.fr/villes/paris",
  });

  const breadcrumbItems = [
    { name: "Zones d'intervention", url: "/zones-intervention" },
    { name: "Île-de-France", url: "/zones-intervention/ile-de-france" },
    { name: "Paris", url: "/villes/paris" },
  ];

  // Monuments parisiens avec photos et slugs corrects
  const monuments = [
    {
      name: "Musée du Louvre",
      image: louvreImage,
      arrondissement: "1er",
      slug: "paris-1er-louvre",
      description: "Protection des commerces et galeries autour du plus grand musée du monde",
    },
    {
      name: "Tour Eiffel",
      image: eiffelImage,
      arrondissement: "7e",
      slug: "paris-7e-palais-bourbon",
      description: "Sécurité des hôtels, restaurants et boutiques du secteur touristique",
    },
    {
      name: "Notre-Dame",
      image: notredameImage,
      arrondissement: "4e",
      slug: "paris-4e-hotel-de-ville",
      description: "Installation discrète pour commerces et résidences de l'Île de la Cité",
    },
    {
      name: "Sacré-Cœur",
      image: sacrecoeurImage,
      arrondissement: "18e",
      slug: "paris-18e-butte-montmartre",
      description: "Protection renforcée secteur Montmartre à forte affluence touristique",
    },
    {
      name: "Arc de Triomphe",
      image: arcImage,
      arrondissement: "8e",
      slug: "paris-8e-elysee",
      description: "Vidéosurveillance boutiques de luxe des Champs-Élysées",
    },
    {
      name: "Champs-Élysées",
      image: champselyseesImage,
      arrondissement: "8e",
      slug: "paris-8e-elysee",
      description: "Solutions premium pour flagship stores et établissements de standing",
    },
  ];

  // Services avec icônes colorées - Liens locaux Paris pour SEO
  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance Paris",
      description: "Caméras HD/4K, vision nocturne, accès mobile 24/7 dans tous les arrondissements",
      link: "/villes/paris/videosurveillance",
      color: "from-blue-500 to-cyan-500",
      features: ["Caméras 4K", "Vision nocturne IA", "Cloud sécurisé"],
    },
    {
      icon: ShieldAlert,
      title: "Alarmes Paris",
      description: "Systèmes certifiés NF&A2P, télésurveillance 24/7 Paris",
      link: "/villes/paris/alarme",
      color: "from-red-500 to-orange-500",
      features: ["NF&A2P", "Télésurveillance", "Anti-intrusion"],
    },
    {
      icon: Lock,
      title: "Contrôle d'Accès Paris",
      description: "Badges RFID, biométrie, interphones vidéo pour immeubles parisiens",
      link: "/villes/paris/controle-acces",
      color: "from-green-500 to-emerald-500",
      features: ["Biométrie", "Badge RFID", "Vidéo IP"],
    },
    {
      icon: Home,
      title: "Domotique Paris",
      description: "Maison intelligente, automatisation sécurité pour appartements parisiens",
      link: "/villes/paris/domotique",
      color: "from-purple-500 to-pink-500",
      features: ["Éclairage", "Volets", "Thermostat"],
    },
    {
      icon: Wifi,
      title: "Réseau Paris",
      description: "Infrastructure WiFi 6E, câblage, firewall pour bureaux parisiens",
      link: "/villes/paris/reseau",
      color: "from-indigo-500 to-blue-500",
      features: ["WiFi 6E", "Cat 6A", "Firewall"],
    },
    {
      icon: Wrench,
      title: "Maintenance Paris",
      description: "Contrats annuels, dépannage 24/7 dans tout Paris",
      link: "/villes/paris/maintenance",
      color: "from-amber-500 to-yellow-500",
      features: ["24h/24", "Préventive", "Curative"],
    },
  ];

  // Stats Paris
  const parisStats = [
    { value: "20", label: "Arrondissements", icon: Building2, suffix: "" },
    { value: "2.1", label: "Millions d'habitants", icon: Users, suffix: "M" },
    { value: "500", label: "Interventions/an", icon: Zap, suffix: "+" },
    { value: "24", label: "Heures délai max", icon: Clock, suffix: "h" },
  ];

  // Arrondissements prioritaires
  const criticalArr = getCriticalArrondissements();
  const highArr = getHighPriorityArrondissements();

  // FAQ Paris
  const faqItems = [
    {
      question: "Quels arrondissements de Paris couvrez-vous ?",
      answer: "HD Connect intervient dans les 20 arrondissements de Paris, du 1er au 20e. Nos équipes connaissent parfaitement chaque quartier et les spécificités locales en matière de sécurité.",
    },
    {
      question: "Quel est le délai d'intervention à Paris ?",
      answer: "Nous intervenons rapidement dans tout Paris pour les installations. Pour les urgences et dépannages, nous pouvons intervenir le jour même. Notre base en Île-de-France garantit une réactivité optimale.",
    },
    {
      question: "Quels sont les arrondissements les plus à risque ?",
      answer: "Les 10e, 11e, 18e, 19e et 20e arrondissements présentent des taux de criminalité plus élevés. Nous proposons des solutions renforcées adaptées : vidéosurveillance HD, alarmes certifiées NF&A2P, contrôle d'accès.",
    },
    {
      question: "Proposez-vous des solutions pour les copropriétés parisiennes ?",
      answer: "Oui, nous équipons de nombreuses copropriétés parisiennes : vidéosurveillance parties communes, interphones vidéo IP, contrôle d'accès par badge. Nous travaillons avec les syndics et les conseils syndicaux.",
    },
    {
      question: "Vos installations sont-elles conformes RGPD ?",
      answer: "Absolument. Toutes nos installations respectent le RGPD : panneaux d'information, registre des traitements, durée de conservation limitée. Nous vous accompagnons dans vos obligations légales.",
    },
    {
      question: "Les frais de déplacement sont-ils inclus à Paris ?",
      answer: "Oui, les frais de déplacement sont inclus pour toutes nos interventions à Paris intra-muros. Le devis est global et transparent, sans frais cachés.",
    },
  ];

  // JSON-LD enrichi
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "HD Connect - Sécurité Paris",
    "image": "https://hdconnect.fr/logo.png",
    "url": "https://hdconnect.fr/villes/paris",
    "telephone": "+33 6 27 13 53 04",
    "email": "contact@hdconnect.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressRegion": "Île-de-France",
      "addressCountry": "FR"
    },
    "areaServed": {
      "@type": "City",
      "name": "Paris"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "248"
    },
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "19:00"
    }
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  };

  const trustBadges = [
    { label: "Installation rapidement", icon: CheckCircle, color: "text-green-500" },
    { label: "Support 24h/24 7j/7", icon: Phone, color: "text-blue-500" },
    { label: "Garantie 5 ans", icon: Shield, color: "text-violet-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero Section avec Parallaxe */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image avec Parallaxe */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroParallax }}
        >
          <img 
            src={eiffelImage} 
            alt="Sécurité à Paris - Tour Eiffel - HD Connect" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/50" />
        </motion.div>

        {/* Decorative Elements avec Parallaxe */}
        <motion.div 
          className="absolute top-1/4 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl hidden lg:block"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/20 rounded-full blur-3xl hidden lg:block"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <motion.div 
          className="absolute top-1/2 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
          animate={floatingAnimation}
        />

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <motion.div 
            className="max-w-4xl mt-8"
            style={{ opacity: heroOpacity }}
          >
            {/* Badge animé */}
            <motion.div 
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-5 h-5" />
              <span>Expert Sécurité Paris - 20 Arrondissements</span>
            </motion.div>

            {/* Titre avec animation staggered */}
            <motion.h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Sécurisez votre{" "}
              <span className="text-gradient-animated">Paris</span>
              <br />
              avec <span className="text-gradient-animated" style={{ animationDelay: '0.5s' }}>HD Connect</span>
            </motion.h1>

            <motion.p 
              className={`text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              Installation professionnelle de vidéosurveillance, alarmes certifiées et contrôle d'accès dans les 20 arrondissements de Paris. Intervention rapidement, devis gratuit.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Button 
                onClick={() => scrollToSection("quote", { mode: "quote" })} 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Devis gratuit Paris
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg h-14 px-8 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5 text-accent animate-pulse" />
                  {phoneNumber}
                </a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {trustBadges.map((badge, index) => {
                const badgeColors = [
                  'from-green-500/20 to-emerald-500/20 border-green-500/30',
                  'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                  'from-violet-500/20 to-purple-500/20 border-violet-500/30'
                ];
                return (
                  <motion.div 
                    key={badge.label} 
                    className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br ${badgeColors[index]} backdrop-blur-sm border hover:scale-105 transition-all duration-500 hover:shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-card/80 flex items-center justify-center shadow-inner">
                      <badge.icon className={`w-5 h-5 ${badge.color}`} />
                    </div>
                    <span className="text-foreground font-medium text-sm md:text-base">{badge.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs text-muted-foreground">Découvrir Paris</span>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Paris */}
      <section className="py-16 bg-secondary/30 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {parisStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 transition-all group"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  <stat.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Monuments Parisiens avec Parallaxe */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-14">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <LandPlot className="w-4 h-4" />
                <span>Patrimoine sécurisé</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Sécurité aux Abords des <span className="text-gradient-animated">Monuments</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                HD Connect protège les commerces, résidences et établissements situés à proximité des lieux emblématiques de Paris.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {monuments.map((monument, index) => (
              <AnimatedSection key={monument.name} animation="scale-in" delay={index * 100}>
                <motion.div 
                  className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-500"
                  whileHover={{ y: -10 }}
                >
                  {/* Image avec effet parallaxe au hover */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img 
                      src={monument.image} 
                      alt={`Sécurité ${monument.name} Paris - HD Connect`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    
                    {/* Badge arrondissement */}
                    <motion.span 
                      className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-primary/90 text-white text-sm font-medium"
                      whileHover={{ scale: 1.1 }}
                    >
                      {monument.arrondissement} arr.
                    </motion.span>
                  </div>

                  <div className="p-6 bg-card">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {monument.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {monument.description}
                    </p>
                    <Link 
                      to={`/paris/${monument.slug}`}
                      className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                    >
                      Voir le {monument.arrondissement} arrondissement
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Les 20 Arrondissements - Grille Interactive */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-14">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-4 h-4" />
                <span>Couverture complète</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Les <span className="text-gradient-animated">20 Arrondissements</span> de Paris
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Cliquez sur un arrondissement pour découvrir nos solutions de sécurité adaptées à chaque quartier.
              </p>
            </div>
          </AnimatedSection>

          {/* Arrondissements prioritaires */}
          <AnimatedSection animation="fade-up">
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="w-5 h-5 text-red-500" />
                <h3 className="text-xl font-bold text-foreground">Secteurs Prioritaires</h3>
                <span className="text-sm text-muted-foreground">(taux de criminalité élevé)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {criticalArr.map((arr, index) => {
                  const ordinal = arr.number === 1 ? "1er" : `${arr.number}e`;
                  return (
                    <AnimatedSection key={arr.slug} animation="scale-in" delay={index * 50}>
                      <Link to={`/paris/${arr.slug}`}>
                        <motion.div 
                          className="relative p-5 rounded-xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 hover:border-red-500/50 transition-all group cursor-pointer overflow-hidden"
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Animated glow */}
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                          />
                          
                          <div className="relative z-10">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-2xl font-bold text-foreground">{ordinal}</span>
                              <span className="text-xs px-2 py-1 bg-red-500/20 text-red-500 rounded-full animate-pulse">
                                Prioritaire
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{arr.quartiers[0]}</p>
                            <p className="text-xs text-red-500 mt-1">{arr.crimeRate} hab.</p>
                          </div>
                          
                          <ArrowRight className="absolute bottom-4 right-4 w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </motion.div>
                      </Link>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Arrondissements haute priorité */}
          <AnimatedSection animation="fade-up">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Arrondissements Centraux</h3>
                <span className="text-sm text-muted-foreground">(haute fréquentation)</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {highArr.map((arr, index) => {
                  const ordinal = arr.number === 1 ? "1er" : `${arr.number}e`;
                  return (
                    <AnimatedSection key={arr.slug} animation="scale-in" delay={index * 50}>
                      <Link to={`/paris/${arr.slug}`}>
                        <motion.div 
                          className="p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group cursor-pointer"
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{ordinal}</span>
                            <Star className="w-4 h-4 text-amber-500" />
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{arr.quartiers[0]}</p>
                          <p className="text-xs text-muted-foreground mt-1">{arr.population} hab.</p>
                          
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" />
                        </motion.div>
                      </Link>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-14">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <BadgeCheck className="w-4 h-4" />
                <span>Solutions complètes</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                Nos Services à <span className="text-gradient-animated">Paris</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Solutions de sécurité professionnelles pour particuliers, commerces et entreprises parisiennes.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="scale-in" delay={index * 75}>
                <Link to={service.link}>
                  <motion.div whileHover={{ y: -10 }}>
                    <Card className="h-full border-border group cursor-pointer transition-all hover:border-primary/50 hover:shadow-2xl overflow-hidden">
                      <CardContent className="p-8 relative">
                        {/* Gradient overlay on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        
                        <motion.div 
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <service.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h3 className="font-bold text-foreground text-2xl mb-3 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-5">{service.description}</p>
                        
                        {/* Features badges */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.map((feature, i) => (
                            <span key={i} className="text-xs px-3 py-1.5 bg-secondary rounded-full text-muted-foreground font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                          <span>En savoir plus</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
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
      <ExpertiseSection location="Paris" />

      {/* Processus d'intervention */}
      <InterventionProcess />

      {/* Pourquoi HD Connect */}
      <WhyHDConnect cityName="Paris" />

      {/* Mini Témoignages */}
      <MiniTestimonials location="Paris" />

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-14">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Questions fréquentes</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                FAQ Sécurité <span className="text-gradient-animated">Paris</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Retrouvez les réponses aux questions les plus posées sur nos interventions à Paris.
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

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
        {/* Animated background */}
        <motion.div 
          className="absolute top-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 left-20 w-56 h-56 bg-white/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
            >
              <Shield className="w-20 h-20 mx-auto mb-8" />
            </motion.div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sécurisez Votre Paris
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Devis gratuit rapidement pour votre projet de sécurité. Intervention rapide dans les 20 arrondissements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-2xl text-lg px-12 py-7"
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
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-primary text-lg px-12 py-7"
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

export default ParisPage;
