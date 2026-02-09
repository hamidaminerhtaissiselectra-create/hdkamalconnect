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
   Building2,
   CheckCircle,
   Zap,
   Users,
   Sparkles,
   ChevronRight,
   Anchor,
 } from "lucide-react";
 import { marseilleArrondissements, getCriticalMarseilleArrondissements, getHighPriorityMarseilleArrondissements } from "@/data/marseilleArrondissements";
 import { usePhoneCall } from "@/hooks/usePhoneCall";
 import { useSmoothScroll } from "@/hooks/useSmoothScroll";
 
 const MarseillePage = () => {
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
     title: "Expert Sécurité Marseille 2025-2026 | Vidéosurveillance IA & Alarme NF&A2P | HD Connect",
     description: "Expert sécurité 2025-2026 à Marseille : installation vidéosurveillance IA 4K, alarmes NF&A2P et contrôle d'accès biométrique. Intervention Rapide dans les 16 arrondissements. Devis gratuit.",
     keywords: "expert sécurité Marseille 2025-2026, vidéosurveillance IA Marseille, alarme NF&A2P Marseille, installation caméra surveillance Marseille, contrôle accès biométrique Marseille, HD Connect Marseille",
     canonicalUrl: "https://hdconnect.fr/villes/marseille",
   });
 
   const breadcrumbItems = [
     { name: "Zones d'intervention", url: "/zones-intervention" },
     { name: "Provence-Alpes-Côte d'Azur", url: "/zones-intervention/provence-alpes-cote-d-azur" },
     { name: "Marseille", url: "/villes/marseille" },
   ];
 
   const services = [
     {
       icon: Camera,
       title: "Vidéosurveillance Marseille",
       description: "Caméras HD/4K, vision nocturne, accès mobile 24/7 dans tous les arrondissements",
       link: "/villes/marseille/videosurveillance",
       color: "from-blue-500 to-cyan-500",
     },
     {
       icon: ShieldAlert,
       title: "Alarmes Marseille",
       description: "Systèmes certifiés NF&A2P, télésurveillance 24/7 Marseille",
       link: "/villes/marseille/alarme",
       color: "from-red-500 to-orange-500",
     },
     {
       icon: Lock,
       title: "Contrôle d'Accès Marseille",
       description: "Badges RFID, biométrie, interphones vidéo pour immeubles marseillais",
       link: "/villes/marseille/controle-acces",
       color: "from-green-500 to-emerald-500",
     },
     {
       icon: Home,
       title: "Domotique Marseille",
       description: "Maison intelligente, automatisation sécurité pour appartements marseillais",
       link: "/villes/marseille/domotique",
       color: "from-purple-500 to-pink-500",
     },
     {
       icon: Wifi,
       title: "Réseau Marseille",
       description: "Infrastructure WiFi 6E, câblage, firewall pour bureaux marseillais",
       link: "/villes/marseille/reseau",
       color: "from-indigo-500 to-blue-500",
     },
     {
       icon: Wrench,
       title: "Maintenance Marseille",
       description: "Contrats annuels, dépannage 24/7 dans tout Marseille",
       link: "/villes/marseille/maintenance",
       color: "from-amber-500 to-yellow-500",
     },
   ];
 
   const marseilleStats = [
     { value: "16", label: "Arrondissements", icon: Building2, suffix: "" },
     { value: "870", label: "Mille habitants", icon: Users, suffix: "K" },
     { value: "400", label: "Interventions/an", icon: Zap, suffix: "+" },
     { value: "24", label: "Heures délai max", icon: Clock, suffix: "h" },
   ];
 
   const criticalArr = getCriticalMarseilleArrondissements();
   const highArr = getHighPriorityMarseilleArrondissements();
 
   const faqItems = [
     {
       question: "Quels arrondissements de Marseille couvrez-vous ?",
       answer: "HD Connect intervient dans les 16 arrondissements de Marseille, du 1er au 16e. Nos équipes connaissent parfaitement chaque quartier : Vieux-Port, Joliette, Prado, Calanques, L'Estaque...",
     },
     {
       question: "Quel est le délai d'intervention à Marseille ?",
       answer: "Nous intervenons rapidement dans tout Marseille pour les installations. Pour les urgences et dépannages, nous pouvons intervenir le jour même. Notre présence en PACA garantit une réactivité optimale.",
     },
     {
       question: "Quels sont les arrondissements les plus à risque ?",
       answer: "Les 1er, 2e, 3e, 10e, 13e, 14e et 15e arrondissements présentent des zones sensibles. Nous proposons des solutions renforcées adaptées : vidéosurveillance HD, alarmes certifiées NF&A2P.",
     },
     {
       question: "Proposez-vous des solutions pour les copropriétés marseillaises ?",
       answer: "Oui, nous équipons de nombreuses copropriétés marseillaises : vidéosurveillance parties communes, interphones vidéo IP, contrôle d'accès par badge. Nous travaillons avec les syndics.",
     },
     {
       question: "Les frais de déplacement sont-ils inclus à Marseille ?",
       answer: "Oui, les frais de déplacement sont inclus pour toutes nos interventions à Marseille. Le devis est global et transparent, sans frais cachés.",
     },
   ];
 
   const jsonLd = {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": "HD Connect - Sécurité Marseille",
     "image": "https://hdconnect.fr/logo.png",
     "url": "https://hdconnect.fr/villes/marseille",
     "telephone": "+33 6 27 13 53 04",
     "email": "contact@hdconnect.fr",
     "address": {
       "@type": "PostalAddress",
       "addressLocality": "Marseille",
       "addressRegion": "Provence-Alpes-Côte d'Azur",
       "addressCountry": "FR"
     },
     "areaServed": { "@type": "City", "name": "Marseille" },
     "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "worstRating": "1", "reviewCount": "203" },
     "priceRange": "€€",
   };
 
   const faqJsonLd = {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": faqItems.map(faq => ({
       "@type": "Question",
       "name": faq.question,
       "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
     }))
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
 
       {/* Hero Section */}
       <section ref={heroRef} className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
         <motion.div className="absolute inset-0 z-0" style={{ y: heroParallax }}>
           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-background" />
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589394760031-2b29de7e2f6e?w=1920')] bg-cover bg-center opacity-20" />
         </motion.div>
 
         <div className="container mx-auto px-4 relative z-10">
           <Breadcrumbs items={breadcrumbItems} />
           
           <motion.div className="max-w-4xl mt-8" style={{ opacity: heroOpacity }}>
             <motion.div 
               className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 mb-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
               whileHover={{ scale: 1.05 }}
             >
               <Anchor className="w-5 h-5" />
               <span>Expert Sécurité Marseille - 16 Arrondissements</span>
             </motion.div>
 
             <motion.h1 
               className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
             >
               Sécurisez votre{" "}
               <span className="text-gradient-animated">Marseille</span>
               <br />
               avec <span className="text-gradient-animated" style={{ animationDelay: '0.5s' }}>HD Connect</span>
             </motion.h1>
 
             <motion.p 
               className={`text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
             >
               Installation professionnelle de vidéosurveillance, alarmes certifiées et contrôle d'accès dans les 16 arrondissements de Marseille. Intervention rapidement, devis gratuit.
             </motion.p>
 
             <motion.div 
               className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
             >
               <Button 
                 onClick={() => scrollToSection("quote", { mode: "quote" })} 
                 size="lg" 
                 className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
               >
                 <Sparkles className="mr-2 w-5 h-5" />
                 Devis gratuit Marseille
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
 
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
               {trustBadges.map((badge, index) => (
                 <motion.div 
                   key={badge.label} 
                   className={`flex items-center gap-3 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:scale-105 transition-all duration-500 hover:shadow-lg ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                   style={{ transitionDelay: `${400 + index * 100}ms` }}
                   whileHover={{ y: -5 }}
                 >
                   <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                     <badge.icon className={`w-5 h-5 ${badge.color}`} />
                   </div>
                   <span className="text-foreground font-medium text-sm md:text-base">{badge.label}</span>
                 </motion.div>
               ))}
             </div>
           </motion.div>
         </div>
       </section>
 
       {/* Stats Section */}
       <AnimatedSection>
         <section className="py-16 bg-muted/30">
           <div className="container mx-auto px-4">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {marseilleStats.map((stat, index) => (
                 <motion.div
                   key={stat.label}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className="text-center p-6 rounded-2xl bg-card border border-border/50"
                 >
                   <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                   <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                     {stat.value}{stat.suffix}
                   </div>
                   <div className="text-sm text-muted-foreground">{stat.label}</div>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
       </AnimatedSection>
 
       {/* Services Grid */}
       <AnimatedSection>
         <section className="py-20 bg-background">
           <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services à Marseille</h2>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 Solutions de sécurité complètes pour protéger votre domicile ou entreprise à Marseille
               </p>
             </div>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {services.map((service, index) => (
                 <motion.div
                   key={service.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                 >
                   <Link to={service.link}>
                     <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                       <CardContent className="p-6">
                         <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                           <service.icon className="w-7 h-7 text-white" />
                         </div>
                         <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                         <p className="text-muted-foreground text-sm">{service.description}</p>
                       </CardContent>
                     </Card>
                   </Link>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
       </AnimatedSection>
 
       {/* Arrondissements Grid */}
       <AnimatedSection>
         <section className="py-20 bg-muted/30">
           <div className="container mx-auto px-4">
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Les 16 Arrondissements de Marseille</h2>
               <p className="text-muted-foreground max-w-2xl mx-auto">
                 HD Connect intervient dans tous les arrondissements de Marseille avec des solutions adaptées à chaque quartier
               </p>
             </div>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {marseilleArrondissements.map((arr, index) => (
                 <motion.div
                   key={arr.slug}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.03 }}
                 >
                   <Link to={`/marseille/${arr.slug}`}>
                     <Card className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${arr.priority === 'critique' ? 'border-red-500/30' : arr.priority === 'haute' ? 'border-amber-500/30' : 'border-border/50'}`}>
                       <CardContent className="p-4">
                         <div className="flex justify-between items-start mb-2">
                           <h3 className="font-semibold text-sm">{arr.name}</h3>
                           {arr.priority === 'critique' && (
                             <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-red-500/10 text-red-500">Priorité</span>
                           )}
                         </div>
                         <p className="text-xs text-muted-foreground mb-2">{arr.population} habitants</p>
                         <div className="flex flex-wrap gap-1">
                           {arr.quartiers.slice(0, 2).map(q => (
                             <span key={q} className="text-[10px] px-1.5 py-0.5 rounded-full bg-muted">{q}</span>
                           ))}
                         </div>
                       </CardContent>
                     </Card>
                   </Link>
                 </motion.div>
               ))}
             </div>
           </div>
         </section>
       </AnimatedSection>
 
       {/* Why HD Connect */}
       <WhyHDConnect />
 
       {/* Intervention Process */}
       <InterventionProcess />
 
       {/* FAQ */}
       <AnimatedSection>
         <section className="py-20 bg-muted/30">
           <div className="container mx-auto px-4 max-w-4xl">
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Questions Fréquentes - Marseille</h2>
             <FAQAccordion items={faqItems} />
           </div>
         </section>
       </AnimatedSection>
 
       {/* Mini Testimonials */}
       <MiniTestimonials />
 
       {/* Quote Funnel */}
       <section id="quote" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Demandez votre devis gratuit à Marseille</h2>
             <p className="text-muted-foreground">Réponse sous 24h, sans engagement</p>
           </div>
           <QuoteFunnelSimple />
         </div>
       </section>
 
       <Footer />
     </div>
   );
 };
 
 export default MarseillePage;