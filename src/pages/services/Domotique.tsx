import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Home, Smartphone, Zap, Sun, Thermometer, Clock, CheckCircle, HardHat, Settings, MapPin, Lightbulb, Wifi, Lock, Users, Award, Phone, MessageSquare, Building, Store, Factory, ShieldAlert } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicePrestations from "@/components/ServicePrestations";
import ServiceSchema from "@/components/SEO/ServiceSchema";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import ServiceLinks from "@/components/ServiceLinks";
import { useSEO } from "@/hooks/useSEO";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceHero from "@/components/ServiceHero";
import ContentSection from "@/components/ContentSection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceShowcase from "@/components/ServiceShowcase";
import ImageBreak from "@/components/ImageBreak";
import RegionCoverage from "@/components/RegionCoverage";
import CTAIntermediate from "@/components/CTAIntermediate";
import CTAFloating from "@/components/CTAFloating";
import LightStatsSection from "@/components/LightStatsSection";
import UseCasesSection from "@/components/UseCasesSection";
import ColoredAdvantagesSection from "@/components/ColoredAdvantagesSection";
import ColoredProcessSteps from "@/components/ColoredProcessSteps";
import TechnologiesGaranties from "@/components/TechnologiesGaranties";
import GarantiesSection from "@/components/GarantiesSection";
import BlogCTASection from "@/components/BlogCTASection";
import heroDomotiqueImage from "@/assets/hero-domotique.webp";
import domotiqueTabletImage from "@/assets/domotique-tablet-wall.webp";
import domotiqueLightSwitchImage from "@/assets/domotique-light-smart.webp";
import domotiqueThermostatImage from "@/assets/domotique-thermostat.webp";
import domotiqueMaisonImage from "@/assets/domotique-maison-particulier.webp";
import servicePageImage from "@/assets/service-page-domotique.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryDomotiqueTablet from "@/assets/gallery-domotique-tablet.webp";
import galleryDomotiqueSwitch from "@/assets/gallery-domotique-switch.webp";
import galleryDomotiqueScene from "@/assets/gallery-domotique-scene.webp";

