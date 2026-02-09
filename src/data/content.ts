// Fichier de centralisation du contenu statique pour HD Connect

export const content = {
  // --- Informations Générales ---
  company: {
    name: "HD Connect",
    slogan: "Votre sécurité, notre expertise.",
    // Answer-First: phrase autonome citable par IA
    answerFirst: "HD Connect est le spécialiste français de l'installation de systèmes de sécurité professionnels : vidéosurveillance 4K, alarmes certifiées NF&A2P et contrôle d'accès biométrique pour particuliers et entreprises.",
    contact: {
      email: "kamal@hdconnect.fr",
      phoneMobile: "+33 6 27 13 53 04",
      phoneFixe: "+33 1 83 64 36 40",
      address: "Paris, France",
    },
    social: {
      linkedin: "https://www.linkedin.com/company/hdconnect-securite",
      facebook: "https://www.facebook.com/hdconnectsecurite",
      instagram: "https://www.instagram.com/hdconnect_securite",
    },
  },

  // --- Navigation ---
  nav: [
    { label: "Services", href: "#services", scrollTo: "services" },
    { label: "À Propos", href: "#about", scrollTo: "about" },
    { label: "Devis", href: "#quote", scrollTo: "quote", mode: "quote" as const },
    { label: "Contact", href: "#contact", scrollTo: "contact" },
  ],

  // --- Section Hero ---
  hero: {
    // Answer-First: première phrase optimisée IA/vocal
    title: "HD Connect installe des systèmes de sécurité professionnels pour protéger efficacement maisons et entreprises",
    subtitle: "Vidéosurveillance IA 4K, Alarmes certifiées NF&A2P et Contrôle d'Accès Biométrique. Installation par techniciens certifiés, intervention urgence 4h, garantie 5 ans. Plus de 500 clients satisfaits en Île-de-France.",
    ctaQuote: "Demander un Devis Gratuit",
    ctaContact: "Contactez-nous",
  },

  // --- Section Services ---
  services: {
    title: "Nos Solutions de Sécurité Complètes",
    // Answer-First: phrase citable
    subtitle: "HD Connect propose 9 services de sécurité électronique : vidéosurveillance, alarme, contrôle d'accès, domotique, réseau, maintenance, antennes, portails et location de matériel.",
    items: [
      {
        title: "Vidéosurveillance",
        // Answer-First: première phrase autonome
        description: "L'installation de caméras de vidéosurveillance permet de dissuader les intrusions et de surveiller vos biens 24h/24. HD Connect installe des systèmes 4K avec accès mobile, enregistrement NVR et analyse vidéo IA.",
        icon: "Camera",
        link: "/services/videosurveillance",
      },
      {
        title: "Systèmes d'Alarme",
        // Answer-First
        description: "Une alarme anti-intrusion certifiée NF&A2P protège efficacement maison et entreprise contre les cambriolages. HD Connect installe des systèmes connectés avec détecteurs, sirènes et télésurveillance 24/7.",
        icon: "Shield",
        link: "/services/alarme",
      },
      {
        title: "Contrôle d'Accès",
        // Answer-First
        description: "Le contrôle d'accès sécurise les entrées de vos locaux avec badges, biométrie ou digicodes. HD Connect installe des systèmes de gestion centralisée pour bureaux, immeubles et sites industriels.",
        icon: "Lock",
        link: "/services/controle-acces",
      },
      {
        title: "Maintenance & Dépannage",
        // Answer-First
        description: "La maintenance préventive garantit le bon fonctionnement de vos systèmes de sécurité. HD Connect propose des contrats annuels et un dépannage urgence 4h en Île-de-France.",
        icon: "Wrench",
        link: "/services/maintenance",
      },
      {
        title: "Réseau & Câblage",
        // Answer-First
        description: "Un réseau informatique professionnel garantit la fiabilité de vos systèmes connectés. HD Connect installe le câblage structuré Cat 6/7, la fibre optique et le WiFi entreprise.",
        icon: "Wifi",
        link: "/services/reseau",
      },
      {
        title: "Domotique Sécurité",
        // Answer-First
        description: "La domotique permet de centraliser et automatiser la gestion de votre sécurité. HD Connect intègre alarme, caméras et éclairage dans une application unique compatible Google Home et Alexa.",
        icon: "Home",
        link: "/services/domotique",
      },
      {
        title: "Antennes & Satellite",
        // Answer-First
        description: "L'installation d'antennes TNT et paraboles satellite assure une réception TV optimale. HD Connect intervient pour particuliers, copropriétés et professionnels avec garantie de signal.",
        icon: "Radio",
        link: "/services/antenne-satellite",
      },
      {
        title: "Portails & Parking",
        // Answer-First
        description: "La motorisation de portails et barrières automatise et sécurise vos accès extérieurs. HD Connect installe portails coulissants, portes de garage et systèmes d'interphonie pour résidences et entreprises.",
        icon: "DoorOpen",
        link: "/services/portails-parking",
      },
      {
        title: "Location Matériel",
        // Answer-First
        description: "La location de matériel de sécurité répond aux besoins temporaires : chantiers, événements, surveillance provisoire. HD Connect propose caméras solaires, alarmes portables et kits complets avec installation.",
        icon: "Package",
        link: "/services/location",
      },
    ],
  },

  // --- Section À Propos ---
  about: {
    title: "HD Connect : Expert Sécurité 2025-2026 & Technologies IA",
    content: [
      "Fort d'une décennie d'expérience, HD Connect est votre partenaire expert en sécurité électronique 2025-2026. Nous concevons des solutions sur mesure intégrant l'Intelligence Artificielle pour une protection proactive des particuliers et des professionnels. Notre mission : allier innovation technologique et fiabilité opérationnelle.",
      "Nos techniciens certifiés assurent l'installation, la maintenance et le dépannage express de systèmes de vidéosurveillance IA, d'alarmes NF&A2P et de contrôle d'accès biométrique. Basés en Île-de-France, nous garantissons une intervention rapide pour les urgences à Paris et dans les grandes métropoles françaises.",
    ],
    stats: [
      { value: "10+", label: "Années d'Expérience" },
      { value: "500+", label: "Clients Satisfaits" },
      { value: "24/7", label: "Support Technique" },
    ],
  },

  // --- Section Contact ---
  contact: {
    title: "Contactez-nous pour un Devis Personnalisé",
    subtitle: "Notre équipe est à votre écoute pour répondre à vos questions et vous conseiller sur la meilleure solution de sécurité.",
    formTitle: "Formulaire de Contact Rapide",
  },

  // --- Pages de Services Détaillées (enrichies SEO) ---
  pageServices: {
    videosurveillance: {
      title: "Vidéosurveillance Professionnelle",
      description: "La vidéosurveillance est la première ligne de défense. Nous concevons des systèmes complets, de la sélection des caméras 4K à l'installation des enregistreurs (NVR/DVR) et à la configuration d'un accès sécurisé via mobile. Nos solutions incluent l'analyse vidéo intelligente (détection de mouvement, franchissement de ligne) pour une alerte proactive et une preuve irréfutable en cas d'incident.",
      features: [
        "Caméras IP et 4K",
        "Enregistrement NVR/DVR sécurisé",
        "Accès et consultation à distance (mobile/PC)",
        "Analyse vidéo intelligente (détection de mouvement, reconnaissance faciale)",
      ],
      faq: [
        { question: "Quelle est la durée de garantie de vos systèmes de vidéosurveillance ?", answer: "Nous offrons une garantie constructeur de 2 à 5 ans selon les équipements, extensible via nos contrats de maintenance. L'installation est garantie 1 an pièces et main d'œuvre." },
        { question: "Puis-je consulter les images de mes caméras à distance ?", answer: "Oui, tous nos systèmes sont configurés pour un accès sécurisé via application mobile (iOS/Android) ou navigateur web. Vous pouvez visionner le direct, les enregistrements et recevoir des alertes push." },
        { question: "Vos caméras fonctionnent-elles la nuit en extérieur ?", answer: "Absolument. Nos caméras sont équipées de vision nocturne infrarouge (portée jusqu'à 50m) ou de technologie ColorVu/Starlight pour des images en couleur même dans l'obscurité totale." },
        { question: "Combien de temps les enregistrements sont-ils conservés ?", answer: "La durée dépend de la capacité de stockage choisie. En moyenne, nos systèmes conservent 15 à 30 jours d'enregistrement en continu. Pour des besoins spécifiques (obligations légales), nous dimensionnons le stockage en conséquence." },
        { question: "Mes caméras sont-elles conformes au RGPD ?", answer: "Oui, nous vous accompagnons dans la mise en conformité : panneau d'information, délais de conservation, registre des traitements. Pour les professionnels, nous fournissons une documentation complète." },
        { question: "Quelle différence entre caméra IP et analogique ?", answer: "Les caméras IP offrent une qualité d'image supérieure (jusqu'à 8MP/4K), une installation simplifiée via câble réseau, et des fonctionnalités avancées (analyse vidéo, audio bidirectionnel). Nous recommandons l'IP pour toute nouvelle installation." },
        { question: "Peut-on intégrer mes caméras existantes ?", answer: "Dans la plupart des cas, oui. Nous réalisons un audit de votre installation existante et proposons des solutions d'intégration ou de mise à niveau progressive pour optimiser votre investissement." },
      ],
    },
    alarme: {
      title: "Systèmes d'Alarme Anti-Intrusion",
      description: "Sécurisez votre espace avec des alarmes certifiées. Nous installons des systèmes anti-intrusion filaires ou sans fil, avec des détecteurs de mouvement, de bris de glace et d'ouverture. Nos alarmes sont connectées et peuvent être reliées à un centre de télésurveillance 24/7 pour une intervention immédiate, garantissant une protection maximale contre les cambriolages.",
      features: [
        "Alarmes sans fil et filaires",
        "Détecteurs de mouvement et d'ouverture",
        "Sirènes intérieures et extérieures puissantes",
        "Connexion à un centre de télésurveillance (optionnel)",
      ],
      faq: [
        { question: "Mon alarme peut-elle être reliée à mon assurance ?", answer: "Oui, nos systèmes certifiés NF&A2P sont reconnus par les assureurs et peuvent vous faire bénéficier d'une réduction de prime allant jusqu'à 10%. Nous fournissons une attestation d'installation conforme." },
        { question: "Comment éviter les fausses alarmes ?", answer: "Nos détecteurs de nouvelle génération analysent le type de mouvement (PIR double technologie) et éliminent 99% des fausses alarmes. Nous configurons également des zones d'exclusion pour les animaux domestiques." },
        { question: "L'alarme fonctionne-t-elle en cas de coupure de courant ?", answer: "Oui, toutes nos centrales intègrent une batterie de secours permettant un fonctionnement de 12 à 48h en autonomie complète, avec transmission GSM en cas de coupure de ligne." },
        { question: "Puis-je armer/désarmer mon alarme à distance ?", answer: "Absolument, via l'application mobile vous contrôlez votre alarme de n'importe où, recevez l'historique de tous les événements et pouvez créer des modes personnalisés (nuit, absence, partiel)." },
        { question: "Quelle est la différence entre alarme Grade 2 et Grade 3 ?", answer: "Le Grade 2 (recommandé pour particuliers et commerces) offre une protection contre des intrus avec connaissances limitées. Le Grade 3 (sites sensibles) protège contre des intrus expérimentés avec équipement. Nous vous conseillons selon votre profil de risque." },
        { question: "La télésurveillance est-elle obligatoire ?", answer: "Non, mais fortement recommandée pour les professionnels. Elle permet une levée de doute immédiate et l'appel des forces de l'ordre en cas d'intrusion confirmée. Nous proposons des abonnements adaptés à tous les budgets." },
        { question: "Combien coûte l'installation d'une alarme ?", answer: "Le coût dépend de la surface et du niveau de protection souhaité. Pour une maison standard, comptez entre 1 500€ et 3 500€ installation comprise. Nous proposons également la location avec option d'achat." },
      ],
    },
    controleacces: {
      title: "Gestion et Contrôle d'Accès",
      description: "Gérez les flux de personnes avec précision. Nos solutions de contrôle d'accès vont des interphones vidéo aux systèmes biométriques de pointe. Que ce soit pour un immeuble résidentiel ou un site industriel, nous assurons l'installation de digicodes, lecteurs de badges et systèmes de gestion centralisée pour un contrôle total sur les accès.",
      features: [
        "Interphones et vidéophones",
        "Lecteurs de badges et de cartes",
        "Digicodes et claviers",
        "Solutions biométriques (empreinte, reconnaissance faciale)",
      ],
      faq: [
        { question: "Puis-je gérer les accès temporaires (visiteurs, prestataires) ?", answer: "Oui, vous pouvez créer des badges temporaires avec date de validité limitée, des codes PIN à usage unique, ou envoyer des QR codes par email via l'interface web ou mobile." },
        { question: "Le système peut-il gérer plusieurs bâtiments ?", answer: "Absolument, notre solution centralise la gestion de tous vos sites avec droits d'accès différenciés par bâtiment, étage, zone ou horaire. Idéal pour les entreprises multi-sites." },
        { question: "Que se passe-t-il en cas de coupure internet ?", answer: "Le système fonctionne en mode autonome. Les contrôleurs stockent les droits localement et synchronisent automatiquement au retour de la connexion. Les accès restent opérationnels." },
        { question: "Puis-je intégrer la pointeuse horaire au contrôle d'accès ?", answer: "Oui, nos systèmes incluent la gestion du temps de travail avec exports Excel/PDF pour la paie, conformité légale et reporting RH. Une seule badgeuse pour tout gérer." },
        { question: "La biométrie est-elle autorisée en France ?", answer: "Oui, sous certaines conditions (consentement, finalité légitime, proportionnalité). Pour les entreprises, la biométrie est autorisée pour les zones sensibles. Nous vous accompagnons dans la mise en conformité RGPD." },
        { question: "Peut-on ouvrir la porte à distance depuis son smartphone ?", answer: "Oui, avec nos solutions connectées vous pouvez ouvrir la porte, le portail ou la barrière à distance, visualiser qui sonne via vidéophone IP et garder un historique de tous les accès." },
        { question: "Combien de badges/utilisateurs le système peut-il gérer ?", answer: "Nos systèmes gèrent de 50 à 100 000 utilisateurs selon les modèles. Pour les PME, les solutions standard suffisent. Pour les grands comptes, nous proposons des architectures évolutives." },
      ],
    },
    maintenance: {
      title: "Maintenance et Dépannage Express",
      description: "La maintenance est essentielle pour la pérennité de votre investissement. Nous proposons des contrats de maintenance préventive annuels pour vérifier, nettoyer et mettre à jour vos systèmes. En cas de panne, notre service de dépannage express intervient rapidement en Île-de-France pour minimiser les temps d'arrêt de votre sécurité.",
      features: [
        "Contrats de maintenance annuels",
        "Intervention d'urgence 24/7",
        "Mise à jour et optimisation des systèmes existants",
        "Diagnostic complet et réparation",
      ],
      faq: [
        { question: "La maintenance est-elle obligatoire pour mon système de sécurité ?", answer: "Pour les ERP (Établissements Recevant du Public) et certaines installations professionnelles, oui légalement. Pour les particuliers, elle est fortement recommandée pour maintenir la garantie et les performances optimales." },
        { question: "Que comprend une visite de maintenance préventive ?", answer: "Test complet de tous les équipements (caméras, détecteurs, centrale), nettoyage des optiques, vérification des connexions et câblages, mise à jour des firmwares, test de la batterie de secours et rapport détaillé." },
        { question: "Puis-je souscrire un contrat pour une installation réalisée par un autre installateur ?", answer: "Oui, après un audit technique initial (gratuit) pour évaluer l'état de votre système et définir le contrat adapté. Nous sommes compatibles avec la plupart des marques du marché." },
        { question: "Que se passe-t-il en cas de panne hors heures ouvrées ?", answer: "Les contrats Premium et Enterprise incluent une astreinte 24/7 avec intervention rapide même les nuits, week-ends et jours fériés en Île-de-France. Pour la province, intervention sous 8h à 24h." },
        { question: "Les pièces de rechange sont-elles incluses dans le contrat ?", answer: "Selon la formule choisie : le contrat Essentiel inclut la main d'œuvre uniquement, le Premium inclut les pièces d'usure courante, et l'Enterprise inclut toutes les pièces avec stock dédié." },
        { question: "Proposez-vous la télémaintenance ?", answer: "Oui, pour les systèmes connectés nous pouvons diagnostiquer à distance de nombreuses pannes, effectuer des mises à jour et régler des problèmes de configuration sans déplacement, réduisant les délais d'intervention." },
        { question: "Comment est calculé le coût du contrat de maintenance ?", answer: "Le tarif dépend du nombre d'équipements, de la complexité du système et du niveau de service souhaité (délai d'intervention, disponibilité du support). Nous proposons des devis sur mesure après audit." },
      ],
    },
    reseau: {
      title: "Infrastructure Réseau et Câblage",
      description: "La performance de votre sécurité dépend de la qualité de votre réseau. Nous sommes experts en câblage structuré (Cat 6/7) et en installation de fibre optique. Nous configurons vos baies de brassage, switchs et routeurs pour garantir une bande passante optimale et une fiabilité maximale pour vos caméras IP et systèmes connectés.",
      features: [
        "Installation de baies de brassage",
        "Câblage RJ45 Catégorie 6/7",
        "Configuration de switchs et routeurs",
        "Audit et certification de réseau",
      ],
      faq: [
        { question: "Combien de bornes WiFi sont nécessaires pour mes locaux ?", answer: "En règle générale, 1 borne WiFi 6 couvre environ 100-150m² selon les obstacles (murs, cloisons). Pour un bureau de 300m², comptez 2-3 bornes avec système mesh pour un roaming transparent entre zones." },
        { question: "Puis-je avoir plusieurs réseaux WiFi séparés (visiteurs, employés) ?", answer: "Oui, nous configurons des SSID multiples avec isolation réseau et niveaux de sécurité différenciés sur la même infrastructure. Le réseau visiteurs peut avoir un accès internet limité sans accès au réseau interne." },
        { question: "Le câblage est-il vraiment nécessaire avec le WiFi ?", answer: "Pour les postes fixes, serveurs et caméras IP, le câblage offre plus de stabilité, de sécurité et de débit garanti. Nous recommandons une solution hybride : câble pour les équipements critiques, WiFi pour la mobilité." },
        { question: "Comment protéger mon réseau des cyberattaques ?", answer: "Nous déployons un firewall nouvelle génération (UTM), segmentons le réseau en VLAN, configurons un VPN chiffré pour les accès distants, activons le filtrage web et planifions les mises à jour automatiques. Formation sécurité incluse." },
        { question: "Quelle différence entre Cat 6 et Cat 7 ?", answer: "Le Cat 6A supporte 10 Gbps jusqu'à 100m, le Cat 7 offre un meilleur blindage et prépare l'avenir (25/40 Gbps). Pour une nouvelle installation, nous recommandons le Cat 6A minimum, Cat 7 pour les infrastructures critiques." },
        { question: "Proposez-vous la certification du câblage installé ?", answer: "Oui, nous certifions chaque lien avec un testeur professionnel Fluke et fournissons un rapport de recette complet. Cette certification garantit les performances et est exigée par certains assureurs et bailleurs." },
        { question: "Pouvez-vous reprendre un réseau existant mal configuré ?", answer: "Absolument. Nous réalisons un audit complet de votre infrastructure existante, identifions les faiblesses et proposons un plan de remédiation priorisé. Interventions possibles en heures non ouvrées pour minimiser l'impact." },
      ],
    },
    domotique: {
      title: "Domotique et Maison Intelligente",
      description: "Transformez votre maison ou vos locaux en un espace intelligent et sécurisé. Nous intégrons vos systèmes de sécurité (alarme, caméras) avec la domotique (éclairage, chauffage, volets roulants) pour créer des scénarios automatisés. Par exemple, l'alarme se déclenche et toutes les lumières s'allument. Gestion simplifiée via une application unique.",
      features: [
        "Centralisation des commandes",
        "Scénarios de sécurité automatisés",
        "Compatibilité avec les principaux écosystèmes (Google Home, Alexa)",
        "Installation de systèmes KNX et Z-Wave",
      ],
      faq: [
        { question: "Puis-je installer la domotique dans une maison déjà construite ?", answer: "Oui, avec des solutions sans fil (Z-Wave, Zigbee, WiFi) l'installation se fait sans travaux majeurs ni saignées dans les murs. Pour du neuf ou une rénovation lourde, nous recommandons le KNX filaire plus robuste." },
        { question: "Mes données domotiques sont-elles sécurisées ?", answer: "Oui, nous privilégions les solutions avec contrôle local (serveur domotique chez vous, pas de cloud obligatoire) et chiffrement bout-en-bout. Vos données restent chez vous, pas chez un prestataire américain." },
        { question: "Que se passe-t-il en cas de panne internet ou électrique ?", answer: "Les automatisations locales continuent de fonctionner. Seul l'accès à distance est temporairement indisponible. Nous pouvons installer un onduleur (UPS) pour maintenir le système actif même en cas de coupure électrique." },
        { question: "Combien de temps faut-il pour installer un système domotique complet ?", answer: "Pour une maison de 100m², comptez 2-3 jours pour une installation complète (éclairage, volets, chauffage, sécurité) avec formation incluse. Mise en service progressive possible pour étaler l'investissement." },
        { question: "La domotique permet-elle vraiment de faire des économies d'énergie ?", answer: "Oui, significatives : programmation intelligente du chauffage par zone, détection de présence pour l'éclairage, gestion des volets selon l'ensoleillement. Nos clients constatent 15 à 30% d'économies sur leur facture énergétique." },
        { question: "Puis-je contrôler ma maison avec la voix (Alexa, Google) ?", answer: "Oui, nous intégrons nos systèmes avec les assistants vocaux. Vous pouvez dire 'OK Google, active le mode nuit' pour fermer les volets, baisser le chauffage et armer partiellement l'alarme." },
        { question: "Quelle différence entre KNX, Z-Wave et Zigbee ?", answer: "KNX est un standard filaire professionnel très fiable pour les constructions neuves. Z-Wave et Zigbee sont sans fil, idéaux pour la rénovation. Nous vous conseillons selon votre configuration et votre budget." },
      ],
    },
    antenneSatellite: {
      title: "Antennes Hertziennes & Satellite",
      description: "Une réception TV de qualité est essentielle pour votre confort quotidien. Nous installons, réglons et dépannons tous types d'antennes : râteaux TNT, paraboles satellite, antennes collectives pour immeubles. Notre expertise garantit une réception optimale de toutes vos chaînes, même dans les zones difficiles.",
      features: [
        "Installation antennes TNT et râteaux",
        "Pose et orientation de paraboles satellite",
        "Antennes collectives pour copropriétés",
        "Dépannage et réglage de réception",
        "Amplificateurs et répartiteurs de signal",
      ],
      faq: [
        { question: "Quelles sont les chaînes disponibles en TNT ?", answer: "La TNT offre plus de 30 chaînes gratuites en HD (TF1, France TV, M6, Arte, etc.) et plusieurs chaînes payantes. Nous optimisons votre installation pour capter toutes les chaînes disponibles dans votre région." },
        { question: "Puis-je recevoir les chaînes étrangères avec une parabole ?", answer: "Oui, avec une parabole satellite correctement orientée, vous pouvez recevoir des centaines de chaînes internationales selon le satellite visé (Astra pour l'Allemagne, Hotbird pour l'Italie, etc.). Configuration multi-satellites possible." },
        { question: "Intervenez-vous sur les antennes collectives d'immeuble ?", answer: "Absolument. Nous installons et maintenons les systèmes d'antennes collectives pour les copropriétés : tête d'amplification, répartiteurs et distribution vers tous les appartements. Contrats de maintenance annuels disponibles." },
        { question: "Pourquoi ai-je des problèmes de réception par mauvais temps ?", answer: "Les signaux satellite peuvent être affectés par de fortes pluies ou neige (effet de fondu). Une parabole plus grande (80-100cm) ou une LNB de qualité supérieure peut résoudre ce problème. La TNT est moins sensible aux intempéries." },
        { question: "Faut-il une autorisation pour installer une parabole ?", answer: "En maison individuelle, généralement non (sauf zone protégée). En copropriété, l'accord du syndic est nécessaire mais ne peut être refusé pour un motif légitime. Nous vous accompagnons dans les démarches si besoin." },
        { question: "Pouvez-vous installer une antenne discrète en façade ?", answer: "Oui, nous proposons des antennes plates TNT et satellite, beaucoup plus discrètes que les modèles traditionnels. Idéal pour les contraintes esthétiques ou les règlements de copropriété stricts." },
        { question: "Mon ancienne antenne râteau est-elle compatible avec la TNT HD ?", answer: "La plupart des antennes UHF récentes (moins de 20 ans) sont compatibles. Un simple remplacement de l'amplificateur peut suffire. Nous effectuons un diagnostic gratuit avant toute intervention." },
      ],
    },
    portailsParking: {
      title: "Portails, Parking & Automatismes",
      description: "Sécurisez et automatisez tous vos accès extérieurs. Du portail coulissant motorisé à la porte de garage, en passant par les barrières de parking et les interphones d'immeuble, nous proposons des solutions complètes pour les résidences, les copropriétés et les entreprises. Installation, programmation et maintenance de qualité professionnelle.",
      features: [
        "Motorisation de portails coulissants et battants",
        "Portes de garage sectionnelles et basculantes",
        "Barrières automatiques de parking",
        "Interphones et vidéophones d'immeuble",
        "Télécommandes et badges d'accès",
        "Contrôle à distance via smartphone",
      ],
      faq: [
        { question: "Peut-on motoriser un portail existant ?", answer: "Dans la plupart des cas, oui. Nous évaluons la structure, le poids et l'état de votre portail pour proposer la motorisation adaptée : vérins hydrauliques, bras articulés pour les battants, moteur à crémaillère pour les coulissants." },
        { question: "Quelle garantie proposez-vous sur les automatismes ?", answer: "Nous offrons une garantie constructeur de 2 à 5 ans selon les équipements (moteurs, cartes électroniques). L'installation est garantie 1 an. Des contrats de maintenance prolongent la durée de vie et maintiennent la garantie." },
        { question: "Proposez-vous des solutions pour les copropriétés ?", answer: "Oui, nous sommes spécialisés dans les systèmes d'accès pour immeubles : interphones et vidéophones multi-logements (jusqu'à 500 appartements), digicodes, portails automatiques et barrières de parking avec gestion centralisée." },
        { question: "Mon portail peut-il fonctionner en cas de coupure de courant ?", answer: "Oui, tous nos systèmes incluent une batterie de secours (20 à 50 cycles) et un déverrouillage manuel à clé. Pour les sites critiques, nous proposons des solutions avec groupe électrogène ou panneaux solaires." },
        { question: "Puis-je ouvrir mon portail depuis mon smartphone ?", answer: "Oui, avec nos modules connectés vous pouvez ouvrir/fermer le portail à distance, recevoir des notifications d'ouverture, et même vérifier l'état via une caméra intégrée. Idéal pour les livraisons ou les visiteurs." },
        { question: "Quelle différence entre portail coulissant et battant ?", answer: "Le coulissant nécessite un dégagement latéral mais pas de recul. Le battant nécessite un espace de débattement mais s'intègre mieux aux piliers existants. Nous vous conseillons selon votre configuration et vos contraintes d'espace." },
        { question: "Les barrières de parking sont-elles adaptées à un usage intensif ?", answer: "Oui, nos barrières professionnelles sont conçues pour un usage intensif (jusqu'à 3000 cycles/jour) avec temps d'ouverture de 1 à 3 secondes. Idéal pour les parkings d'entreprise, centres commerciaux et résidences." },
      ],
    },
    // Installation - FAQ pour cohérence
    installation: {
      title: "Installation Professionnelle de Sécurité",
      description: "Nos techniciens certifiés assurent l'installation complète de tous vos systèmes de sécurité électronique. De l'étude gratuite à la mise en service, nous garantissons un travail soigné et conforme aux normes en vigueur.",
      features: [
        "Étude de site gratuite et sans engagement",
        "Techniciens certifiés multi-marques",
        "Installation propre et soignée",
        "Configuration complète et formation incluse",
      ],
      faq: [
        { question: "Combien de temps dure une installation de système de sécurité ?", answer: "La durée varie selon la complexité : quelques heures pour une maison standard (jusqu'à 6 caméras ou alarme), 1-2 jours pour des locaux professionnels de 500m². Nous planifions l'intervention pour minimiser la perturbation de votre activité et pouvons travailler en dehors des heures ouvrées." },
        { question: "L'étude de site est-elle vraiment gratuite et sans engagement ?", answer: "Oui, notre audit de sécurité est 100% gratuit et sans engagement. Nos experts se déplacent pour évaluer vos besoins, identifier les points de vulnérabilité, et vous proposer une solution personnalisée avec devis détaillé. Vous êtes libre de comparer avec d'autres offres." },
        { question: "Quelles marques de matériel installez-vous ?", answer: "Nous sommes installateurs certifiés des marques leaders : Hikvision, Dahua, Axis pour la vidéosurveillance ; Ajax, Honeywell, Risco pour les alarmes ; Intratone, CDVI, Salto pour le contrôle d'accès. Nous sélectionnons le matériel le plus adapté à votre projet et votre budget." },
        { question: "Proposez-vous une garantie sur l'installation ?", answer: "Oui, nos installations sont garanties 5 ans pièces et main d'œuvre. Cette garantie couvre les défauts de fabrication et les problèmes liés à l'installation. Les contrats de maintenance préventive prolongent cette couverture et assurent le bon fonctionnement dans le temps." },
        { question: "Intervenez-vous partout en France ?", answer: "HD Connect intervient sur toute la France métropolitaine. Nous avons des équipes basées en Île-de-France, Lyon, Marseille, Bordeaux et dans les principales métropoles pour une intervention rapide. Pour les zones rurales, nous garantissons une intervention rapide." },
        { question: "Fournissez-vous les équipements ou dois-je les acheter ailleurs ?", answer: "Nous fournissons et installons les équipements de marques professionnelles. Le devis tout compris inclut : le matériel garanti, l'installation certifiée, la configuration complète, la formation à l'utilisation et le support technique. Vous bénéficiez ainsi d'un interlocuteur unique et d'une garantie globale." },
        { question: "Pouvez-vous reprendre une installation existante d'un autre prestataire ?", answer: "Oui, nous réalisons régulièrement des audits et reprises d'installations existantes. Nous évaluons l'état du système, proposons des mises à niveau si nécessaire et assurons ensuite la maintenance. La plupart des marques professionnelles sont compatibles avec nos services." },
        { question: "Comment se déroule la formation après installation ?", answer: "Chaque installation inclut une formation complète : prise en main de l'interface utilisateur, paramétrage des alertes, utilisation de l'application mobile, gestion des codes d'accès. Nous remettons une documentation et restons disponibles par téléphone pour toute question ultérieure." },
      ],
    },
    // Dépannage - FAQ pour cohérence
    depannage: {
      title: "Dépannage et Réparation Express",
      description: "Notre service de dépannage intervient rapidement en cas de panne de votre système de sécurité. Disponibles 24/7, nos techniciens multi-marques diagnostiquent et réparent tous types d'équipements : alarmes, caméras, contrôle d'accès.",
      features: [
        "Intervention express en Île-de-France",
        "Diagnostic téléphonique gratuit",
        "Techniciens formés toutes marques",
        "Pièces d'origine garanties",
      ],
      faq: [
        { question: "Intervenez-vous en urgence 24h/24 et 7j/7 ?", answer: "Oui, notre service d'urgence est disponible 24h/24, 7j/7, y compris les nuits, week-ends et jours fériés. Pour les pannes critiques (système de sécurité totalement hors service), appelez notre numéro d'astreinte. Nous intervenons rapidement en Île-de-France et sous 24h dans les autres régions." },
        { question: "Le diagnostic téléphonique est-il vraiment gratuit ?", answer: "Oui, le pré-diagnostic par téléphone est toujours gratuit. Nos experts tentent d'abord de résoudre votre problème à distance (réinitialisation, paramétrage). Si une intervention sur site est nécessaire, le diagnostic sur place est facturé mais intégralement déduit du montant de la réparation effectuée." },
        { question: "Dépannez-vous les systèmes que vous n'avez pas installés ?", answer: "Oui, nous intervenons sur tous les systèmes de sécurité, quelle que soit la marque ou l'installateur d'origine. Notre équipe est formée sur les principales marques du marché : Hikvision, Dahua, Axis, Ajax, Honeywell, DSC, Paradox, Risco, Intratone, etc." },
        { question: "Combien coûte un dépannage en moyenne ?", answer: "Le coût dépend de la complexité de la panne. Un déplacement avec diagnostic coûte environ 89€ HT en Île-de-France. Les réparations courantes (remplacement détecteur, reconfiguration) varient de 150€ à 350€. Un devis précis est établi avant toute intervention non urgente." },
        { question: "Proposez-vous des contrats pour éviter les pannes ?", answer: "Oui, nous proposons des contrats de maintenance préventive qui réduisent considérablement les risques de panne. Ces contrats incluent 1 à 2 visites annuelles de contrôle, les mises à jour logicielles, et une priorité d'intervention avec tarifs préférentiels en cas de dépannage." },
        { question: "Que se passe-t-il si vous ne pouvez pas réparer ?", answer: "Si le matériel est irréparable, nous vous proposons un remplacement à tarif préférentiel avec installation incluse. Pour les équipements sous garantie constructeur, nous gérons le retour SAV et le prêt de matériel de remplacement si possible." },
        { question: "Fournissez-vous un rapport d'intervention ?", answer: "Oui, chaque intervention donne lieu à un rapport détaillé : description de la panne, diagnostic effectué, réparation réalisée, pièces remplacées et recommandations de maintenance. Ce document est utile pour votre assurance et le suivi de vos équipements." },
      ],
    },
    // Location - FAQ pour cohérence
    location: {
      title: "Location de Matériel de Sécurité",
      description: "Louez du matériel de sécurité professionnel pour vos chantiers, événements ou besoins temporaires. Caméras autonomes solaires, kits d'alarme portables, systèmes de vidéosurveillance 4G : tout le matériel est livré, installé et configuré par nos soins.",
      features: [
        "Équipement professionnel dernière génération",
        "Installation et retrait inclus",
        "Durée flexible de 1 jour à 24 mois",
        "Support technique 24/7 pendant la location",
      ],
      faq: [
        { question: "Quelle est la durée minimale de location ?", answer: "La durée minimale est d'une journée pour les événements. Pour les chantiers, nous proposons des forfaits à la semaine ou au mois avec tarifs dégressifs (-15% après 1 mois, -25% après 3 mois, -40% après 6 mois). La durée est 100% flexible et sans engagement de renouvellement." },
        { question: "L'installation et le retrait sont-ils inclus dans le prix ?", answer: "Oui, le prix de location inclut la livraison, l'installation par nos techniciens certifiés, la configuration complète, la formation express, le support technique 24/7 et le retrait en fin de location. Aucun frais caché, tout est compris dans le tarif annoncé." },
        { question: "Le matériel est-il assuré en cas de vol ou casse ?", answer: "Oui, notre matériel est couvert par une assurance tous risques. En cas de vol (avec dépôt de plainte) ou dégradation accidentelle, une franchise de 10% de la valeur s'applique. Option assurance sans franchise disponible (+15% du tarif de location)." },
        { question: "Puis-je surveiller mon chantier à distance en temps réel ?", answer: "Absolument ! Tous nos systèmes de location sont configurés avec accès distant via application mobile (iOS/Android) et navigateur web. Visualisation en direct, alertes push, téléchargement des enregistrements : tout est inclus. La connexion 4G/5G est fournie pour les sites sans internet." },
        { question: "Les caméras solaires fonctionnent-elles vraiment sans électricité ?", answer: "Oui, nos caméras autonomes combinent panneaux solaires haute efficacité et batteries lithium longue durée (7 jours d'autonomie sans soleil). Transmission 4G intégrée pour les images en temps réel. Solution idéale pour chantiers, zones agricoles ou sites isolés sans raccordement électrique." },
        { question: "Proposez-vous la location avec option d'achat ?", answer: "Oui, après 6 mois de location minimum, vous pouvez acquérir le matériel à prix réduit (jusqu'à -30% sur le neuf). Les loyers versés sont partiellement déduits du prix d'achat. Idéal pour tester un système avant engagement définitif." },
        { question: "Quel est le délai d'installation pour une location ?", answer: "En Île-de-France : intervention possible en quelques heures pour les urgences, sinon rapidement en standard. Autres régions : intervention rapide. Pour les projets planifiés à l'avance, nous garantissons la disponibilité du matériel à la date convenue." },
        { question: "Quels équipements proposez-vous en location ?", answer: "Notre catalogue : caméras de surveillance (fixes, dômes, PTZ, thermiques), systèmes 100% autonomes solaires, alarmes portables Grade 2, kits de contrôle d'accès temporaires, barrières de chantier, enregistreurs NVR avec écrans de visualisation. Tout le matériel professionnel pour une sécurité temporaire efficace." },
      ],
    },
  },

  // --- Mentions Légales et Politique de Confidentialité ---
  legal: {
    mentions: {
      title: "Mentions Légales",
      content: `INFORMATIONS LÉGALES

1. ÉDITEUR DU SITE

HD Connect
Société à responsabilité limitée (SARL)
Capital social : 10 000 €
Siège social : Paris, France
SIRET : En cours d'immatriculation
RCS Paris : En cours d'immatriculation
TVA Intracommunautaire : En cours d'attribution
Email : kamal@hdconnect.fr
Téléphone : +33 6 27 13 53 04 / +33 1 83 64 36 40

Directeur de la publication : Kamal, Gérant

2. HÉBERGEMENT

Ce site est hébergé par :
Lovable / GPT Engineer Inc.
Adresse : 2261 Market Street #4010, San Francisco, CA 94114, USA
Site web : https://lovable.dev

3. PROPRIÉTÉ INTELLECTUELLE

L'ensemble des éléments constituant ce site (structure, textes, images, graphismes, logo, icônes, sons, logiciels, etc.) est la propriété exclusive de HD Connect ou de ses partenaires.

Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de HD Connect.

Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.

4. LIENS HYPERTEXTES

Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de HD Connect.

HD Connect n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.

5. LIMITATION DE RESPONSABILITÉ

HD Connect ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site hdconnect.fr, résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.

HD Connect ne pourra également être tenue responsable des dommages indirects (tels par exemple qu'une perte de marché ou perte d'une chance) consécutifs à l'utilisation du site hdconnect.fr.

HD Connect s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, HD Connect ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.

6. DROIT APPLICABLE ET JURIDICTION

Tout litige en relation avec l'utilisation du site hdconnect.fr est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.

7. CRÉDITS

Conception et développement : HD Connect
Images : Générées par intelligence artificielle (Flux AI)
Icônes : Lucide React (https://lucide.dev)`,
    },
    privacy: {
      title: "Politique de Confidentialité",
      content: `POLITIQUE DE CONFIDENTIALITÉ ET PROTECTION DES DONNÉES

Dernière mise à jour : Janvier 2025

HD Connect, société à responsabilité limitée dont le siège social est situé à Paris, France, s'engage à protéger la vie privée des utilisateurs de son site internet hdconnect.fr. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.

1. RESPONSABLE DU TRAITEMENT

HD Connect
Email : kamal@hdconnect.fr
Téléphone : +33 6 27 13 53 04

2. DONNÉES COLLECTÉES

Nous collectons les informations que vous nous fournissez directement via nos formulaires de contact et de demande de devis :

Données d'identification :
• Nom et prénom
• Adresse email
• Numéro de téléphone
• Adresse postale (ville, code postal)

Données relatives à votre projet :
• Type de projet (vidéosurveillance, alarme, contrôle d'accès, etc.)
• Description de vos besoins
• Type de bien (particulier, professionnel)
• Surface approximative

Données de navigation (collectées automatiquement) :
• Adresse IP (anonymisée)
• Type de navigateur
• Pages consultées
• Date et heure de connexion

3. FINALITÉS DU TRAITEMENT

Vos données personnelles sont collectées et traitées pour les finalités suivantes :
• Répondre à vos demandes de devis ou d'information
• Vous recontacter dans le cadre de votre projet de sécurité
• Établir un devis personnalisé
• Assurer le suivi de nos prestations
• Améliorer nos services et notre site internet
• Respecter nos obligations légales et réglementaires

Base légale : Le traitement de vos données repose sur votre consentement et/ou l'exécution de mesures précontractuelles à votre demande.

4. DESTINATAIRES DES DONNÉES

Vos données personnelles sont strictement confidentielles. Elles peuvent être communiquées à :
• Nos collaborateurs habilités (équipe commerciale, techniciens)
• Nos prestataires techniques (hébergement, envoi d'emails)
• Les autorités compétentes si la loi l'exige

HD Connect ne vend, ne loue ni ne partage vos informations personnelles avec des tiers à des fins commerciales ou de marketing.

5. DURÉE DE CONSERVATION

Vos données sont conservées pendant une durée de 3 ans à compter de notre dernier contact. Au-delà, elles sont supprimées ou anonymisées.

Pour les clients ayant conclu un contrat, les données sont conservées pendant la durée de la relation commerciale puis archivées conformément aux délais de prescription légaux.

6. VOS DROITS

Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :

• Droit d'accès : obtenir la confirmation que des données vous concernant sont traitées et accéder à ces données
• Droit de rectification : faire modifier des données inexactes ou incomplètes
• Droit à l'effacement : demander la suppression de vos données dans les conditions prévues par la loi
• Droit à la limitation du traitement : demander la limitation du traitement de vos données
• Droit à la portabilité : recevoir vos données dans un format structuré et les transmettre à un autre responsable de traitement
• Droit d'opposition : vous opposer au traitement de vos données pour des motifs légitimes
• Droit de retirer votre consentement : à tout moment

Pour exercer ces droits, contactez-nous à : kamal@hdconnect.fr

Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : www.cnil.fr

7. SÉCURITÉ DES DONNÉES

Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction :
• Connexion sécurisée HTTPS
• Chiffrement des données sensibles
• Accès restreint aux données personnelles
• Mises à jour régulières de sécurité

8. COOKIES

Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent pas de données personnelles à des fins publicitaires.

Types de cookies utilisés :
• Cookies de session : permettent la navigation sur le site
• Cookies de préférences : mémorisent vos choix (langue, etc.)

Aucun cookie publicitaire ou de tracking tiers n'est utilisé sur ce site.

9. TRANSFERT DE DONNÉES HORS UE

Votre site étant hébergé aux États-Unis (Lovable), des mesures appropriées sont prises pour garantir la protection de vos données conformément au RGPD, notamment via les clauses contractuelles types de la Commission européenne.

10. MODIFICATION DE LA POLITIQUE

HD Connect se réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Nous vous invitons à consulter régulièrement cette page.

11. CONTACT

Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :

HD Connect
Email : kamal@hdconnect.fr
Téléphone : +33 6 27 13 53 04
Adresse : Paris, France`,
    },
  },

  // --- Zones de Couverture Nationale ---
  coverage: {
    description: "HD Connect intervient sur l'ensemble du territoire français, avec une expertise locale dans chaque région. Nos équipes de techniciens qualifiés se déplacent pour l'installation, la maintenance et le dépannage de vos systèmes de sécurité.",
    regions: [
      { name: "Île-de-France", slug: "ile-de-france", cities: ["Paris", "Versailles", "Boulogne-Billancourt", "Saint-Denis", "Montreuil", "Argenteuil", "Nanterre", "Créteil", "Évry"] },
      { name: "Provence-Alpes-Côte d'Azur", slug: "provence-alpes-cote-d-azur", cities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon", "Cannes", "Antibes", "Fréjus"] },
      { name: "Auvergne-Rhône-Alpes", slug: "auvergne-rhone-alpes", cities: ["Lyon", "Grenoble", "Saint-Étienne", "Villeurbanne", "Clermont-Ferrand", "Annecy", "Valence", "Chambéry"] },
      { name: "Nouvelle-Aquitaine", slug: "nouvelle-aquitaine", cities: ["Bordeaux", "Limoges", "Poitiers", "Pau", "La Rochelle", "Bayonne", "Angoulême", "Périgueux"] },
      { name: "Occitanie", slug: "occitanie", cities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers", "Carcassonne", "Albi", "Tarbes"] },
      { name: "Hauts-de-France", slug: "hauts-de-france", cities: ["Lille", "Amiens", "Roubaix", "Dunkerque", "Tourcoing", "Calais", "Valenciennes", "Lens"] },
      { name: "Grand Est", slug: "grand-est", cities: ["Strasbourg", "Reims", "Metz", "Mulhouse", "Nancy", "Troyes", "Colmar", "Charleville-Mézières"] },
      { name: "Pays de la Loire", slug: "pays-de-la-loire", cities: ["Nantes", "Angers", "Le Mans", "Saint-Nazaire", "La Roche-sur-Yon", "Cholet", "Laval", "Saumur"] },
      { name: "Bretagne", slug: "bretagne", cities: ["Rennes", "Brest", "Quimper", "Lorient", "Vannes", "Saint-Brieuc", "Saint-Malo", "Fougères"] },
      { name: "Normandie", slug: "normandie", cities: ["Rouen", "Le Havre", "Caen", "Cherbourg", "Évreux", "Dieppe", "Alençon", "Lisieux"] },
      { name: "Centre-Val de Loire", slug: "centre-val-de-loire", cities: ["Orléans", "Tours", "Bourges", "Blois", "Chartres", "Châteauroux", "Vendôme", "Vierzon"] },
      { name: "Bourgogne-Franche-Comté", slug: "bourgogne-franche-comte", cities: ["Dijon", "Besançon", "Belfort", "Auxerre", "Chalon-sur-Saône", "Mâcon", "Nevers", "Montbéliard"] },
    ],
    stats: {
      regions: "13 régions couvertes",
      cities: "200+ villes d'intervention",
      technicians: "30+ techniciens certifiés",
      response: "Intervention sous 24-48h",
    },
  },

  // --- Résumé Entreprise (pour SEO et pages légales) ---
  companySummary: {
    expertise: [
      "Installation de systèmes de vidéosurveillance IP et 4K",
      "Mise en place d'alarmes anti-intrusion certifiées NF&A2P",
      "Contrôle d'accès biométrique et par badge RFID",
      "Domotique et maison intelligente",
      "Réseaux informatiques et infrastructure WiFi professionnelle",
      "Antennes hertziennes et satellite",
      "Portails automatiques et barrières de parking",
      "Maintenance préventive et dépannage 24/7",
    ],
    clientTypes: [
      "Particuliers et résidences privées",
      "PME et TPE",
      "Commerces et boutiques",
      "Entrepôts et sites industriels",
      "Copropriétés et syndics",
      "Établissements recevant du public (ERP)",
      "Collectivités locales",
      "Professions libérales",
    ],
    certifications: [
      "Installateur agréé NF&A2P",
      "Certification câblage structuré",
      "Conformité RGPD garantie",
      "Assurance responsabilité civile professionnelle",
    ],
    years: "10+ années d'expérience",
    clients: "500+ clients satisfaits",
    support: "Support technique 24/7",
  },
};
