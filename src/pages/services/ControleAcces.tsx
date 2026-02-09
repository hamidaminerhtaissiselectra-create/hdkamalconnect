import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { content } from "@/data/content";
import { Lock, Fingerprint, CreditCard, History, Users, Key, CheckCircle, Zap, HardHat, Settings, MapPin, Building, Home, Factory, Shield, Phone, MessageSquare, Award, Clock, Scan, DoorOpen, Camera } from "lucide-react";
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
import heroAccesImage from "@/assets/hero-controle-acces.webp";
import accessBiometricImage from "@/assets/acces-biometrie-porte.webp";
import accessBadgeReaderImage from "@/assets/acces-badge-office.webp";
import accessInterphoneImage from "@/assets/access-interphone.webp";
import interphoneMaisonImage from "@/assets/interphone-video-maison.webp";
import servicePageImage from "@/assets/service-page-controle-acces.webp";
// Gallery-specific images (unique to ServiceShowcase)
import galleryAccesRfid from "@/assets/gallery-acces-rfid.webp";
import galleryAccesBiometric from "@/assets/gallery-acces-biometric.webp";
import galleryAccesIntercom from "@/assets/gallery-acces-intercom.webp";
const ControleAcces = () => {
  const {
    controleacces
  } = content.pageServices;
  const contactInfo = content.company.contact;
  const {
    scrollToSection
  } = useSmoothScroll();
  useSEO({
    title: "Contrôle d'Accès Biométrique & Badges RFID 2025-2026 | Sécurité IA | HD Connect",
    description: "Expert en contrôle d'accès intelligent 2025-2026. Biométrie faciale IA, badges RFID cryptés, gestion cloud multi-sites. Installation certifiée pour entreprises et résidences.",
    keywords: "contrôle d'accès biométrique 2025-2026, badge RFID sécurisé, reconnaissance faciale IA, interphone vidéo IP, gestion accès cloud, HD Connect, sécurité locaux professionnels",
    canonicalUrl: "https://hdconnect.fr/services/controle-acces"
  });
  const breadcrumbs = [{
    name: "Services",
    url: "/services"
  }, {
    name: "Contrôle d'Accès",
    url: "/services/controle-acces"
  }];
  const faqItems = controleacces.faq || [];
  const features = [{
    icon: CreditCard,
    title: "Badges RFID/NFC Sécurisés",
    description: "Badges haute sécurité cryptés Mifare DESFire, personnalisables et traçables. Gestion centralisée des droits avec révocation instantanée en cas de perte."
  }, {
    icon: Fingerprint,
    title: "Biométrie Multi-Modalités",
    description: "Reconnaissance d'empreinte digitale, faciale ou veineuse pour une identification sans contact, ultra-sécurisée et conforme RGPD."
  }, {
    icon: Key,
    title: "Gestion Centralisée Cloud",
    description: "Interface web intuitive pour gérer tous vos sites, utilisateurs, horaires et zones depuis n'importe où. Rapports automatiques et alertes en temps réel."
  }, {
    icon: History,
    title: "Traçabilité et Conformité",
    description: "Historique complet de tous les accès avec horodatage précis, exports pour audit et conformité aux obligations légales (Code du travail, RGPD)."
  }];
  const processSteps = [{
    icon: MapPin,
    title: "1. Audit des Flux",
    description: "Analyse détaillée de vos flux de personnes, zones sensibles et contraintes organisationnelles pour définir l'architecture optimale."
  }, {
    icon: HardHat,
    title: "2. Installation Matérielle",
    description: "Pose des lecteurs, contrôleurs, ventouses et gâches électriques. Câblage sécurisé et intégration avec votre infrastructure existante."
  }, {
    icon: Settings,
    title: "3. Configuration Logicielle",
    description: "Paramétrage des droits par utilisateur, zone et horaire. Intégration avec vos systèmes RH, vidéosurveillance et alarme."
  }, {
    icon: CheckCircle,
    title: "4. Formation et Déploiement",
    description: "Formation complète de vos équipes à l'administration du système. Remise de la documentation et support technique continu."
  }];
  const useCases = [{
    icon: Building,
    title: "Bureaux et Sièges Sociaux",
    description: "Sécurisez l'accès à vos locaux tout en fluidifiant le quotidien de vos collaborateurs. Gestion des visiteurs, badges temporaires et intégration avec la pointeuse horaire.",
    features: ["Badge unique accès + pointage", "Gestion des visiteurs", "Zones différenciées", "Reporting RH automatique"]
  }, {
    icon: Factory,
    title: "Sites Industriels et Logistiques",
    description: "Contrôlez les accès aux zones de production, stockage et expédition. Gestion des sous-traitants, traçabilité des mouvements et intégration avec la vidéosurveillance.",
    features: ["Accès par zone de travail", "Gestion des habilitations", "Anti-passback", "Évacuation/Comptage"]
  }, {
    icon: Home,
    title: "Résidences et Copropriétés",
    description: "Modernisez les accès de votre immeuble avec des solutions sans clé : interphones vidéo IP, badges résidents, codes temporaires pour les livreurs et gestion centralisée.",
    features: ["Vidéophone IP connecté", "Ouverture smartphone", "Codes livreurs temporaires", "Gestion par le syndic"]
  }, {
    icon: Shield,
    title: "Établissements Sensibles",
    description: "Sécurité renforcée pour les établissements de santé, laboratoires, data centers. Authentification multi-facteurs, sas d'accès et conformité aux normes sectorielles.",
    features: ["Biométrie + badge", "Sas anti-intrusion", "Journalisation certifiée", "Conformité HDS/ISO"]
  }];
  const advantages = [{
    icon: Award,
    title: "Expertise Multi-Marques",
    description: "Partenaire certifié des leaders du marché : Intratone, CDVI, Salto, dormakaba. Solutions adaptées à chaque budget."
  }, {
    icon: Zap,
    title: "Installation Express",
    description: "Mise en service rapide sans interruption de votre activité. Migration progressive depuis vos anciens systèmes."
  }, {
    icon: Lock,
    title: "Conformité RGPD",
    description: "Accompagnement complet pour la mise en conformité de vos traitements biométriques. Documentation et registre inclus."
  }, {
    icon: Clock,
    title: "Support Réactif 24/7",
    description: "Hotline dédiée et intervention sur site Urgence en cas de blocage. Télémaintenance proactive."
  }];
  return <div className="min-h-screen bg-background overflow-x-hidden relative">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-20 left-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity
      }} />
        <motion.div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-green-500/5 to-emerald-500/5 rounded-full blur-3xl" animate={{
        scale: [1.1, 1, 1.1],
        opacity: [0.4, 0.3, 0.4]
      }} transition={{
        duration: 10,
        repeat: Infinity
      }} />
      </div>
      
      <ServiceSchema serviceName="Installation Contrôle d'Accès Professionnel" serviceDescription="Expert en installation de systèmes de contrôle d'accès pour entreprises et résidences. Badges RFID, biométrie, interphones vidéo, gestion centralisée multi-sites. Intervention sur toute la France." serviceUrl="/services/controle-acces" serviceImage="/assets/service-access.webp" faqItems={faqItems} breadcrumbs={breadcrumbs} />
      <Header />
      <main className="pt-0 relative z-10">
        {/* SERVICE HERO WITH BACKGROUND IMAGE */}
        <ServiceHero title="Contrôle d'Accès Biométrique et Badges Professionnels" subtitle="Expert Contrôle d'Accès" description="Gérez qui entre et sort de vos locaux avec précision et simplicité. HD Connect installe des systèmes de contrôle d'accès modernes : badges RFID, lecteurs biométriques, interphones vidéo IP et solutions cloud pour une gestion centralisée de tous vos sites." backgroundImage={heroAccesImage} icon={<Lock className="w-4 h-4" />} badgeText="Expert Contrôle d'Accès" accentColor="acces" />

        

        {/* SECTION DESCRIPTION EXPERTE - 50/50 */}
        <ContentSection title="Pourquoi Choisir le Contrôle d'Accès Intelligent par IA en 2025-2026 ?" badge="Sécurité IA & Biométrie" badgeIcon={<Lock className="w-4 h-4" />} imagePosition="right" image={accessBiometricImage} imageAlt="Lecteur biométrique haute sécurité avec reconnaissance d'empreinte digitale et technologie IA pour le contrôle d'accès en entreprise" content={<>
              <p>
                Le contrôle d'accès est devenu un pilier essentiel de la sécurité des entreprises et des résidences. En 2025-2026, HD Connect intègre l'<strong>Intelligence Artificielle</strong> pour une gestion des flux plus fluide et sécurisée. Nos systèmes de <strong>reconnaissance faciale IA</strong> permettent un accès sans contact ultra-rapide, tout en garantissant une conformité totale avec le RGPD.
              </p>
              <p>
                Les solutions modernes de contrôle d'accès remplacent avantageusement les clés traditionnelles. Grâce à la <strong>gestion cloud centralisée</strong>, vous pilotez les accès de tous vos sites en temps réel depuis votre smartphone. Un badge perdu ou un accès à révoquer se gère en un clic, assurant une réactivité immédiate face aux risques.
              </p>
              <p>
                Chez HD Connect, nous concevons des systèmes sur mesure qui s'intègrent parfaitement à votre organisation. Nos solutions sont <strong>évolutives et interopérables</strong> avec vos systèmes de vidéosurveillance et d'alarme pour une sécurité globale cohérente.
              </p>
              <p>
                L'IA permet également une <strong>analyse prédictive des flux</strong>, vous alertant en cas de comportement anormal ou de tentative d'accès non autorisée répétée, renforçant ainsi la protection de vos zones sensibles.
              </p>
              <p>
                De l'interphone vidéo IP à la gestion biométrique, nous vous garantissons une installation conforme aux normes en vigueur et un service de maintenance réactif. En cas de panne critique, notre service d'urgence vous assure une **intervention sur site Urgence** en Île-de-France.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <motion.div 
                  className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-2xl border border-emerald-200/50 dark:border-emerald-800/30 shadow-md"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-emerald-900 dark:text-emerald-100 font-bold">Vidéosurveillance IA</p>
                  </div>
                  <p className="text-emerald-800/70 dark:text-emerald-200/70 text-xs mb-4">Identifiez visuellement chaque accès avec nos caméras 4K.</p>
                  <Link to="/services/videosurveillance">
                    <Button size="sm" className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-md hover:shadow-lg transition-all group">
                      Voir la Vidéo IA
                      <Camera className="ml-2 w-3 h-3 group-hover:scale-110 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div 
                  className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-2xl border border-teal-200/50 dark:border-teal-800/30 shadow-md"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
                      <Home className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-teal-900 dark:text-teal-100 font-bold">Maison Connectée</p>
                  </div>
                  <p className="text-teal-800/70 dark:text-teal-200/70 text-xs mb-4">Pilotez vos accès et votre confort depuis une interface unique.</p>
                  <Link to="/services/domotique">
                    <Button size="sm" className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transition-all group">
                      Domotique Smart
                      <Home className="ml-2 w-3 h-3 group-hover:translate-y-[-2px] transition-transform" />
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
                Technologies d'Identification Avancées
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
              const Icon = feature.icon;
              return <motion.div key={index} initial={{
                opacity: 0,
                y: 30,
                scale: 0.95
              }} whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1,
                duration: 0.5
              }} whileHover={{
                y: -8,
                scale: 1.02
              }} className="h-full">
                    <Card className="hover-lift h-full card-micro-interaction border-2 border-transparent hover:border-emerald-500/20">
                      <CardHeader className="flex flex-row items-center space-x-4">
                        <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg flex-shrink-0" whileHover={{
                      scale: 1.1,
                      rotate: 5
                    }}>
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>;
            })}
            </div>
          </div>
        </section>

        {/* SECTION FONCTIONNEMENT DÉTAILLÉ */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
                Comment Fonctionne le Contrôle d'Accès Moderne ?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Un système de contrôle d'accès professionnel repose sur une architecture intelligente composée de lecteurs, de contrôleurs et d'un logiciel de gestion centralisé.
                </p>
                <p>
                  <strong>Le lecteur est l'interface avec l'utilisateur</strong>. Qu'il s'agisse d'un lecteur de badges RFID, d'un terminal biométrique ou d'un digicode, son rôle est de capturer l'identifiant de la personne. Les lecteurs modernes utilisent des technologies sans contact (NFC/Bluetooth) permettant une ouverture via smartphone, offrant une expérience utilisateur fluide et moderne.
                </p>
                <p>
                  <strong>Le contrôleur est le cerveau local de la porte</strong>. Il contient la base de données des personnes autorisées et les plages horaires d'accès. Même en cas de coupure de la connexion avec le serveur central, le contrôleur continue de fonctionner de manière autonome, garantissant que vos accès restent opérationnels en toutes circonstances.
                </p>
                <p>
                  <strong>La gestion centralisée (Cloud ou On-premise)</strong> permet d'administrer l'ensemble du système. Vous pouvez créer des profils d'accès (ex: "Équipe Technique", "Direction", "Prestataires"), définir des calendriers (ex: accès autorisé du lundi au vendredi de 8h à 19h) et visualiser en temps réel qui se trouve sur votre site. En cas d'urgence, une fonction "ouverture totale" ou "confinement" peut être activée en un clic.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* IMAGE BREAK STRATÉGIQUE */}
        <ImageBreak image={servicePageImage} alt="Borne de contrôle d'accès biométrique avec reconnaissance faciale et lecteur d'empreinte digitale" caption="Solutions d'accès biométrique haute sécurité pour entreprises" />

        {/* CTA INTERMÉDIAIRE */}
        <CTAIntermediate title="Sécurisez vos accès dès maintenant" subtitle="Obtenez une étude gratuite de vos besoins en contrôle d'accès par nos experts." phoneNumber={contactInfo.phoneMobile} variant="accent" />

        {/* SECTION CAS D'USAGE CONCRETS */}
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-4">
                Solutions d'Accès Adaptées à Votre Activité
              </h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                HD Connect adapte la technologie de contrôle d'accès en fonction de vos flux et de votre niveau d'exigence sécuritaire.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 100}>
                    <Card className="p-6 hover-lift h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{useCase.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {useCase.features.map((feature, i) => <span key={i} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                            {feature}
                          </span>)}
                      </div>
                    </Card>
                  </AnimatedSection>;
            })}
            </div>
          </div>
        </section>

        {/* SECTION AVANTAGES HD CONNECT */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Pourquoi Choisir HD Connect pour Votre Contrôle d'Accès ?
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                const colors = [
                  "from-emerald-500 to-teal-500",
                  "from-cyan-500 to-blue-500",
                  "from-green-500 to-emerald-600",
                  "from-teal-500 to-cyan-500"
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
                    <div className="text-center p-6 rounded-2xl bg-card border-2 border-transparent hover:border-emerald-500/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
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
        <RegionCoverage serviceName="Contrôle d'Accès" serviceSlug="controle-acces" />

        {/* 2ème CTA ORANGE - BIEN ESPACÉ */}
        <CTAIntermediate 
          title="Prêt à sécuriser vos accès ?"
          subtitle="Nos experts conçoivent gratuitement votre système de contrôle d'accès."
          phoneNumber={contactInfo.phoneMobile}
          variant="accent"
          showBenefits={false}
        />

        {/* SECTION PROCESSUS D'INSTALLATION */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <h2 className="section-title text-center mb-12">
                Votre Projet de Contrôle d'Accès en 4 Étapes
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const stepColors = [
                  "from-emerald-500 to-teal-500",
                  "from-cyan-500 to-blue-500",
                  "from-green-500 to-emerald-600",
                  "from-teal-500 to-cyan-500"
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
                    <div className="text-center p-6 border-2 border-transparent hover:border-emerald-500/20 rounded-2xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                        <span className="text-sm font-bold text-emerald-600">{index + 1}</span>
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

        <ServicePrestations serviceName="Contrôle d'Accès" interventionMode={true} />

        {/* GALERIE IMAGES */}
        <ServiceShowcase title="Nos Installations de Contrôle d'Accès" description="Découvrez nos réalisations : lecteurs biométriques, badges RFID et systèmes de gestion centralisée." images={[{
        src: galleryAccesRfid,
        alt: "Lecteur RFID professionnel avec LED"
      }, {
        src: galleryAccesBiometric,
        alt: "Terminal biométrique empreinte digitale"
      }, {
        src: galleryAccesIntercom,
        alt: "Interphone vidéo entrée immeuble"
      }]} />

        {/* SECTION CTA DEVIS */}
        <section id="quote" className="section-padding bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
          
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
              <h2 className="section-title text-center mb-6">
                Demandez Votre Audit d'Accès Gratuit
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Recevez une proposition personnalisée rapidement. Étude technique offerte, sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection("quote", {
                mode: "quote"
              })} className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg hover:shadow-xl transition-all">
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
        <CTAFloating serviceName="locaux" />

        {/* SECTION TECHNOLOGIES & GARANTIES */}
        <TechnologiesGaranties variant="acces" />

        {/* SECTION GARANTIES */}
        <GarantiesSection variant="compact" />

        {/* CTA BLOG CONTEXTUEL */}
        <BlogCTASection 
          categories={["controle-acces", "conseils"]} 
          title="Guides Contrôle d'Accès"
        />

        <ServiceLinks currentService="controle-acces" />

        {/* FAQ ACCORDÉON */}
        <FAQAccordion title="Questions Fréquentes sur le Contrôle d'Accès" subtitle="Réponses à vos questions sur les badges, la biométrie et la gestion des accès." items={faqItems} />
      </main>
      <Footer />
    </div>;
};
export default ControleAcces;