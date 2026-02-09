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
 import QuoteFunnelSimple from "@/components/QuoteFunnelSimple";
 import {
   MapPin,
   Phone,
   ArrowRight,
   Camera,
   ShieldAlert,
   Lock,
   Home,
   Sparkles,
   Building2,
   Users,
   Landmark,
   CheckCircle,
   Shield,
 } from "lucide-react";
 import { getMarseilleArrondissementBySlug, marseilleArrondissements } from "@/data/marseilleArrondissements";
 import { usePhoneCall } from "@/hooks/usePhoneCall";
 import { useSmoothScroll } from "@/hooks/useSmoothScroll";
 
 const MarseilleArrondissementPage = () => {
   const { arrondissementSlug } = useParams<{ arrondissementSlug: string }>();
   const { phoneNumber, callUrl } = usePhoneCall();
   const { scrollToSection } = useSmoothScroll();
   
   if (!arrondissementSlug) {
     return <Navigate to="/villes/marseille" replace />;
   }
   
   const arrondissement = getMarseilleArrondissementBySlug(arrondissementSlug);
   
   if (!arrondissement) {
     return <Navigate to="/villes/marseille" replace />;
   }
 
   useSEO({
     title: `Sécurité ${arrondissement.name} | Vidéosurveillance & Alarme | HD Connect`,
     description: arrondissement.description,
     keywords: `sécurité ${arrondissement.name}, vidéosurveillance Marseille ${arrondissement.number}e, alarme ${arrondissement.quartiers[0]}, HD Connect Marseille`,
     canonicalUrl: `https://hdconnect.fr/marseille/${arrondissement.slug}`,
   });
 
   const breadcrumbItems = [
     { name: "Zones d'intervention", url: "/zones-intervention" },
     { name: "Marseille", url: "/villes/marseille" },
     { name: arrondissement.name, url: `/marseille/${arrondissement.slug}` },
   ];
 
   const services = [
     { icon: Camera, title: "Vidéosurveillance", link: `/villes/marseille/videosurveillance` },
     { icon: ShieldAlert, title: "Alarmes", link: `/villes/marseille/alarme` },
     { icon: Lock, title: "Contrôle d'accès", link: `/villes/marseille/controle-acces` },
     { icon: Home, title: "Domotique", link: `/villes/marseille/domotique` },
   ];
 
   const faqItems = [
     {
       question: `Intervenez-vous rapidement dans le ${arrondissement.number}e arrondissement ?`,
       answer: `Oui, HD Connect intervient rapidement dans le ${arrondissement.number}e arrondissement de Marseille, notamment à ${arrondissement.quartiers.slice(0, 3).join(', ')}. Pour les urgences, intervention possible le jour même.`,
     },
     {
       question: `Quelles solutions pour les commerces du ${arrondissement.number}e ?`,
       answer: `Nous proposons des solutions adaptées à l'activité commerciale du ${arrondissement.number}e (${arrondissement.economicActivity}) : vidéosurveillance HD, alarmes anti-intrusion, contrôle d'accès.`,
     },
     {
       question: `Comment protéger mon appartement dans le ${arrondissement.number}e ?`,
       answer: `Pour les résidences du ${arrondissement.number}e, nous installons des systèmes discrets : alarmes connectées, caméras compactes, interphones vidéo. Solutions adaptées aux copropriétés.`,
     },
   ];
 
   const neighbors = marseilleArrondissements.filter(a => 
     Math.abs(a.number - arrondissement.number) <= 2 && a.number !== arrondissement.number
   ).slice(0, 4);
 
   const jsonLd = {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": `HD Connect - Sécurité ${arrondissement.name}`,
     "url": `https://hdconnect.fr/marseille/${arrondissement.slug}`,
     "telephone": "+33 6 27 13 53 04",
     "address": {
       "@type": "PostalAddress",
       "addressLocality": `Marseille ${arrondissement.number}e`,
       "addressRegion": "Provence-Alpes-Côte d'Azur",
       "addressCountry": "FR"
     },
     "areaServed": { "@type": "Place", "name": arrondissement.name },
   };
 
   return (
     <div className="min-h-screen bg-background">
       <Header />
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
 
       {/* Hero */}
       <section className="relative pt-24 pb-16 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-background" />
         <div className="container mx-auto px-4 relative z-10">
           <Breadcrumbs items={breadcrumbItems} />
           
           <div className="max-w-4xl mt-8">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 mb-6"
             >
               <MapPin className="w-4 h-4" />
               <span>Marseille {arrondissement.number}e arrondissement</span>
               {arrondissement.priority === 'critique' && (
                 <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-500">Zone prioritaire</span>
               )}
             </motion.div>
 
             <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6"
             >
               Expert Sécurité{" "}
               <span className="text-gradient-animated">{arrondissement.name}</span>
             </motion.h1>
 
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-lg text-muted-foreground mb-8 max-w-2xl"
             >
               {arrondissement.description}
             </motion.p>
 
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col sm:flex-row gap-4"
             >
               <Button 
                 onClick={() => scrollToSection("quote", { mode: "quote" })} 
                 size="lg" 
                 className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
               >
                 <Sparkles className="mr-2 w-5 h-5" />
                 Devis gratuit
                 <ArrowRight className="ml-2 w-5 h-5" />
               </Button>
               <Button size="lg" variant="outline" asChild>
                 <a href={callUrl}>
                   <Phone className="mr-2 w-5 h-5 text-accent" />
                   {phoneNumber}
                 </a>
               </Button>
             </motion.div>
           </div>
         </div>
       </section>
 
       {/* Info Cards */}
       <AnimatedSection>
         <section className="py-12 bg-muted/30">
           <div className="container mx-auto px-4">
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
               <Card>
                 <CardContent className="p-5 flex items-center gap-4">
                   <Users className="w-10 h-10 text-primary" />
                   <div>
                     <div className="text-2xl font-bold">{arrondissement.population}</div>
                     <div className="text-sm text-muted-foreground">Habitants</div>
                   </div>
                 </CardContent>
               </Card>
               <Card>
                 <CardContent className="p-5 flex items-center gap-4">
                   <Building2 className="w-10 h-10 text-primary" />
                   <div>
                     <div className="text-2xl font-bold">{arrondissement.quartiers.length}</div>
                     <div className="text-sm text-muted-foreground">Quartiers</div>
                   </div>
                 </CardContent>
               </Card>
               <Card>
                 <CardContent className="p-5 flex items-center gap-4">
                   <Landmark className="w-10 h-10 text-primary" />
                   <div>
                     <div className="text-2xl font-bold">{arrondissement.landmarks.length}</div>
                     <div className="text-sm text-muted-foreground">Sites majeurs</div>
                   </div>
                 </CardContent>
               </Card>
               <Card className={arrondissement.priority === 'critique' ? 'border-red-500/50' : ''}>
                 <CardContent className="p-5 flex items-center gap-4">
                   <Shield className={`w-10 h-10 ${arrondissement.priority === 'critique' ? 'text-red-500' : 'text-primary'}`} />
                   <div>
                     <div className="text-lg font-bold capitalize">{arrondissement.priority}</div>
                     <div className="text-sm text-muted-foreground">Niveau priorité</div>
                   </div>
                 </CardContent>
               </Card>
             </div>
           </div>
         </section>
       </AnimatedSection>
 
       {/* Quartiers */}
       <AnimatedSection>
         <section className="py-16">
           <div className="container mx-auto px-4">
             <h2 className="text-2xl md:text-3xl font-bold mb-8">Quartiers couverts dans le {arrondissement.number}e</h2>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
               {arrondissement.quartiers.map(quartier => (
                 <Card key={quartier} className="hover:shadow-md transition-shadow">
                   <CardContent className="p-4 flex items-center gap-3">
                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                     <span className="font-medium">{quartier}</span>
                   </CardContent>
                 </Card>
               ))}
             </div>
 
             <h3 className="text-xl font-semibold mb-4">Points d'intérêt majeurs</h3>
             <div className="flex flex-wrap gap-3">
               {arrondissement.landmarks.map(landmark => (
                 <span key={landmark} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                   {landmark}
                 </span>
               ))}
             </div>
           </div>
         </section>
       </AnimatedSection>
 
       {/* Services */}
       <AnimatedSection>
         <section className="py-16 bg-muted/30">
           <div className="container mx-auto px-4">
             <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nos services dans le {arrondissement.number}e</h2>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
               {services.map((service) => (
                 <Link key={service.title} to={service.link}>
                   <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                     <CardContent className="p-6 text-center">
                       <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                       <h3 className="font-semibold">{service.title}</h3>
                     </CardContent>
                   </Card>
                 </Link>
               ))}
             </div>
           </div>
         </section>
       </AnimatedSection>
 
       {/* Arrondissements voisins */}
       <AnimatedSection>
         <section className="py-16">
           <div className="container mx-auto px-4">
             <h2 className="text-2xl md:text-3xl font-bold mb-8">Arrondissements voisins</h2>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
               {neighbors.map(neighbor => (
                 <Link key={neighbor.slug} to={`/marseille/${neighbor.slug}`}>
                   <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
                     <CardContent className="p-5">
                       <h3 className="font-semibold mb-1">{neighbor.name}</h3>
                       <p className="text-sm text-muted-foreground">{neighbor.population} habitants</p>
                     </CardContent>
                   </Card>
                 </Link>
               ))}
             </div>
             <div className="text-center mt-8">
               <Button variant="outline" asChild>
                 <Link to="/villes/marseille">
                   Voir tous les arrondissements de Marseille
                   <ArrowRight className="ml-2 w-4 h-4" />
                 </Link>
               </Button>
             </div>
           </div>
         </section>
       </AnimatedSection>
 
       {/* FAQ */}
       <AnimatedSection>
         <section className="py-16 bg-muted/30">
           <div className="container mx-auto px-4 max-w-3xl">
             <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Questions fréquentes - {arrondissement.name}</h2>
             <FAQAccordion items={faqItems} />
           </div>
         </section>
       </AnimatedSection>
 
       {/* Quote */}
       <section id="quote" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-2xl md:text-3xl font-bold mb-4">Demandez votre devis gratuit</h2>
             <p className="text-muted-foreground">Intervention dans le {arrondissement.number}e arrondissement de Marseille</p>
           </div>
           <QuoteFunnelSimple />
         </div>
       </section>
 
       <Footer />
     </div>
   );
 };
 
 export default MarseilleArrondissementPage;