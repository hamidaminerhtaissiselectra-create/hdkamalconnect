import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { ShieldAlert, Bell, Smartphone, Radio, Home, Building2, CheckCircle, Zap, HardHat, Settings, MapPin, Shield, AlertTriangle, Clock, Phone, MessageSquare, Award, Lock, Users, Siren, Eye } from "lucide-react";
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
import heroAlarmeImage from "@/assets/hero-alarme.webp";
import alarmPanelImage from "@/assets/alarme-panel-modern.webp";
import alarmMotionSensorImage from "@/assets/alarm-motion-sensor.webp";
import alarmSirenOutdoorImage from "@/assets/alarme-sirene-exterieur.webp";
import alarmeMaisonImage from "@/assets/alarme-maison-particulier.webp";
import servicePageImage from "@/assets/service-page-alarme.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryAlarmKeypad from "@/assets/gallery-alarm-keypad.webp";
import galleryAlarmPir from "@/assets/gallery-alarm-pir.webp";
import galleryAlarmSiren from "@/assets/gallery-alarm-siren.webp";

const Alarme = () => {
  const { alarme } = content.pageServices;
  const contactInfo = content.company.contact;
  const { scrollToSection } = useSmoothScroll();

  useSEO({
    title: "Installation Alarme Anti-Intrusion NF&A2P Certifiée 2025-2026 | Télésurveillance 24/7 | HD Connect",
    description: "Expert en installation d'alarmes NF&A2P intelligentes avec détection IA. Protection maison et entreprise, télésurveillance APSAD 24/7. Devis gratuit rapidement.",
    keywords: "installation alarme 2025-2026, alarme NF&A2P, alarme intelligente IA, télésurveillance APSAD, protection intrusion maison, HD Connect, sécurité électronique",
    canonicalUrl: "https://hdconnect.fr/services/alarme",
  });

  const breadcrumbs = [
    { name: "Services", url: "/services" },
    { name: "Alarme", url: "/services/alarme" },
  ];

  const faqItems = alarme.faq || [];

  const features = [
    { icon: ShieldAlert, title: "Détection Multi-Zones Intelligente", description: "Capteurs de mouvement PIR double technologie et détecteurs d'ouverture magnétiques avec analyse comportementale pour éliminer 99% des fausses alarmes." },
    { icon: Siren, title: "Sirènes Puissantes 110dB", description: "Alarmes sonores intérieures et extérieures certifiées, avec protection anti-arrachement et anti-sabotage pour une dissuasion maximale." },
    { icon: Smartphone, title: "Contrôle Mobile Complet", description: "Armez, désarmez et surveillez votre système depuis l'application smartphone. Notifications push instantanées en cas d'alerte avec photos/vidéos." },
    { icon: Radio, title: "Télésurveillance 24/7 APSAD", description: "Connexion directe avec un centre de télésurveillance agréé pour levée de doute et intervention des forces de l'ordre en moins de 15 minutes." },
  ];

  const processSteps = [
    { icon: MapPin, title: "1. Audit de Sécurité Gratuit", description: "Évaluation complète de votre site : points de vulnérabilité, niveau de risque, habitudes de vie pour définir la protection optimale." },
    { icon: HardHat, title: "2. Installation Certifiée", description: "Installation rapide et discrète par nos techniciens certifiés NF Service. Respect des normes APSAD P3 et conformité assurance." },
    { icon: Settings, title: "3. Configuration et Tests", description: "Paramétrage personnalisé des zones, des codes d'accès, des scénarios d'armement et tests de déclenchement complets." },
    { icon: CheckCircle, title: "4. Formation et Attestation", description: "Formation à l'utilisation du système, remise de l'attestation d'installation pour votre assureur et support technique continu." },
  ];

  const useCases = [
    { 
      icon: Home, 
      title: "Maisons et Appartements", 
      description: "Protégez votre foyer et votre famille contre les cambriolages. Nos systèmes sans fil s'installent rapidement sans travaux et s'adaptent à toutes les configurations.",
      features: ["Détecteurs compatibles animaux", "Mode nuit partiel", "Sirène flash extérieure", "Autonomie batterie 3 ans"]
    },
    { 
      icon: Building2, 
      title: "Commerces et Bureaux", 
      description: "Sécurisez vos locaux professionnels contre le vol et le vandalisme. Systèmes évolutifs avec gestion multi-utilisateurs, historique des événements et conformité assurance.",
      features: ["Armement par badge/code", "Zones différenciées jour/nuit", "Intégration vidéosurveillance", "Rapports d'activité"]
    },
    { 
      icon: AlertTriangle, 
      title: "Sites Sensibles", 
      description: "Protection Grade 3 pour les sites à haut risque : bijouteries, pharmacies, entrepôts. Systèmes anti-masque, anti-brouillage avec transmission multi-canaux sécurisée.",
      features: ["Double transmission IP/GSM", "Détection anti-brouillage", "Coffre-fort intégré", "Supervision permanente"]
    },
    { 
      icon: Users, 
      title: "Résidences Secondaires", 
      description: "Gardez un œil sur votre résidence secondaire même à distance. Alertes en temps réel, vérification vidéo et possibilité de faire intervenir un gardien.",
      features: ["Alerte intrusion instantanée", "Vérification photo/vidéo", "Détection de fumée/inondation", "Mode vacances intelligent"]
    },
  ];

  const advantages = [
    { icon: Award, title: "Certification NF&A2P", description: "Équipements certifiés conformes aux exigences des assureurs. Réduction de prime jusqu'à 10% sur votre contrat habitation." },
    { icon: Zap, title: "Installation Express 48h", description: "De l'audit à la mise en service en les meilleurs délais. Intervention d'urgence possible le jour même en Île-de-France." },
    { icon: Lock, title: "Garantie 5 Ans", description: "Garantie constructeur étendue sur tous les équipements. Pièces et main d'œuvre incluses pendant 5 ans." },
    { icon: Clock, title: "Support 24/7 Dédié", description: "Hotline technique disponible 24h/24, 7j/7. Intervention sur site Urgence en cas de panne critique." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-rose-500/5 to-red-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      
      <ServiceSchema
        serviceName="Installation Alarme Anti-Intrusion Certifiée"
        serviceDescription="Expert en installation de systèmes d'alarme anti-intrusion certifiés NF&A2P pour particuliers et professionnels. Télésurveillance 24/7, contrôle smartphone, conformité assurance. Intervention sur toute la France."
        serviceUrl="/services/alarme"
        serviceImage="/assets/service-alarm.webp"
        faqItems={faqItems}
        breadcrumbs={breadcrumbs}
      />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero
          title="Systèmes d'Alarme Anti-Intrusion Certifiés NF&A2P"
          subtitle="Expert Alarme Anti-Intrusion"
          description="Protégez votre domicile ou vos locaux professionnels avec des systèmes d'alarme certifiés, reconnus par les assureurs. HD Connect installe des solutions complètes avec détection intelligente, sirènes puissantes et contrôle à distance depuis votre smartphone."
          backgroundImage={heroAlarmeImage}
          icon={<ShieldAlert className="w-4 h-4" />}
          badgeText="Expert Alarme Anti-Intrusion"
          accentColor="alarme"
        />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection
          title="Pourquoi Installer une Alarme Anti-Intrusion Intelligente en 2025-2026 ?"
          badge="Protection IA & Certification"
          badgeIcon={<ShieldAlert className="w-4 h-4" />}
          imagePosition="right"
          image={alarmPanelImage}
          imageAlt="Système d'alarme anti-intrusion NF&A2P certifié avec panneau de contrôle tactile et détection intelligente par IA pour la sécurité de la maison"
          content={
            <>
              <p>
                En France, un cambriolage a lieu toutes les 90 secondes. Les statistiques du Ministère de l'Intérieur révèlent que <strong>80% des cambrioleurs renoncent</strong> face à un système d'alarme visible et fonctionnel. L'installation d'une alarme anti-intrusion est donc l'investissement le plus efficace pour protéger votre domicile ou vos locaux professionnels.
              </p>
              <p>
                Chez HD Connect, nous installons exclusivement des systèmes certifiés <strong>NF&A2P</strong> (Norme Française - Assurance Prévention Protection), la référence en matière de sécurité électronique en France. Cette certification garantit la fiabilité des équipements et leur résistance aux tentatives de neutralisation.
              </p>
              <p>
                Nos systèmes d'                Cette technologie de <strong>détection intelligente par IA</strong> permet également une levée de doute vidéo instantanée : en cas d'alerte, vous recevez une séquence vidéo HD sur votre smartphone, permettant d'identifier immédiatement la nature de l'événement et de déclencher l'intervention des forces de l'ordre si nécessaire.
              </p>
              <p>
                Enfin, pour une protection complète, HD Connect propose une connexion à un centre de <strong>Télésurveillance APSAD 24/7</strong>. En cas d'alerte confirmée, nous garantissons l'appel des forces de l'ordre et une <strong>intervention sur site Urgence</strong>, assurant une réactivité maximale et une tranquillité d'esprit totale.
              </p>
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-2xl border border-red-200/50 dark:border-red-800/30 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-md">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-red-900 dark:text-red-100 font-bold text-lg">Complétez votre sécurité</p>
                </div>
                <p className="text-red-800/80 dark:text-red-200/80 text-sm mb-4 leading-relaxed">
                  Pour une levée de doute visuelle encore plus performante, découvrez comment nos systèmes de caméras intelligentes s'interfacent avec votre alarme.
                </p>
                <Link to="/services/videosurveillance">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                    Découvrir la Vidéosurveillance IA
                    <Eye className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </>
          }
          delay={0}
        />

        {/* SECTION FONCTIONNALITÉS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Technologies de Détection Avancées
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
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-red-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0"
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
                Comment Fonctionne une Alarme Certifiée ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Un système d'alarme certifié NF&A2P repose sur une architecture sécurisée et redondante. Contrairement aux alarmes grand public, chaque composant est testé pour résister au brouillage radio, à l'ouverture forcée et aux tentatives de sabotage.
                </p>
                <p>
                  <strong>La centrale d'alarme est le cerveau du système</strong>. Elle communique avec tous les détecteurs via un protocole radio crypté multi-fréquences. En cas de tentative de brouillage sur une fréquence, elle bascule instantanément sur une autre. Elle dispose d'une batterie de secours lui permettant de fonctionner pendant 48h même en cas de coupure de courant volontaire.
                </p>
                <p>
                  <strong>La levée de doute est une étape cruciale</strong>. Nos détecteurs de mouvement intègrent souvent une caméra qui prend une série de photos lors d'un déclenchement. Ces images sont envoyées instantanément sur votre smartphone et au centre de télésurveillance. Cela permet de confirmer s'il s'agit d'une intrusion réelle ou d'une erreur de manipulation, évitant ainsi les déplacements inutiles des forces de l'ordre.
                </p>
                <p>
                  <strong>La transmission des alertes est multi-canaux</strong>. Le système utilise votre connexion internet (IP) comme canal principal et dispose d'un secours GSM (carte SIM 4G) intégré. Si un cambrioleur coupe votre ligne téléphonique ou votre fibre, l'alerte est transmise via le réseau mobile, garantissant que l'information arrive toujours à destination.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak 
          image={servicePageImage}
          alt="Panneau d'alarme NF&A2P certifié avec écran tactile et détecteurs de mouvement PIR pour sécurité résidentielle"
          caption="Système d'alarme certifié NF&A2P avec détection intelligente par IA"
        />

        {/* CTA INTERMÉDIAIRE - VERSION COLORÉE */}
        <CTAIntermediate 
          title="Protégez votre domicile ou vos locaux"
          subtitle="Nos experts en sécurité étudient gratuitement vos besoins et proposent une solution sur mesure."
          phoneNumber={contactInfo.phoneMobile}
          variant="gradient"
          accentColor="alarme"
          showBenefits={true}
          urgencyText="Certification NF&A2P garantie"
        />

        {/* STATISTIQUES CLÉS - FOND CLAIR COMME ACCUEIL */}
        <LightStatsSection
          title="Alarme Anti-Intrusion en Chiffres"
          stats={[
            { value: "-80%", label: "Cambriolages évités", description: "grâce à une alarme visible" },
            { value: "NF&A2P", label: "Certification", description: "reconnue assureurs" },
            { value: "Urgence", label: "Installation", description: "mise en service express" },
            { value: "5 ans", label: "Garantie", description: "pièces et main d'œuvre" },
          ]}
          variant="alarme"
        />

        {/* SECTION CAS D'USAGE - VERSION AMÉLIORÉE */}
        <UseCasesSection
          title="Solutions de Protection Adaptées à Vos Besoins"
          subtitle="Chaque site est unique. HD Connect configure votre système d'alarme en fonction de votre environnement, particulier ou professionnel."
          useCases={useCases}
          accentColor="alarme"
        />

        {/* SECTION AVANTAGES HD CONNECT */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Pourquoi Choisir HD Connect pour Votre Alarme ?
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                const colors = [
                  "from-red-500 to-orange-500",
                  "from-amber-500 to-yellow-500",
                  "from-rose-500 to-red-600",
                  "from-orange-500 to-red-500"
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
                    <div className="text-center p-6 rounded-2xl bg-card border-2 border-transparent hover:border-red-500/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
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
        <RegionCoverage serviceName="Alarme" serviceSlug="alarme" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à sécuriser votre site ?"
          subtitle="Nos experts conçoivent gratuitement votre système d'alarme sur mesure."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Votre Sécurité en 4 Étapes Clés
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const stepColors = [
                  "from-red-500 to-orange-500",
                  "from-amber-500 to-yellow-500",
                  "from-rose-500 to-red-600",
                  "from-green-500 to-emerald-500"
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
                    <div className="text-center p-6 border-2 border-transparent hover:border-red-500/20 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-red-600">{index + 1}</span>
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

        <ServicePrestations serviceName="Alarme" interventionMode={true} />

        {/* GALERIE IMAGES */}
        <ServiceShowcase
          title="Nos Installations d'Alarmes"
          description="Découvrez nos réalisations : centrales d'alarme, détecteurs et panneaux de contrôle professionnels."
          images={[
            { src: galleryAlarmKeypad, alt: "Clavier d'alarme moderne avec écran LCD" },
            { src: galleryAlarmPir, alt: "Détecteur PIR au plafond" },
            { src: galleryAlarmSiren, alt: "Sirène extérieure avec flash" }
          ]}
        />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Audit de Sécurité Gratuit
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
        <CTAFloating serviceName="domicile" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="alarme" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["alarme", "conseils"]} 
          title="Guides Alarme et Protection"
        />

        <ServiceLinks currentService="alarme" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion 
          title="Questions Fréquentes sur les Systèmes d'Alarme"
          subtitle="Réponses à vos questions sur l'installation, la certification et la télésurveillance."
          items={faqItems}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Alarme;
