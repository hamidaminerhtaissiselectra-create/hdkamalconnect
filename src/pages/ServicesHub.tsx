import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Camera, Shield, Lock, Wifi, Home, Wrench, Radio, DoorOpen, Package, 
  ArrowRight, Sparkles, Zap, CheckCircle, Phone, Award, Clock, Users, 
  Building2, MapPin, BadgeCheck, Star, TrendingUp, Target, Lightbulb,
  FileCheck, Headphones, Settings, Layers, CircuitBoard, Gauge
} from "lucide-react";
import { content } from "@/data/content";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { servicesSchema, organizationSchema, localBusinessSchema } from "@/data/structuredData";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import cameraImage from "@/assets/hub-service-videosurveillance.webp";
import alarmImage from "@/assets/hub-service-alarme.webp";
import accessImage from "@/assets/hub-service-controle-acces.webp";
import maintenanceImage from "@/assets/maintenance-tech.webp";
import reseauImage from "@/assets/reseau-switch.webp";
import domotiqueImage from "@/assets/domotique-tablet.webp";
import antenneImage from "@/assets/antenne-tnt-install.webp";
import portailImage from "@/assets/barriere-parking.webp";
import locationImage from "@/assets/location-equipement-unique.webp";
import heroServicesImage from "@/assets/hero-security.webp";
import technicianImage from "@/assets/technician-work.webp";
import controlRoomImage from "@/assets/vs-monitoring-room.webp";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Shield,
  Lock,
  Wifi,
  Home,
  Wrench,
  Radio,
  DoorOpen,
  Package,
};

const imageMap: Record<string, string> = {
  "Vidéosurveillance": cameraImage,
  "Systèmes d'Alarme": alarmImage,
  "Contrôle d'Accès": accessImage,
  "Maintenance & Dépannage": maintenanceImage,
  "Réseau & Câblage": reseauImage,
  "Domotique Sécurité": domotiqueImage,
  "Antennes & Satellite": antenneImage,
  "Portails & Parking": portailImage,
  "Location Matériel": locationImage,
};

const colorMap: Record<string, { bg: string; iconBg: string; hover: string; border: string }> = {
  "Vidéosurveillance": { 
    bg: "from-blue-500 to-blue-600", 
    iconBg: "bg-blue-500", 
    hover: "hover:border-blue-400",
    border: "border-blue-500/20"
  },
  "Systèmes d'Alarme": { 
    bg: "from-red-500 to-red-600", 
    iconBg: "bg-red-500", 
    hover: "hover:border-red-400",
    border: "border-red-500/20"
  },
  "Contrôle d'Accès": { 
    bg: "from-emerald-500 to-emerald-600", 
    iconBg: "bg-emerald-500", 
    hover: "hover:border-emerald-400",
    border: "border-emerald-500/20"
  },
  "Maintenance & Dépannage": { 
    bg: "from-orange-500 to-orange-600", 
    iconBg: "bg-orange-500", 
    hover: "hover:border-orange-400",
    border: "border-orange-500/20"
  },
  "Réseau & Câblage": { 
    bg: "from-cyan-500 to-cyan-600", 
    iconBg: "bg-cyan-500", 
    hover: "hover:border-cyan-400",
    border: "border-cyan-500/20"
  },
  "Domotique Sécurité": { 
    bg: "from-purple-500 to-purple-600", 
    iconBg: "bg-purple-500", 
    hover: "hover:border-purple-400",
    border: "border-purple-500/20"
  },
  "Antennes & Satellite": { 
    bg: "from-indigo-500 to-indigo-600", 
    iconBg: "bg-indigo-500", 
    hover: "hover:border-indigo-400",
    border: "border-indigo-500/20"
  },
  "Portails & Parking": { 
    bg: "from-amber-500 to-amber-600", 
    iconBg: "bg-amber-500", 
    hover: "hover:border-amber-400",
    border: "border-amber-500/20"
  },
  "Location Matériel": { 
    bg: "from-teal-500 to-teal-600", 
    iconBg: "bg-teal-500", 
    hover: "hover:border-teal-400",
    border: "border-teal-500/20"
  },
};

