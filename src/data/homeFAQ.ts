// FAQ data for the homepage - optimized for "People Also Ask" and E-E-A-T
// Ces questions sont choisies pour cibler les recherches les plus fréquentes

import { FAQItem } from "@/components/FAQAccordion";

export const homeFAQItems: FAQItem[] = [
  {
    question: "Combien coûte l'installation d'un système de vidéosurveillance ?",
    answer: "Le coût d'installation d'un système de vidéosurveillance varie entre 800€ et 3500€ selon le nombre de caméras, la qualité (HD ou 4K), et les fonctionnalités (vision nocturne, détection IA). HD Connect, expert certifié depuis 2015, propose un devis gratuit personnalisé sous 24h avec des solutions adaptées à tous les budgets. Nos techniciens certifiés NF&A2P assurent une installation garantie 5 ans."
  },
  {
    question: "Quelle est la différence entre une alarme certifiée NF&A2P et une alarme standard ?",
    answer: "Une alarme certifiée NF&A2P a été testée et validée par le CNPP (Centre National de Prévention et de Protection). Elle offre une fiabilité supérieure avec une résistance prouvée aux tentatives de sabotage. Les assureurs reconnaissent cette certification et accordent des réductions de primes jusqu'à 10%. HD Connect installe exclusivement des systèmes certifiés Grade 2 et Grade 3 pour une protection optimale."
  },
  {
    question: "HD Connect intervient-il partout en France ?",
    answer: "Oui, HD Connect intervient sur toute la France métropolitaine avec plus de 125 villes couvertes. En Île-de-France, notre équipe de 15 techniciens assure une intervention sous 4h pour les urgences. Pour les installations programmées, le délai moyen est de 48h. Depuis 2015, nous avons réalisé plus de 5000 installations avec un taux de satisfaction client de 98%."
  },
  {
    question: "Peut-on surveiller ses caméras à distance depuis un smartphone ?",
    answer: "Absolument ! Tous les systèmes de vidéosurveillance installés par HD Connect incluent un accès à distance via application mobile (iOS et Android). Vous pouvez visualiser vos caméras en direct, recevoir des alertes de détection de mouvement avec analyse IA, et consulter les enregistrements où que vous soyez. Le cloud sécurisé garantit la confidentialité de vos données conformément au RGPD."
  },
  {
    question: "Quelle est la durée de garantie des installations HD Connect ?",
    answer: "HD Connect garantit ses installations pendant 5 ans pièces et main d'œuvre, soit 3 ans de plus que la garantie légale. Cette garantie couvre les défauts de fabrication, les problèmes d'installation et les mises à jour firmware. Nous proposons également des contrats de maintenance préventive (à partir de 199€/an) pour prolonger la durée de vie de vos équipements et maintenir leurs performances optimales."
  },
  {
    question: "La domotique permet-elle vraiment de faire des économies d'énergie ?",
    answer: "Oui, une installation domotique bien configurée peut réduire votre facture énergétique de 15% à 30% selon l'ADEME. Les thermostats intelligents adaptent le chauffage à votre présence, l'éclairage automatique évite les oublis, et la gestion des volets optimise les apports solaires. HD Connect intègre ces solutions avec votre système de sécurité pour une maison connectée complète. Le retour sur investissement est généralement atteint en 2 à 4 ans."
  },
  {
    question: "Faut-il une autorisation pour installer des caméras de surveillance ?",
    answer: "Pour une installation privée (maison, appartement), aucune autorisation n'est requise si les caméras filment uniquement votre propriété. Pour les commerces et lieux recevant du public, une déclaration préalable en préfecture est obligatoire (formulaire Cerfa n°13806). HD Connect, en tant qu'installateur certifié, vous accompagne dans ces démarches administratives et vous fournit la documentation RGPD complète (panneau d'information, registre des traitements)."
  },
  {
    question: "Quelle est la différence entre contrôle d'accès par badge et par biométrie ?",
    answer: "Le badge RFID est économique (à partir de 500€/porte), pratique pour les entreprises avec une gestion centralisée des droits d'accès. La biométrie (empreinte digitale ou reconnaissance faciale) offre une sécurité maximale car non transférable, idéale pour les zones sensibles (data centers, laboratoires). HD Connect peut combiner les deux technologies pour un système hybride adapté à vos niveaux de sécurité requis. Notre expertise depuis 2015 nous permet de vous conseiller la solution optimale."
  }
];

// JSON-LD FAQPage schema for Google rich results
export const getHomeFAQJsonLd = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFAQItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