const Domotique = () => {
  const { domotique } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Domotique Intelligente & Maison Connectée 2025-2026 | Économies d'Énergie IA | HD Connect",
    description: "Optimisez votre confort et réduisez vos factures de 30% avec la domotique intelligente pilotée par IA. Installation KNX, Z-Wave, Zigbee. Devis gratuit rapidement.",
    keywords: "domotique intelligente 2025-2026, maison connectée IA, économies énergie domotique, installation KNX professionnel, pilotage chauffage smartphone, HD Connect",
    canonicalUrl: "https://hdconnect.fr/services/domotique",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Domotique", url: "/services/domotique" },
  ];

  const features = [
    { icon: Smartphone, title: "Contrôle Centralisé 24/7", description: "Pilotez tous vos équipements (sécurité, éclairage, chauffage, volets) depuis une interface unique sur smartphone, tablette ou PC, même à distance." },
    { icon: Zap, title: "Scénarios Intelligents Automatisés", description: "Créez des automatisations pour simuler une présence, optimiser votre consommation d'énergie ou déclencher des actions en cascade (détection mouvement = lumière + alarme)." },
    { icon: Thermometer, title: "Gestion Énergétique Avancée", description: "Programmation intelligente du chauffage par zone, détection de présence pour l'éclairage, gestion des volets selon l'ensoleillement. Économies de 15 à 30% garanties." },
    { icon: Lock, title: "Sécurité Intégrée Totale", description: "Synchronisation complète avec vos systèmes d'alarme et de vidéosurveillance. Activation/désactivation automatique selon les scénarios de sécurité." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit des Besoins", description: "Analyse de vos habitudes, de votre infrastructure existante et de vos objectifs pour définir le système domotique idéal (KNX filaire, Z-Wave, Zigbee ou hybride)." },
    { icon: HardHat, title: "2. Installation et Câblage", description: "Installation des modules, des capteurs, des actionneurs et du câblage nécessaire. Solutions filaires pour le neuf, sans fil pour la rénovation, ou hybride pour plus de flexibilité." },
    { icon: Settings, title: "3. Programmation des Scénarios", description: "Configuration complète des automatisations, des interfaces utilisateur intuitives et des accès à distance sécurisés. Test exhaustif de tous les scénarios avant mise en service." },
    { icon: CheckCircle, title: "4. Formation et Support", description: "Formation complète de vos équipes à l'utilisation du système. Support technique continu et mises à jour régulières pour garantir la pérennité de votre investissement." },
  ];

  const useCases = [
    { 
      icon: Home, 
      title: "Maisons Individuelles et Appartements", 
      description: "Transformez votre domicile en maison intelligente pour plus de confort, de sécurité et d'économies d'énergie. Contrôle du chauffage par pièce, scénarios de vie quotidiens, simulation de présence en cas d'absence.",
      features: ["Gestion chauffage par zone", "Scénarios matin/soir/absence", "Simulation de présence", "Économies d'énergie 15-30%"]
    },
    { 
      icon: Building, 
      title: "Bureaux et Immeubles Professionnels", 
      description: "Building Management System (BMS) pour l'optimisation énergétique, la gestion des accès et la supervision technique. Reporting centralisé, alertes automatiques et conformité énergétique RT2012/RE2020.",
      features: ["Optimisation CVC", "Supervision centralisée", "Reporting énergétique", "Intégration sécurité incendie"]
    },
    { 
      icon: Store, 
      title: "Commerces et Petits Locaux", 
      description: "Automatisation de l'éclairage selon l'occupation, gestion du chauffage adapté aux horaires d'ouverture, scénarios de fermeture sécurisée. Réduction des coûts énergétiques et amélioration du confort client.",
      features: ["Éclairage détection présence", "Chauffage programmé", "Fermeture sécurisée", "Économies énergétiques"]
    },
    { 
      icon: Factory, 
      title: "Sites Industriels et Logistiques", 
      description: "Supervision des installations techniques, gestion des accès sécurisée, monitoring énergétique des zones de production. Intégration avec les systèmes de sécurité incendie et les alarmes techniques.",
      features: ["Supervision technique", "Gestion accès multi-zones", "Monitoring énergétique", "Alertes techniques"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Expertise Certifiée", description: "Techniciens certifiés KNX, Z-Wave et Zigbee avec plus de 10 ans d'expérience en domotique résidentielle et tertiaire." },
    { icon: Zap, title: "Solutions Évolutives", description: "Architectures modulaires qui évoluent avec vos besoins. Ajout de nouveaux équipements possible à tout moment sans refonte complète." },
    { icon: Lock, title: "Sécurité et Confidentialité", description: "Contrôle local de vos données (serveur domotique chez vous). Pas de dépendance cloud obligatoire. Chiffrement bout-en-bout pour les accès distants." },
    { icon: Users, title: "Support Dédié 24/7", description: "Interlocuteur unique du devis à la maintenance. Support technique réactif par téléphone, email ou intervention sur site pour toute question." },
  ];

  const faqItems = domotique.faq || [];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-violet-500/5 to-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Installation Domotique et Maison Intelligente"
        serviceDescription="Expert en installation de systèmes domotiques KNX, Z-Wave et Zigbee. Maison intelligente, automatisation sécurité, gestion énergétique. Intervention sur toute la France."
        serviceUrl="/services/domotique"
        serviceImage="/assets/service-domotique.webp"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Installation Domotique et Maison Intelligente"
          subtitle="Domotique Intelligente"
          description="Transformez votre maison ou vos locaux en espace intelligent et sécurisé. HD Connect intègre vos systèmes de sécurité avec la domotique (éclairage, chauffage, volets) pour une automatisation complète, accessible depuis votre smartphone, 24h/24."
          backgroundImage={heroDomotiqueImage}
          icon={<Home className="w-4 h-4" />}
          badgeText="Expert Domotique"
          accentColor="domotique"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Passer à la Domotique Intelligente pilotée par IA en 2025-2026 ?"
          badge="Maison Connectée & IA"
          badgeIcon={<Smartphone className="w-4 h-4" />}
          imagePosition="right"
          image={domotiqueTabletImage}
          imageAlt="Interface de contrôle domotique intelligente sur tablette murale affichant la gestion énergétique et la sécurité d'une maison connectée"
          content={
            <>
              <p>
                La domotique est devenue un élément incontournable du confort moderne. En France, plus de 40% des nouveaux logements intègrent au moins un système domotique, et cette tendance s'accélère avec les obligations réglementaires de performance énergétique (RT2012, RE2020). Un système domotique bien conçu peut réduire votre consommation énergétique de <strong>15 à 30%</strong>.
              </p>
              <p>
                En 2025-2026, HD Connect franchit une nouvelle étape avec l'intégration de l'<strong>Intelligence Artificielle générative</strong> dans votre habitat. Nos systèmes apprennent vos habitudes de vie pour optimiser automatiquement le chauffage, l'éclairage et la sécurité sans intervention manuelle, garantissant un confort maximal tout en minimisant l'empreinte carbone.
              </p>
              <p>
                L'optimisation énergétique est au cœur de nos solutions. Grâce à la <strong>régulation intelligente par IA</strong>, vous pouvez réaliser des économies allant jusqu'à 30% sur votre facture de chauffage et d'électricité, tout en respectant les normes environnementales les plus strictes (RE2020).
              </p>
              <p>
                Chez HD Connect, nous concevons des solutions domotiques sur mesure adaptées à chaque configuration. Nos systèmes combinent des technologies éprouvées (KNX filaire pour le neuf, Z-Wave et Zigbee sans fil pour la rénovation) avec une intégration complète de vos systèmes de sécurité existants.
              </p>
              <p>
                Notre approche privilégie le <strong>contrôle local de vos données</strong>. Contrairement aux solutions cloud propriétaires, nos systèmes fonctionnent avec un serveur domotique chez vous, garantissant votre indépendance et la pérennité de votre investissement. En cas de dysfonctionnement, notre service de maintenance vous assure une **intervention sur site Urgence** en Île-de-France.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <motion.div 
                  className="p-5 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/30 rounded-2xl border border-purple-200/50 dark:border-purple-800/30 shadow-md"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                      <ShieldAlert className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-purple-900 dark:text-purple-100 font-bold">Sécurité Intégrée</p>
                  </div>
                  <p className="text-purple-800/70 dark:text-purple-200/70 text-xs mb-4">Automatisez votre alarme avec vos scénarios de vie.</p>
                  <Link to="/services/alarme">
                    <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 hover:from-purple-600 hover:to-fuchsia-600 text-white shadow-md hover:shadow-lg transition-all group">
                      Voir les Alarmes
                      <ShieldAlert className="ml-2 w-3 h-3 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div 
                  className="p-5 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30 rounded-2xl border border-violet-200/50 dark:border-violet-800/30 shadow-md"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-violet-900 dark:text-violet-100 font-bold">Accès Connectés</p>
                  </div>
                  <p className="text-violet-800/70 dark:text-violet-200/70 text-xs mb-4">Ouvrez votre porte à distance via votre système domotique.</p>
                  <Link to="/services/controle-acces">
                    <Button size="sm" className="w-full bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white shadow-md hover:shadow-lg transition-all group">
                      Contrôle d'Accès
                      <Lock className="ml-2 w-3 h-3 group-hover:translate-y-[-2px] transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </>
          }
          delay={0}
        />

        {/* SECTION FONCTIONNALITÉS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Technologies Domotiques pour Votre Confort et Sécurité
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-purple-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION FONCTIONNEMENT DÉTAILLÉ */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Comment Fonctionne un Système Domotique Moderne ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Un système domotique professionnel repose sur une architecture distribuée composée de plusieurs couches interconnectées. Au cœur du système se trouve un <strong>serveur domotique</strong> (ou contrôleur central) qui orchestre tous les équipements et exécute les scénarios programmés.
                </p>
                <p>
                  <strong>Les capteurs intelligents</strong> (détecteurs de mouvement, de luminosité, de température, d'humidité, de contact) collectent en permanence les données de votre environnement. Ces informations sont transmises au serveur via un protocole de communication (KNX, Z-Wave, Zigbee ou WiFi) qui assure une transmission fiable et sécurisée.
                </p>
                <p>
                  <strong>Les actionneurs</strong> (relais d'éclairage, vannes thermostatiques, moteurs de volets, serrures électriques) reçoivent les ordres du serveur et exécutent les actions programmées. Par exemple, si la température chute sous 18°C et que quelqu'un est détecté dans la pièce, le système augmente automatiquement le chauffage.
                </p>
                <p>
                  <strong>L'interface utilisateur</strong> (application mobile, écran tactile, commandes vocales) vous permet de visualiser l'état de votre maison, de créer des scénarios et de contrôler manuellement vos équipements. Les données sont chiffrées bout-en-bout pour garantir votre sécurité et votre confidentialité.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak 
          image={servicePageImage}
          alt="Interface de contrôle domotique KNX sur tablette murale dans salon moderne avec éclairage ambiant violet"
          caption="Maison intelligente : pilotez tout depuis une interface unique"
        />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate 
          title="Rendez votre maison intelligente"
          subtitle="Nos experts conçoivent un système domotique adapté à vos besoins et votre budget."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
        />

        {/* SECTION CAS D'USAGE CONCRETS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Solutions Domotiques Adaptées à Chaque Environnement
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Que vous soyez particulier ou professionnel, HD Connect conçoit des systèmes domotiques adaptés à vos besoins spécifiques et à votre budget.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                    <Card className="p-6 hover-lift h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.features.map((feature, i) => (
                          <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION AVANTAGES HD CONNECT */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Pourquoi Choisir HD Connect pour Votre Projet Domotique ?
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                const colors = [
                  "from-purple-500 to-pink-500",
                  "from-amber-500 to-orange-500",
                  "from-violet-500 to-purple-600",
                  "from-pink-500 to-rose-500"
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="h-full"
                  >
                    <div className="text-center p-6 rounded-2xl bg-card border-2 border-transparent hover:border-purple-500/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <motion.div 
                        className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${colors[index]} flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                      <p className="text-muted-foreground text-sm">{advantage.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION COUVERTURE FRANCE PAR RÉGIONS */}
        <RegionCoverage serviceName="Domotique" serviceSlug="domotique" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à automatiser votre maison ?"
          subtitle="Nos experts conçoivent gratuitement votre système domotique sur mesure."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Votre Projet Domotique en 4 Étapes
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const stepColors = [
                  "from-purple-500 to-pink-500",
                  "from-violet-500 to-purple-600",
                  "from-pink-500 to-rose-500",
                  "from-emerald-500 to-green-600"
                ];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
                    whileHover={{ y: -12, scale: 1.03 }}
                    className="h-full"
                  >
                    <div className="text-center p-6 border-2 border-transparent hover:border-purple-500/20 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                      </div>
                      <motion.div 
                        className={`w-[72px] h-[72px] mx-auto rounded-2xl bg-gradient-to-br ${stepColors[index]} flex items-center justify-center mb-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-9 h-9 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <ServicePrestations serviceName="Domotique" interventionMode={true} />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Installations Domotiques"
          description="Découvrez nos réalisations smart home : interfaces tactiles, contrôle centralisé et équipements connectés."
          images={[
            { src: galleryDomotiqueTablet, alt: "Tablette murale contrôle domotique" },
            { src: galleryDomotiqueSwitch, alt: "Interrupteurs connectés design" },
            { src: galleryDomotiqueScene, alt: "Scène smart home avec stores automatisés" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Étude Domotique Gratuite
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée rapidement. Étude technique offerte, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("quote", { mode: "quote" })}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Formulaire de Devis en Ligne
                </Button>
                <a href={`tel:${contactInfo.phoneMobile.replace(/\s/g, '')}`}>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10">
                    <Phone className="w-4 h-4 mr-2" />
                    {contactInfo.phoneMobile}
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA FLOATING CONVERSION */}
        <CTAFloating serviceName="maison" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="domotique" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["domotique", "conseils"]} 
          title="Guides Domotique et Maison Connectée"
        />

        <ServiceLinks currentService="domotique" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur la Domotique"
          subtitle="Réponses à vos questions sur les systèmes KNX, Z-Wave et l'automatisation intelligente."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Domotique;
