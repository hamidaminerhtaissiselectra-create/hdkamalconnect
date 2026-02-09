import { Shield, CheckCircle, MapPin, Award, Lock, Zap, Users, Building, Home, Factory, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * Blocs SEO pour la page d'accueil
 * Objectif: 1000-1200 mots au total sur la page d'accueil
 */

// Bloc 1: Mission HD Connect (Answer-First optimisé)
export const MissionBlock = () => (
  <section className="section-padding bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="badge-primary mb-6 mx-auto">
          <Shield className="w-4 h-4" />
          <span>Notre Mission</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
          HD Connect : Votre Partenaire Sécurité de Confiance
        </h2>
        <div className="prose prose-lg max-w-none text-muted-foreground text-center">
          {/* Answer-First: première phrase autonome et citable */}
          <p>
            <strong>HD Connect est le spécialiste français de l'installation de systèmes de sécurité professionnels depuis plus de 10 ans.</strong> Nous accompagnons les particuliers et les professionnels dans la protection de leurs biens avec des équipements certifiés NF&A2P et des techniciens formés en continu.
          </p>
          {/* Preuves d'autorité intégrées naturellement */}
          <p>
            Notre expertise repose sur trois piliers : des <strong>équipements de marques reconnues</strong> (Hikvision, Ajax, Honeywell), une <strong>installation conforme aux normes</strong> en vigueur, et un <strong>service après-vente disponible 24h/24</strong>. Plus de 500 clients nous font confiance en Île-de-France et dans les grandes métropoles françaises.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Bloc 2: Nos Solutions de Sécurité (Answer-First optimisé)
export const SolutionsBlock = () => {
  const solutions = [
    { icon: Lock, title: "Protection contre les intrusions", description: "Alarmes certifiées NF&A2P et vidéosurveillance 4K pour détecter et dissuader toute tentative d'effraction." },
    { icon: Zap, title: "Surveillance à distance 24/7", description: "Accès sécurisé à vos caméras depuis votre smartphone, où que vous soyez dans le monde." },
    { icon: Users, title: "Gestion des accès", description: "Badges RFID, biométrie et digicodes pour contrôler qui entre et sort de vos locaux." },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Des Solutions de Sécurité Complètes et Intégrées
          </h2>
          {/* Answer-First: phrase autonome */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <strong>HD Connect propose 9 services de sécurité électronique</strong> : vidéosurveillance, alarme, contrôle d'accès, domotique, réseau, maintenance, antennes, portails et location de matériel. De l'étude initiale à la maintenance préventive.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="text-center p-6 rounded-2xl bg-card border hover-lift">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Bloc 3: Expertise et Conformité (Answer-First + preuves d'autorité)
export const ExpertiseBlock = () => {
  const certifications = [
    { label: "Techniciens certifiés", value: "100%" },
    { label: "Conformité RGPD/CNIL", value: "Garantie" },
    { label: "Intervention urgence", value: "4h" },
    { label: "Satisfaction client", value: "98%" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Expertise Technique et Conformité Réglementaire
            </h2>
            {/* Answer-First + preuves intégrées naturellement */}
            <p className="text-muted-foreground">
              <strong>Nos installations sont réalisées par des techniciens certifiés</strong>, conformément aux normes NF&A2P et APSAD P3. Tous nos systèmes respectent les réglementations CNIL/RGPD. Nos équipes sont formées en continu par Hikvision, Dahua, Axis, Ajax et Honeywell – les références du secteur.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-card border">
                <div className="text-2xl font-bold text-primary mb-1">{cert.value}</div>
                <div className="text-sm text-muted-foreground">{cert.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Bloc 4: Couverture Nationale (Answer-First)
export const CoverageBlock = () => {
  const zones = [
    { name: "Île-de-France", cities: "Paris, Versailles, Boulogne, Saint-Denis" },
    { name: "Nord", cities: "Lille, Valenciennes, Dunkerque" },
    { name: "Sud", cities: "Marseille, Nice, Toulouse, Montpellier" },
    { name: "Est", cities: "Lyon, Strasbourg, Grenoble, Dijon" },
    { name: "Ouest", cities: "Nantes, Bordeaux, Rennes, Angers" },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Intervention sur Toute la France
          </h2>
          {/* Answer-First: phrase autonome */}
          <p className="text-muted-foreground mb-8">
            <strong>HD Connect intervient dans toutes les grandes zones urbaines de France</strong> pour l'installation, le dépannage et la maintenance de vos systèmes de sécurité. Notre réseau de techniciens certifiés garantit une intervention rapide sous 4 heures en Île-de-France.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {zones.map((zone, index) => (
              <div key={index} className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {zone.name}
              </div>
            ))}
          </div>
          <Link to="/zones-intervention">
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Voir nos zones d'intervention détaillées
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Bloc Clients (Answer-First + preuves)
export const ClientTypesBlock = () => {
  const clientTypes = [
    {
      icon: Home,
      title: "Particuliers",
      // Answer-First
      description: "Les systèmes de sécurité HD Connect protègent efficacement maisons, appartements et résidences secondaires avec des équipements adaptés à votre budget.",
      features: ["Vidéosurveillance 4K avec accès mobile", "Alarme anti-intrusion certifiée", "Domotique compatible Google Home/Alexa"],
    },
    {
      icon: Building,
      title: "Professionnels",
      // Answer-First
      description: "Les solutions HD Connect sécurisent bureaux, commerces et sites industriels avec des systèmes conformes aux réglementations RGPD et assurances.",
      features: ["Contrôle d'accès multi-sites centralisé", "Télésurveillance 24/7 avec levée de doute", "Conformité RGPD et NF&A2P garantie"],
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Solutions pour Particuliers et Professionnels
          </h2>
          {/* Answer-First */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <strong>HD Connect installe des systèmes de sécurité pour tous les profils</strong> : particuliers souhaitant protéger leur famille et professionnels devant sécuriser leurs locaux conformément aux normes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clientTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <div key={index} className="p-8 rounded-2xl bg-card border hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{type.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
