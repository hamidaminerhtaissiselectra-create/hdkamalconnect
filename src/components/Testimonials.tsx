import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Quote,
  Shield,
  Award,
  BadgeCheck,
  Clock,
  Phone,
  CheckCircle,
  Users,
  Building2,
  MapPin,
  Verified,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { usePhoneCall } from "@/hooks/usePhoneCall";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const Testimonials = () => {
  const { phoneNumber, callUrl } = usePhoneCall();
  const { scrollToSection } = useSmoothScroll();

  // Témoignages enrichis avec plus de détails
  const testimonials = [
    {
      name: "Marie Lefebvre",
      role: "Gérante de boutique de prêt-à-porter",
      company: "Boutique Élégance",
      location: "Paris 11e",
      rating: 5,
      date: "Décembre 2024",
      service: "Vidéosurveillance",
      text: "Après plusieurs tentatives de vol, j'ai fait appel à HD Connect pour sécuriser ma boutique. L'équipe a installé 6 caméras HD avec vision nocturne en une journée. L'application mobile me permet de surveiller mon commerce même en vacances. Résultat : plus aucun incident depuis l'installation !",
      highlight: "ROI en 3 mois",
    },
    {
      name: "Philippe Durand",
      role: "Directeur Général",
      company: "Durand & Associés (Cabinet comptable)",
      location: "Nanterre (92)",
      rating: 5,
      date: "Novembre 2024",
      service: "Contrôle d'accès + Alarme",
      text: "HD Connect a sécurisé nos 3 sites avec un système de contrôle d'accès par badge et biométrie. La gestion centralisée nous permet de gérer les accès de 50 collaborateurs facilement. L'alarme connectée nous alerte en temps réel. Un partenaire de confiance que je recommande à tous les dirigeants.",
      highlight: "3 sites sécurisés",
    },
    {
      name: "Isabelle Martin",
      role: "Particulier - Propriétaire",
      company: "",
      location: "Versailles (78)",
      rating: 5,
      date: "Octobre 2024",
      service: "Alarme anti-intrusion",
      text: "Suite à un cambriolage traumatisant, HD Connect a su me rassurer dès le premier contact. L'audit de sécurité gratuit m'a permis de comprendre les failles de ma maison. L'alarme NF&A2P installée est reliée à un centre de télésurveillance 24/7. Je dors enfin sereinement !",
      highlight: "Télésurveillance 24/7",
    },
    {
      name: "Jean-Marc Petit",
      role: "Responsable Logistique",
      company: "Transports Express IDF",
      location: "Créteil (94)",
      rating: 5,
      date: "Septembre 2024",
      service: "Vidéosurveillance + Réseau",
      text: "Notre entrepôt de 2000m² nécessitait une sécurité renforcée. HD Connect a déployé 24 caméras 4K, refait tout le câblage réseau et installé un NVR performant. L'équipe a travaillé de nuit pour ne pas perturber notre activité. Professionnalisme exemplaire !",
      highlight: "24 caméras 4K",
    },
    {
      name: "Sophie Legrand",
      role: "Directrice",
      company: "Crèche Les Petits Anges",
      location: "Saint-Maur-des-Fossés (94)",
      rating: 5,
      date: "Août 2024",
      service: "Contrôle d'accès + Interphone",
      text: "La sécurité des enfants est notre priorité absolue. HD Connect a installé un système d'interphone vidéo avec contrôle d'accès par badge pour les parents. L'équipe a parfaitement compris nos contraintes réglementaires. Les familles sont rassurées.",
      highlight: "Conformité PMI",
    },
    {
      name: "Laurent Bernard",
      role: "Gérant",
      company: "Restaurant Le Gourmet",
      location: "Boulogne-Billancourt (92)",
      rating: 5,
      date: "Juillet 2024",
      service: "Domotique + Alarme",
      text: "HD Connect a automatisé l'éclairage et le chauffage de mon restaurant tout en installant une alarme performante. Je contrôle tout depuis mon smartphone : économies d'énergie de 30% et sérénité totale. Le meilleur investissement de l'année !",
      highlight: "-30% énergie",
    },
  ];

  // Badges de confiance enrichis
  const trustBadges = [
    { icon: Shield, label: "Certification NF&A2P", description: "Matériel certifié assurances" },
    { icon: Award, label: "10+ ans d'expertise", description: "Depuis 2014" },
    { icon: BadgeCheck, label: "Garantie 5 ans", description: "Pièces et main d'œuvre" },
    { icon: Clock, label: "Support 24/7", description: "Assistance téléphonique" },
    { icon: Verified, label: "Techniciens certifiés", description: "Formation continue" },
    { icon: ThumbsUp, label: "Satisfaction garantie", description: "Ou remboursé" },
  ];

  // Statistiques de confiance
  const stats = [
    { value: "2000+", label: "Clients satisfaits", icon: Users },
    { value: "4.9/5", label: "Note moyenne", icon: Star },
    { value: "98%", label: "Recommandation", icon: ThumbsUp },
    { value: "24h", label: "Délai intervention", icon: Clock },
  ];

  // Certifications et partenaires
  const certifications = [
    "NF Service & APSAD",
    "Certification Qualifelec",
    "Agrément Préfecture",
    "Partenaire Dahua",
    "Partenaire Hikvision",
    "Partenaire Ajax",
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary font-medium mb-4 animate-pulse">
              <Star className="w-4 h-4 fill-primary" />
              <span>Plus de 2000 clients nous font confiance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Ce Que Disent <span className="text-gradient-animated">Nos Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez les témoignages de particuliers et professionnels qui ont choisi HD Connect
            </p>
          </div>
        </AnimatedSection>

        {/* Stats de confiance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const colors = [
              "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
              "from-amber-500/20 to-orange-500/20 border-amber-500/30",
              "from-green-500/20 to-emerald-500/20 border-green-500/30",
              "from-violet-500/20 to-purple-500/20 border-violet-500/30",
            ];
            const iconColors = ["text-blue-500", "text-amber-500", "text-green-500", "text-violet-500"];
            return (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <div
                  className={`text-center p-4 rounded-2xl bg-gradient-to-br ${colors[index]} border backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
                >
                  <stat.icon className={`w-8 h-8 ${iconColors[index]} mx-auto mb-2`} />
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Trust Badges enrichis */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {trustBadges.map((badge, index) => (
            <AnimatedSection key={index} animation="scale-in" delay={index * 50}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border hover:border-primary/30 transition-colors group">
                <badge.icon className="w-5 h-5 text-primary" />
                <div>
                  <span className="text-sm font-medium text-foreground">{badge.label}</span>
                  <span className="text-xs text-muted-foreground ml-1 hidden md:inline">• {badge.description}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Témoignages en grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <Card className="relative overflow-hidden hover:shadow-xl transition-all h-full hover-lift group border-border hover:border-primary/30">
                <CardContent className="p-6">
                  {/* Badge service */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {testimonial.service}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-primary/20 mb-4" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-2">{testimonial.date}</span>
                  </div>

                  {/* Témoignage */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>

                  {/* Highlight */}
                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded bg-green-500/10 text-green-600 text-xs font-medium mb-4">
                    <CheckCircle className="w-3 h-3" />
                    {testimonial.highlight}
                  </div>

                  {/* Auteur */}
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    {testimonial.company && (
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {testimonial.company}
                      </p>
                    )}
                    <p className="text-sm text-primary flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Nos Certifications & Partenaires</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <span key={index} className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-foreground">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA de conversion */}
        <AnimatedSection animation="fade-up">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Rejoignez nos 2000+ clients satisfaits</h3>
            <p className="text-white/90 mb-6">
              Obtenez votre devis gratuit en moins de 24h. Audit de sécurité offert pour tout projet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                onClick={() => scrollToSection("quote", { mode: "quote" })}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-primary transition-all"
                asChild
              >
                <a href={callUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  {phoneNumber}
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