const ServicesHub = () => {
  const { scrollToSection } = useSmoothScroll();
  const contactInfo = content.company.contact;

  useSEO({
    title: "Expert Sécurité 2025-2026 | Vidéosurveillance IA, Alarme NF&A2P & Domotique | HD Connect",
    description: "Expert sécurité 2025-2026 : installation vidéosurveillance IA, alarmes NF&A2P, contrôle d'accès biométrique et domotique intelligente. Maintenance 24/7 et location matériel dans toute la France.",
    keywords: "expert sécurité 2025-2026, installation vidéosurveillance IA, alarme NF&A2P, contrôle accès biométrique, domotique intelligente, maintenance sécurité 24/7, HD Connect services",
    canonicalUrl: "https://hdconnect.fr/services",
  });

  const breadcrumbs = [
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
  ];

  // Schema JSON-LD enrichi pour la page services
  const pageJsonLd = [
    organizationSchema,
    localBusinessSchema,
    servicesSchema,
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://hdconnect.fr/services#page",
      "url": "https://hdconnect.fr/services",
      "name": "Services Sécurité & Domotique | HD Connect",
      "description": "Découvrez tous nos services d'installation, maintenance et location de systèmes de sécurité en France.",
      "isPartOf": { "@id": "https://hdconnect.fr/#website" },
      "about": { "@id": "https://hdconnect.fr/#organization" },
      "mainEntity": { "@id": "https://hdconnect.fr/services#services-list" }
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://hdconnect.fr/services#services-list",
      "name": "Liste des services HD Connect",
      "numberOfItems": 9,
      "itemListElement": content.services.items.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": service.title,
        "url": `https://hdconnect.fr${service.link}`
      }))
    }
  ];

  const advantages = [
    { icon: CheckCircle, title: "Expertise 10+ ans", description: "Plus d'une décennie d'expérience en sécurité électronique" },
    { icon: Zap, title: "Intervention 48h", description: "Installation rapide, dépannage 24/7 en Île-de-France" },
    { icon: Shield, title: "Garantie 5 ans", description: "Équipements garantis pièces et main d'œuvre" },
  ];

  const stats = [
    { value: "5000+", label: "Installations réalisées", icon: Building2 },
    { value: "10+", label: "Années d'expertise", icon: Clock },
    { value: "24/7", label: "Support disponible", icon: Headphones },
    { value: "4.9/5", label: "Avis clients", icon: Star },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit & Conseil",
      description: "Analyse gratuite de vos besoins en sécurité. Notre expert évalue les risques et propose les solutions adaptées à votre budget.",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Devis Détaillé",
      description: "Proposition chiffrée transparente rapidement avec le détail des équipements, main d'œuvre et garanties incluses.",
      icon: FileCheck,
      color: "from-emerald-500 to-green-500"
    },
    {
      step: "03",
      title: "Installation Pro",
      description: "Pose soignée par nos techniciens certifiés. Tests complets et formation à l'utilisation de vos équipements.",
      icon: Settings,
      color: "from-orange-500 to-amber-500"
    },
    {
      step: "04",
      title: "Suivi & SAV",
      description: "Maintenance préventive et support technique permanent. Intervention rapide en cas de besoin.",
      icon: Headphones,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const technicalComparisons = [
    {
      title: "Vidéosurveillance : HD vs 4K vs 8K",
      items: [
        { label: "Full HD (1080p)", desc: "Idéal usage domestique, coût réduit, stockage optimisé", recommended: false },
        { label: "2K (1440p)", desc: "Meilleur compromis qualité/stockage, identification précise", recommended: true },
        { label: "4K (2160p)", desc: "Commerces, entrepôts, zones à fort trafic", recommended: false },
      ],
      advice: "Notre recommandation : 2K minimum pour un excellent rapport qualité-prix avec identification fiable."
    },
    {
      title: "Alarme : Filaire vs Sans Fil",
      items: [
        { label: "Système Filaire", desc: "Fiabilité maximale, pas d'interférences, idéal neuf", recommended: false },
        { label: "Sans Fil (Radio)", desc: "Installation rapide, évolutif, parfait rénovation", recommended: true },
        { label: "Hybride", desc: "Combine les avantages, centrale filaire + détecteurs sans fil", recommended: false },
      ],
      advice: "Notre recommandation : Sans fil Ajax pour la rénovation, filaire Risco pour la construction neuve."
    },
    {
      title: "Contrôle d'Accès : Badge vs Biométrie vs Digicode",
      items: [
        { label: "Badge RFID", desc: "Simple, économique, gestion centralisée des droits", recommended: true },
        { label: "Biométrique", desc: "Sécurité maximale, pas de perte/vol de badge", recommended: false },
        { label: "Digicode", desc: "Solution basique, pas de gestion individuelle", recommended: false },
      ],
      advice: "Notre recommandation : Badge RFID pour la polyvalence, biométrie pour les zones sensibles."
    }
  ];

  const clientTypes = [
    { icon: Home, title: "Particuliers", description: "Maisons, appartements, résidences secondaires. Protection complète de votre domicile et de vos proches." },
    { icon: Building2, title: "Professionnels", description: "Bureaux, commerces, entrepôts. Solutions adaptées à votre activité et conformes aux exigences assureurs." },
    { icon: Users, title: "Syndics & Copropriétés", description: "Immeubles, résidences. Interphonie, vidéosurveillance des parties communes, contrôle d'accès." },
    { icon: Layers, title: "Collectivités", description: "Mairies, écoles, établissements publics. Mise aux normes et solutions respectant les marchés publics." },
  ];

  const certifications = [
    { name: "NF&A2P", description: "Norme française pour les systèmes d'alarme" },
    { name: "APSAD R81", description: "Règle de certification télésurveillance" },
    { name: "RGPD", description: "Conformité protection des données" },
    { name: "CE", description: "Marquage européen obligatoire" },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* JSON-LD Structured Data */}
      {pageJsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Header />
      <main className="pt-0">
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="relative min-h-[75vh] flex items-center pt-20 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroServicesImage} 
              alt="HD Connect - Expert en sécurité électronique - Tous nos services" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-slow hidden lg:block" style={{ animationDelay: '1s' }}></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              {/* Breadcrumbs */}
              <div className="mb-6">
                <Breadcrumbs items={breadcrumbs} />
              </div>
              
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="badge-primary mb-8"
              >
                <Sparkles className="w-5 h-5" />
                <span>9 Expertises Métier depuis 2014</span>
              </motion.div>

              {/* H1 */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 leading-[1.1]"
              >
                Services{" "}
                <span className="text-gradient-animated">Sécurité</span>
                <br />
                & <span className="text-gradient-animated">Domotique</span>
              </motion.h1>

              {/* Subtitle enrichi SEO */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
              >
                <strong>Installation, maintenance et location</strong> de systèmes de sécurité électronique en France. 
                Vidéosurveillance HD/4K, alarmes certifiées NF&A2P, contrôle d'accès biométrique, domotique connectée, 
                réseau et câblage structuré.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 mb-10"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  asChild
                >
                  <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 w-5 h-5" />
                    Appeler un Expert
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg h-14 px-8 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 group transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link to="/#quote">
                    Devis Gratuit en 24h
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  const badgeColors = [
                    'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                    'from-orange-500/20 to-amber-500/20 border-orange-500/30',
                    'from-green-500/20 to-emerald-500/20 border-green-500/30'
                  ];
                  const iconColors = ['text-blue-500', 'text-orange-500', 'text-green-500'];
                  return (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br ${badgeColors[index]} backdrop-blur-sm border hover:scale-105 transition-all duration-300`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-card/80 flex items-center justify-center shadow-inner">
                        <Icon className={`w-5 h-5 ${iconColors[index]}`} />
                      </div>
                      <div>
                        <span className="text-foreground font-medium text-sm block">{advantage.title}</span>
                        <span className="text-muted-foreground text-xs">{advantage.description}</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* STATS SECTION */}
        {/* ============================================ */}
        <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div 
                    className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <stat.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-primary mb-1"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SERVICES GRID */}
        {/* ============================================ */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 pattern-dots opacity-50"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="badge-accent mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Solutions Complètes</span>
                </div>
                <h2 className="section-title text-center">
                  Nos 9 Domaines d'Expertise
                </h2>
                <p className="section-subtitle text-center">
                  De la vidéosurveillance à la domotique, en passant par les alarmes et le réseau : 
                  HD Connect maîtrise l'ensemble de la chaîne de sécurité électronique.
                </p>
              </div>
            </AnimatedSection>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.services.items.map((service, index) => {
                const Icon = iconMap[service.icon] || Camera;
                const image = imageMap[service.title];
                const colors = colorMap[service.title] || { bg: "from-primary to-accent", iconBg: "bg-primary", hover: "hover:border-primary/30", border: "border-primary/20" };
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card 
                      className={`group hover-lift overflow-hidden bg-card border-2 ${colors.border} ${colors.hover} transition-all duration-500 flex flex-col h-full`}
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden flex-shrink-0">
                        <img 
                          src={image}
                          alt={`Service ${service.title} - Installation et maintenance par HD Connect`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                        
                        {/* Floating Icon */}
                        <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center shadow-lg shadow-black/20 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                          <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                        </div>
                      </div>
                      
                      <CardHeader className="pt-4 flex-grow">
                        <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed line-clamp-3">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="pt-0 mt-auto">
                        <Link to={service.link} className="w-full block">
                          <Button 
                            variant="ghost" 
                            className="w-full justify-center gap-2 group/btn hover:bg-primary/5 hover:text-primary transition-all duration-300"
                          >
                            <span>En savoir plus</span>
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* PROCESS SECTION */}
        {/* ============================================ */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="badge-primary mb-3">
                  <Lightbulb className="w-4 h-4" />
                  <span>Notre Méthode</span>
                </div>
                <h2 className="section-title text-center">
                  Comment Nous Travaillons
                </h2>
                <p className="section-subtitle text-center">
                  Un processus éprouvé en 4 étapes pour garantir le succès de votre projet de sécurité.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                    <Card className="h-full border-border hover:border-primary/30 transition-all hover:shadow-xl overflow-hidden group">
                      <CardContent className="p-6 relative">
                        {/* Step Number */}
                        <div className="absolute -top-2 -right-2 w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center">
                          <span className="text-3xl font-bold text-primary/20">{step.step}</span>
                        </div>
                        
                        <motion.div 
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                        >
                          <step.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        
                        <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CLIENT TYPES SECTION */}
        {/* ============================================ */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="badge-accent mb-3">
                  <Users className="w-4 h-4" />
                  <span>Pour Tous</span>
                </div>
                <h2 className="section-title text-center">
                  Nous Accompagnons Tous les Profils
                </h2>
                <p className="section-subtitle text-center">
                  Particuliers, professionnels, syndics ou collectivités : des solutions adaptées à chaque besoin.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientTypes.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg"
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg mb-4"
                      whileHover={{ rotate: 10 }}
                    >
                      <client.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{client.title}</h3>
                    <p className="text-muted-foreground text-sm">{client.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* TECHNICAL COMPARISONS SECTION - E-E-A-T */}
        {/* ============================================ */}
        <section className="section-padding bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div className="badge-primary mb-3">
                  <Gauge className="w-4 h-4" />
                  <span>Guide d'Expert</span>
                </div>
                <h2 className="section-title text-center">
                  Comparatifs Techniques
                </h2>
                <p className="section-subtitle text-center">
                  Nos experts vous guident dans le choix des meilleures technologies selon vos besoins et votre budget.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-8 max-w-5xl mx-auto">
              {technicalComparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Card className="border-border hover:border-primary/30 transition-all hover:shadow-lg overflow-hidden">
                    <CardContent className="p-6 md:p-8">
                      <h3 className="font-bold text-foreground text-xl mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        {comparison.title}
                      </h3>
                      
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {comparison.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            whileHover={{ scale: 1.02 }}
                            className={`p-4 rounded-xl border ${item.recommended ? 'border-primary bg-primary/5' : 'border-border bg-secondary/30'}`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-foreground">{item.label}</span>
                              {item.recommended && (
                                <span className="px-2 py-1 text-xs font-medium bg-primary text-white rounded-full">
                                  Recommandé
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                        <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-foreground font-medium">{comparison.advice}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CERTIFICATIONS SECTION */}
        {/* ============================================ */}
        <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5 border-y border-border/50">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">Certifications & Normes</h3>
                <p className="text-muted-foreground text-sm">Matériel et installations conformes aux standards français et européens</p>
              </div>
            </AnimatedSection>
            
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <BadgeCheck className="w-6 h-6 text-primary" />
                  <div>
                    <span className="font-bold text-foreground block">{cert.name}</span>
                    <span className="text-xs text-muted-foreground">{cert.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CTA SECTION */}
        {/* ============================================ */}
        <section className="section-padding bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <motion.div 
                className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Votre Projet <span className="text-gradient-animated">Sur Mesure</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Vous ne trouvez pas exactement ce que vous cherchez ? Nos experts conçoivent des solutions 
                personnalisées adaptées à vos besoins spécifiques et à votre budget.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 h-14 px-8 text-lg group shadow-xl"
                  asChild
                >
                  <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 w-5 h-5" />
                    {contactInfo.phoneMobile}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg border-2 hover:bg-primary/5"
                  asChild
                >
                  <Link to="/#quote">
                    Demander un Devis Gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================ */}
        {/* COVERAGE SECTION */}
        {/* ============================================ */}
        <section className="section-padding bg-secondary/20">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="badge-primary mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Couverture Nationale</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Intervention <span className="text-gradient-animated">Partout en France</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Notre réseau de techniciens couvre l'ensemble du territoire français. 
                    Présence renforcée en <strong>Île-de-France</strong> pour des interventions rapides rapidement.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <div className="text-2xl font-bold text-primary mb-1">48h</div>
                      <div className="text-sm text-muted-foreground">Délai Île-de-France</div>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border">
                      <div className="text-2xl font-bold text-primary mb-1">5 jours</div>
                      <div className="text-sm text-muted-foreground">Délai France</div>
                    </div>
                  </div>
                  <Button asChild className="gap-2">
                    <Link to="/zones-intervention">
                      Voir nos zones d'intervention
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="lg:w-1/2">
                  <motion.div 
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={technicianImage} 
                      alt="Technicien HD Connect en intervention - Installation sécurité" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 text-white">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-bold">Techniciens Certifiés</div>
                          <div className="text-sm text-white/80">Formation continue constructeurs</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ============================================ */}
        {/* SEO TEXT BLOCK - Contenu enrichi */}
        {/* ============================================ */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h2>HD Connect : Votre Partenaire Expert en Sécurité Électronique</h2>
              
              <p>
                Depuis <strong>2014</strong>, <strong>HD Connect</strong> s'est imposé comme un acteur de référence 
                dans le domaine de la sécurité électronique en France. Notre équipe de techniciens certifiés 
                accompagne les particuliers, professionnels et collectivités dans tous leurs projets : 
                <strong>installation de vidéosurveillance</strong>, mise en place de <strong>systèmes d'alarme</strong>, 
                déploiement de <strong>solutions de contrôle d'accès</strong> et intégration de <strong>domotique connectée</strong>.
              </p>
              
              <h3>Une Expertise Multi-Domaines</h3>
              <p>
                Notre force réside dans notre capacité à proposer une <strong>offre globale et cohérente</strong>. 
                Plutôt que de multiplier les interlocuteurs, HD Connect centralise l'ensemble de vos besoins en sécurité :
              </p>
              <ul>
                <li><strong>Vidéosurveillance HD, 2K et 4K</strong> : caméras dômes, bullets, PTZ, avec enregistrement NVR et consultation mobile</li>
                <li><strong>Alarmes certifiées NF&A2P</strong> : systèmes filaires ou sans fil Ajax, Risco, Paradox reconnus par les assureurs</li>
                <li><strong>Contrôle d'accès</strong> : badges RFID, lecteurs biométriques, interphonie vidéo connectée</li>
                <li><strong>Domotique sécurité</strong> : pilotage centralisé éclairage, volets, chauffage, scénarios automatisés</li>
                <li><strong>Réseau et câblage structuré</strong> : baies de brassage, câblage Cat 6A/7, WiFi professionnel</li>
                <li><strong>Antennes et satellite</strong> : TNT, paraboles, distribution collective</li>
                <li><strong>Portails et parkings</strong> : motorisation, barrières levantes, contrôle d'accès véhicules</li>
              </ul>
              
              <h3>Pourquoi Choisir HD Connect ?</h3>
              <p>
                Au-delà de l'expertise technique, nous nous engageons sur des valeurs fortes :
              </p>
              <ul>
                <li><strong>Transparence tarifaire</strong> : devis détaillés sans surprise, pas de frais cachés</li>
                <li><strong>Qualité premium</strong> : uniquement des équipements de marques leaders (Hikvision, Dahua, Ajax, Comelit, Ubiquiti)</li>
                <li><strong>Garantie étendue</strong> : 5 ans sur les systèmes d'alarme, 3 ans sur la vidéosurveillance</li>
                <li><strong>Support réactif</strong> : assistance technique disponible 24h/24, 7j/7 pour les contrats de maintenance</li>
                <li><strong>Conformité</strong> : installations conformes RGPD, normes NF, marquage CE, exigences assureurs</li>
              </ul>
              
              <h3>Intervention sur Toute la France</h3>
              <p>
                Basés en <strong>Île-de-France</strong>, nos techniciens interviennent sur l'ensemble du territoire français. 
                Délai moyen de 48 heures en région parisienne, 5 jours ouvrés pour les autres régions. 
                Nous couvrons notamment : <strong>Paris et sa banlieue</strong>, Lyon, Marseille, Bordeaux, Toulouse, 
                Nantes, Strasbourg, Lille et leurs agglomérations.
              </p>
              
              <p>
                <strong>Besoin d'un conseil ou d'un devis gratuit ?</strong> Contactez nos experts au 
                <a href="tel:+33627135304"> 06 27 13 53 04</a> ou via notre formulaire en ligne. 
                Réponse garantie sous 24 heures.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesHub;
