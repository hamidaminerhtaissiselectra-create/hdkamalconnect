import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Award,
  BadgeCheck,
  Clock,
} from "lucide-react";
import { content } from "@/data/content";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Instagram,
  Linkedin,
};

const trustBadges = [
  { icon: BadgeCheck, label: "Certifié NF&A2P & APSAD", description: "Conformité Assurance & Normes 2025-2026" },
  { icon: Award, label: "10+ ans d'expertise", description: "Techniciens Certifiés & Formés IA" },
  { icon: Shield, label: "Garantie 5 ans", description: "Pièces et Main d'Œuvre Incluses" },
	  { icon: Clock, label: "Intervention Rapide", description: "Dépannage 24/7 en Île-de-France" },
];

const Footer = () => {
  const { scrollToSection } = useSmoothScroll();
  const currentYear = new Date().getFullYear();
  const contactInfo = content.company.contact;
  const socialLinks = content.company.social;
  const servicesLinks = content.services.items.map((item) => ({ title: item.title, href: item.link }));

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Trust Badges Section */}
      <div className="bg-gradient-to-r from-primary/90 to-accent/90 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-3 justify-center text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{badge.label}</p>
                    <p className="text-xs text-white/80">{badge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Expert Sécurité 2025-2026 : Prêt à protéger vos locaux ?</h3>
            <p className="text-background/70">Audit gratuit et devis personnalisé rapidement pour votre installation intelligente.</p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
              onClick={() => scrollToSection("quote", { mode: "quote" })}
            >
              Demander un devis
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">HD Connect</h3>
                <p className="text-sm text-background/60">Sécurité & Technologie</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour la protection de vos biens et de vos proches. Installation,
              maintenance et dépannage de systèmes de sécurité professionnels.
            </p>
            <div className="flex gap-3">
              {Object.entries(socialLinks).map(([key, href]) => {
                const Icon = iconMap[key.charAt(0).toUpperCase() + key.slice(1)] || Linkedin;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Zones d'Intervention</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/zones-intervention/ile-de-france" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Sécurité Île-de-France
                </Link>
              </li>
              <li>
                <Link to="/villes/paris" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Vidéosurveillance Paris
                </Link>
              </li>
              <li>
                <Link to="/zones-intervention/auvergne-rhone-alpes" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Alarme Lyon & Rhône-Alpes
                </Link>
              </li>
              <li>
                <Link to="/zones-intervention/provence-alpes-cote-d-azur" className="text-background/70 hover:text-primary text-sm transition-colors">
                  Sécurité Marseille & PACA
                </Link>
              </li>
              <li>
                <Link to="/zones-intervention" className="text-background/70 hover:text-primary text-sm transition-colors font-medium">
                  Toutes nos zones d'intervention
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <a href={`tel:${contactInfo.phoneMobile}`} className="text-background hover:text-primary transition-colors block font-medium">
                    {contactInfo.phoneMobile}
                  </a>
                  <a
                    href={`tel:${contactInfo.phoneFixe}`}
                    className="text-background/70 hover:text-primary transition-colors block text-sm"
                  >
                    {contactInfo.phoneFixe}
                  </a>
                  <span className="text-xs text-background/50">Urgences 24/7</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-background hover:text-primary transition-colors break-all text-sm"
                  >
                    {contactInfo.email}
                  </a>
                  <span className="text-xs text-background/50 block">Réponse rapidement</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-background">{contactInfo.address}</span>
                  <span className="text-xs text-background/50 block">Île-de-France & Grandes Villes</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>© {currentYear} HD Connect. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <Link to="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
              <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">Confidentialité</Link>
              <Link to="/cgv" className="hover:text-primary transition-colors">CGV</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

