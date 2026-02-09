# 🔐 HD CONNECT - Documentation Complète & Unifiée

  > **Version:** 9.0 - Production Ready  
 > **Dernière mise à jour:** 05 Février 2026  
 > **Statut:** ✅ 100% PRODUCTION-READY

---

## 📋 TABLE DES MATIÈRES

1. [Présentation du Projet](#-1-présentation-du-projet)
2. [Stack Technique](#-2-stack-technique)
3. [Structure des Fichiers](#-3-structure-des-fichiers)
4. [Pages & Routes](#-4-pages--routes)
5. [Composants](#-5-composants)
6. [Données & Data](#-6-données--data)
7. [Hooks Personnalisés](#-7-hooks-personnalisés)
8. [Design System](#-8-design-system)
9. [SEO & Optimisations](#-9-seo--optimisations)
10. [Stratégie SEO Answer-First](#-10-stratégie-seo-answer-first)
11. [Backend Supabase](#-11-backend-supabase)
12. [Installation & Déploiement](#-12-installation--déploiement)
13. [Configuration](#-13-configuration)
14. [État du Projet](#-14-état-du-projet)
 15. [Changelog](#-15-changelog)

---

## 🎯 1. PRÉSENTATION DU PROJET

### Client
**HD Connect** - Entreprise spécialisée en sécurité électronique, domotique et réseaux informatiques.

### URLs
| Environnement | URL |
|---------------|-----|
| Production | https://hdconnect.fr |
| Preview | https://site-polish-joy.lovable.app |
| Supabase | https://bntatxbwyheajskyrtuh.supabase.co |

### Objectifs Business
| Objectif | Description | Statut |
|----------|-------------|--------|
| Site vitrine | Présenter les 11 services | ✅ Fait |
| Génération de leads | Formulaire de devis intelligent | ✅ Fait |
 | SEO local | Référencement 310+ pages | ✅ Fait |
| Animations premium | Micro-interactions globales | ✅ Fait |
| Admin panel | Gestion des leads | ✅ Opérationnel |

### Objectifs SEO
| Métrique | Objectif 6 mois | Objectif 12 mois |
|----------|-----------------|------------------|
| Trafic organique | +150% | +300% |
| Positions Top 3 | 50 mots-clés | 150 mots-clés |
| Leads/mois | 100 | 250 |
| Domain Authority | 25 | 40 |

---

## 🛠️ 2. STACK TECHNIQUE

### Frontend
| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 18.3.1 | Framework UI |
| TypeScript | 5.x | Typage statique |
| Vite | 5.x | Build tool & dev server |
| Tailwind CSS | 3.x | Styling utility-first |
| Shadcn/UI | Latest | Composants UI |
| Framer Motion | 12.x | Animations |
| React Router | 6.30.1 | Routing SPA |
| React Query | 5.x | Data fetching |
| React Hook Form | 7.x | Formulaires |
| Zod | 3.x | Validation |

### Backend (Supabase & Formspree)
| Service | Usage |
|---------|-------|
| PostgreSQL | Base de données |
| Auth | Authentification email/password |
| Formspree | Envoi des emails (ID: mwpzrqyl) |
| Row Level Security | Sécurité données |

### Outils
| Outil | Usage |
|-------|-------|
| Lucide React | Icônes |
| Sonner | Toasts/notifications |
| Date-fns | Manipulation dates |
| Recharts | Graphiques (admin) |

---

## 📁 3. STRUCTURE DES FICHIERS

```
hdconnect/
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg             # Image sociale 1200x630
│   ├── robots.txt
│   └── sitemap.xml              # 250+ URLs SEO
│
├── src/
│   ├── assets/                  # 150+ images HD/4K
│   │   ├── hero-*.webp          # Images héros
│   │   ├── service-*.webp       # Images services
│   │   ├── blog-*.webp          # Images blog
│   │   ├── regions/             # Photos régions
│   │   └── monuments/           # Monuments Paris
│   │
│   ├── components/
│   │   ├── ui/                  # 45+ composants Shadcn
│   │   ├── SEO/                 # Composants SEO
│   │   ├── city/                # Composants pages villes
│   │   │   ├── CityHeroParallax.tsx
│   │   │   ├── CityLocalContent.tsx
│   │   │   ├── CityServicesGrid.tsx
│   │   │   └── CityCoverageSection.tsx
│   │   └── *.tsx                # 40+ composants métier
│   │
│   ├── data/
│   │   ├── blogData.ts          # 10 articles blog
│   │   ├── citiesData.ts        # 125 villes
│   │   ├── departmentsData.ts   # Départements IDF + France
│   │   ├── regionsData.ts       # 13 régions
│   │   ├── parisArrondissements.ts # 20 arrondissements
│   │   ├── content.ts           # Contenu textuel
│   │   ├── seoData.ts           # Données SEO
│   │   ├── homeFAQ.ts           # FAQ accueil
│   │   └── structuredData.ts    # JSON-LD schemas
│   │
│   ├── hooks/
│   │   ├── useAuth.tsx          # Authentification
│   │   ├── useSEO.tsx           # Meta tags dynamiques
│   │   ├── useSmoothScroll.tsx  # Navigation fluide
│   │   ├── usePhoneCall.tsx     # Appel téléphonique
│   │   ├── useParallax.tsx      # Effet parallax
│   │   ├── use-mobile.tsx       # Détection mobile
│   │   └── use-toast.ts         # Notifications
│   │
│   ├── pages/
│   │   ├── Index.tsx            # Page d'accueil
│   │   ├── Blog.tsx             # Hub blog
│   │   ├── BlogArticle.tsx      # Page article
│   │   ├── ServicesHub.tsx      # Hub services
│   │   ├── Auth.tsx             # Authentification
│   │   ├── Admin.tsx            # Panel admin
│   │   ├── NotFound.tsx         # 404
│   │   ├── LegalPage.tsx        # Mentions légales
│   │   ├── ZonesIntervention.tsx # Hub régions
│   │   ├── services/            # 11 pages services
│   │   ├── regions/             # Pages régions
│   │   ├── departments/         # Pages départements
│   │   ├── paris/               # Pages Paris + arrondissements
│   │   └── villes/              # Pages villes + ville+service
│   │
│   ├── App.tsx                  # Router principal
│   ├── main.tsx                 # Point d'entrée
│   └── index.css                # Styles globaux + tokens
│
├── supabase/
│   └── functions/               # (Architecture Formspree utilisée)
│
├── CONFIGURATION.md             # Guide de configuration externe
├── CHANGELOG.md                 # Historique des versions
└── README.md                    # Documentation complète (ce fichier)
```

---

## 📄 4. PAGES & ROUTES

### Vue d'ensemble (250+ pages)

```
NIVEAU 0 - ACCUEIL
└── /                              → Index.tsx

NIVEAU 1 - HUB SERVICES (Page Pivot)
└── /services                      → ServicesHub.tsx

NIVEAU 2 - SERVICES (11 pages)
├── /services/videosurveillance    → Videosurveillance.tsx
├── /services/alarme               → Alarme.tsx
├── /services/controle-acces       → ControleAcces.tsx
├── /services/domotique            → Domotique.tsx
├── /services/reseau               → Reseau.tsx
├── /services/maintenance          → Maintenance.tsx
├── /services/antenne-satellite    → AntenneSatellite.tsx
├── /services/portails-parking     → PortailsParking.tsx
├── /services/installation         → Installation.tsx
├── /services/depannage            → Depannage.tsx
└── /services/location             → Location.tsx

NIVEAU 2 - HUB GÉOGRAPHIQUE (PAGE PIVOT)
└── /zones-intervention            → ZonesIntervention.tsx

NIVEAU 3 - RÉGIONS (13 pages)
├── /zones-intervention/ile-de-france
├── /zones-intervention/auvergne-rhone-alpes
├── /zones-intervention/provence-alpes-cote-d-azur
├── /zones-intervention/nouvelle-aquitaine
├── /zones-intervention/occitanie
├── /zones-intervention/hauts-de-france
├── /zones-intervention/grand-est
├── /zones-intervention/pays-de-la-loire
├── /zones-intervention/bretagne
├── /zones-intervention/normandie
├── /zones-intervention/bourgogne-franche-comte
├── /zones-intervention/centre-val-de-loire
└── /zones-intervention/corse

NIVEAU 3.5 - DÉPARTEMENTS (8+ pages)
├── /departements/paris-75
├── /departements/seine-saint-denis-93
├── /departements/val-de-marne-94
├── /departements/hauts-de-seine-92
├── /departements/yvelines-78
├── /departements/essonne-91
├── /departements/seine-et-marne-77
└── /departements/val-d-oise-95

NIVEAU 4 - VILLES (125 pages pivot)
├── /villes/paris                  → ParisPage.tsx (Hub arrondissements)
├── /villes/lyon
├── /villes/marseille
 ├── /villes/villeurbanne
 ├── /villes/caluire-et-cuire
├── /villes/toulouse
├── /villes/bordeaux
├── /villes/lille
├── /villes/nice
├── /villes/saint-denis
├── /villes/bobigny
├── /villes/montreuil
├── /villes/villeurbanne
├── /villes/venissieux
└── ... (125 villes au total)

NIVEAU 5 - VILLE + SERVICE (1000+ pages dynamiques)
├── /villes/paris/videosurveillance
├── /villes/paris/alarme
├── /villes/lyon/videosurveillance
├── /villes/marseille/controle-acces
└── ... (8 services × 125 villes)

NIVEAU 5 - ARRONDISSEMENTS PARIS (20 pages)
├── /paris/paris-1er
├── /paris/paris-2eme
├── /paris/paris-3eme
└── ... (jusqu'au 20ème)
 
 NIVEAU 5 - ARRONDISSEMENTS LYON (9 pages)
 ├── /lyon/lyon-1er-presquile
 ├── /lyon/lyon-2e-confluence
 ├── /lyon/lyon-3e-part-dieu
 └── ... (jusqu'au 9ème)
 
 NIVEAU 5 - ARRONDISSEMENTS MARSEILLE (12 secteurs)
 ├── /marseille/marseille-1er-2e
 ├── /marseille/marseille-3e-4e
 ├── /marseille/marseille-5e
 └── ... (jusqu'au 15e-16e)

BLOG (10 articles)
├── /blog                          → Blog.tsx (Hub)
└── /blog/:slug                    → BlogArticle.tsx (Articles)

PAGES LÉGALES
├── /mentions-legales
└── /politique-confidentialite

PAGES SYSTÈME
├── /auth                          → Auth.tsx
├── /admin                         → Admin.tsx (protégé)
└── /*                             → NotFound.tsx
```

### Détail des services avec couleurs

| Service | Route | Couleur Accent | Icône |
|---------|-------|----------------|-------|
| Vidéosurveillance | `/services/videosurveillance` | 🔵 Bleu (blue-500) | Camera |
| Alarme | `/services/alarme` | 🔴 Rouge (red-500) | Bell |
| Contrôle d'Accès | `/services/controle-acces` | 🟢 Vert (green-500) | Key |
| Domotique | `/services/domotique` | 🟡 Amber (amber-500) | Home |
| Réseau | `/services/reseau` | 🔵 Cyan (cyan-500) | Wifi |
| Maintenance | `/services/maintenance` | 🟣 Violet (violet-500) | Settings |
| Antenne/Satellite | `/services/antenne-satellite` | 🟠 Orange (orange-500) | Radio |
| Portails/Parking | `/services/portails-parking` | 🩷 Pink (pink-500) | DoorOpen |
| Installation | `/services/installation` | 🌊 Teal (teal-500) | Wrench |
| Dépannage | `/services/depannage` | 🌸 Rose (rose-500) | AlertTriangle |
| Location | `/services/location` | 💠 Sky (sky-500) | Package |

---

## 🧩 5. COMPOSANTS

### Composants Métier (src/components/)

| Composant | Description | Utilisé dans |
|-----------|-------------|--------------|
| `Header.tsx` | Navigation responsive + mobile drawer | Toutes les pages |
| `Footer.tsx` | Pied de page avec liens | Toutes les pages |
| `Hero.tsx` | Section héros page d'accueil | Index |
| `ServiceHero.tsx` | Héros animé avec 12 couleurs d'accent | Pages services |
| `Services.tsx` | Grille des 11 services | Index |
| `ServicesHighlight.tsx` | Mise en avant prestations | Index, villes |
| `QuoteFunnelSimple.tsx` | Formulaire devis multi-étapes | Toutes les pages |
| `Contact.tsx` | Section contact | Index |
| `About.tsx` | Section à propos | Index |
| `Testimonials.tsx` | Avis clients avec carousel | Index |
| `MiniTestimonials.tsx` | Témoignages compacts | Villes, régions |
| `WhyHDConnect.tsx` | Pain points → Solutions | Services, villes |
| `FAQAccordion.tsx` | FAQ interactive | Services, villes |
| `ContentSection.tsx` | Layout 50/50 image/texte | Services |
| `CTAIntermediate.tsx` | Call-to-action coloré | Services |
| `GlobalFloatingCTA.tsx` | Bouton appel flottant global | App.tsx |
| `ImageBreak.tsx` | Image pleine largeur | Services |
| `ServiceShowcase.tsx` | Grille d'images | Services |
| `ServiceLinks.tsx` | Maillage interne services | Services |
| `LocalServiceLinks.tsx` | Liens services locaux | Villes |
| `ServicePrestations.tsx` | Prestations (install, dépannage, location) | Services |
| `UseCasesSection.tsx` | Cas d'usage | Services |
| `FeatureGrid.tsx` | Grille de fonctionnalités | Services |
| `InterventionProcess.tsx` | Processus 4 étapes | Services, villes |
| `ColoredStatsSection.tsx` | Stats avec couleurs | Services |
| `RegionCoverage.tsx` | Couverture régionale | Services |
| `LocalSEO.tsx` | SEO local enrichi | Villes |
| `HomeSEOBlocks.tsx` | Blocs SEO accueil | Index |
| `HomeCTALinks.tsx` | Liens CTA accueil | Index |
| `AnimatedSection.tsx` | Wrapper animation | Partout |
| `ScrollToTop.tsx` | Scroll automatique | App.tsx |

### Composants Villes (src/components/city/)

| Composant | Description |
|-----------|-------------|
| `CityHeroParallax.tsx` | Hero avec effet parallax et monument/paysage |
| `CityLocalContent.tsx` | Contenu local contextuel par département |
| `CityServicesGrid.tsx` | Grille 8 services avec liens vers ville+service |
| `CityCoverageSection.tsx` | Couverture et communes limitrophes |

### Composants SEO (src/components/SEO/)

| Composant | Description |
|-----------|-------------|
| `Breadcrumbs.tsx` | Fil d'Ariane structuré |
| `ServiceSchema.tsx` | JSON-LD Service + FAQ + Breadcrumb |
| `OrganizationSchema.tsx` | JSON-LD Organization |

### Composants UI (src/components/ui/)

45+ composants Shadcn/UI : `accordion`, `alert`, `avatar`, `badge`, `button`, `card`, `carousel`, `checkbox`, `dialog`, `dropdown-menu`, `form`, `input`, `label`, `popover`, `progress`, `radio-group`, `scroll-area`, `select`, `separator`, `sheet`, `skeleton`, `slider`, `switch`, `table`, `tabs`, `textarea`, `toast`, `tooltip`, etc.

---

## 📊 6. DONNÉES & DATA

### citiesData.ts (125 villes)

```typescript
interface CityData {
  name: string;           // "Paris"
  slug: string;           // "paris"
  department: string;     // "Paris"
  departmentCode: string; // "75"
  region: string;         // "Île-de-France"
  regionSlug: string;     // "ile-de-france"
  population: string;     // "2,1 millions"
  description: string;    // Description SEO
  neighborhoods?: string[]; // Quartiers
  nearbyTowns?: string[];   // Villes voisines
}

// Fonctions exports
getCityBySlug(slug)
getCitiesByRegion(region)
getCitiesByRegionSlug(regionSlug)
getCitiesByDepartment(departmentCode)
getAllCitySlugs()
```

### regionsData.ts (13 régions)

```typescript
interface RegionData {
  name: string;              // "Île-de-France"
  slug: string;              // "ile-de-france"
  description: string;       // Description longue
  seoDescription: string;    // Meta description
  departments: DepartmentData[]; // Liste départements
  mainCities: string[];      // Villes principales
  economicHighlights: string[]; // Points économiques
  clientTypes: string[];     // Types de clients
}
```

### parisArrondissements.ts (20 arrondissements)

```typescript
interface ArrondissementData {
  number: number;          // 1-20
  name: string;            // "1er arrondissement"
  slug: string;            // "paris-1er"
  description: string;     // Description SEO
  monuments: string[];     // Monuments notables
  neighborhoods: string[]; // Quartiers
}
```

### blogData.ts (10 articles)

```typescript
interface BlogArticle {
  id: string;
  slug: string;              // URL-friendly
  title: string;             // Titre article
  excerpt: string;           // Résumé 160 caractères
  content: string;           // Contenu complet
  category: BlogCategory;    // Catégorie
  author: string;            // Auteur
  publishedAt: string;       // Date publication
  readingTime: string;       // Temps lecture
  image: string;             // Image header
  tags: string[];            // Tags SEO
  featured?: boolean;        // Mise en avant
}
```

#### Articles Blog (10)

| Titre | Catégorie | Cible SEO |
|-------|-----------|-----------|
| Comment choisir son système de vidéosurveillance en 2026 | vidéosurveillance | National |
| Les 5 erreurs à éviter lors de l'installation d'une alarme | alarme | National |
| Contrôle d'accès biométrique : guide complet | contrôle-accès | National |
| Maison connectée : par où commencer ? | domotique | National |
| Maintenance préventive : économisez sur le long terme | maintenance | National |
| **Sécurité Commerce Seine-Saint-Denis (93) - Guide Complet** | conseils | **Local 93** |
| **Protection Villa PACA - Sécurité Résidence Secondaire** | conseils | **Local PACA** |
| **Alarme Résidence Île-de-France - Guide Protection** | alarme | **Local IDF** |
| **Vidéosurveillance Entreprise Lyon - Solutions Pro** | vidéosurveillance | **Local Lyon** |
| **Domotique Maison Bordeaux - Guide Maison Connectée** | domotique | **Local Bordeaux** |

---

## 🪝 7. HOOKS PERSONNALISÉS

| Hook | Fichier | Description |
|------|---------|-------------|
| `useAuth` | `useAuth.tsx` | Authentification Supabase |
| `useSEO` | `useSEO.tsx` | Injection meta tags dynamiques + noIndex support |
| `useSmoothScroll` | `useSmoothScroll.tsx` | Navigation fluide vers sections avec mode (quote/intervention) |
| `usePhoneCall` | `usePhoneCall.tsx` | Gestion appel téléphonique |
| `useParallax` | `useParallax.tsx` | Effet parallax sur scroll |
| `useMobile` | `use-mobile.tsx` | Détection viewport mobile |
| `useToast` | `use-toast.ts` | Notifications toast |

---

## 🎨 8. DESIGN SYSTEM

### Variables CSS (index.css)

```css
:root {
  /* Couleurs principales */
  --background: 222 47% 11%;      /* Fond sombre */
  --foreground: 0 0% 95%;         /* Texte clair */
  --primary: 215 100% 50%;        /* Bleu principal */
  --primary-glow: 215 100% 60%;   /* Bleu lumineux */
  --accent: 195 100% 45%;         /* Cyan accent */
  
  /* Surfaces */
  --card: 217 32% 13%;
  --secondary: 217 32% 17%;
  --muted: 215 25% 27%;
  
  /* États */
  --destructive: 0 84% 60%;       /* Rouge erreur */
  --ring: 215 100% 50%;
  --border: 217 32% 20%;
  --input: 217 32% 17%;
  
  /* Radius */
  --radius: 0.5rem;
}
```

### Philosophie Design - Signature Visuelle

Le site utilise une **signature visuelle unique** caractérisée par :
- **Cercles lumineux flottants** avec `blur-3xl` et `animate-pulse-slow`
- **Gradients subtils** sur les backgrounds
- **Effets glassmorphism** avec `backdrop-blur-sm`
- **Animations au scroll** via AnimatedSection et Framer Motion
- **Hover effects** avec `hover:scale-105` et transitions fluides
- **Badges colorés** pour les catégories et services
- **Parallax** sur les heroes des pages villes

### Couleurs d'Accent Services

```typescript
const accentGradients = {
  primary: "from-primary to-accent",
  video: "from-blue-500 to-blue-700",
  alarme: "from-red-500 to-red-700",
  acces: "from-green-500 to-green-700",
  domotique: "from-amber-400 to-amber-600",
  reseau: "from-cyan-500 to-cyan-700",
  maintenance: "from-violet-500 to-violet-700",
  antenne: "from-orange-500 to-orange-700",
  portail: "from-pink-500 to-pink-700",
  installation: "from-teal-500 to-teal-700",
  depannage: "from-rose-500 to-rose-700",
  location: "from-sky-500 to-sky-700"
};
```

---

## 🔍 9. SEO & OPTIMISATIONS

### Meta Tags Dynamiques

Chaque page utilise le hook `useSEO()` :

```typescript
useSEO({
  title: "Vidéosurveillance Professionnelle | HD Connect",
  description: "Installation caméras de surveillance...",
  keywords: "vidéosurveillance, caméras, sécurité",
  canonicalUrl: "https://hdconnect.fr/services/videosurveillance",
  noIndex: false // Pour les pages à ne pas indexer
});
```

### Données Structurées (JSON-LD)

Via les composants SEO :
- `@type: LocalBusiness` - Infos entreprise
- `@type: Organization` - Organisation
- `@type: Service` - Détails service
- `@type: FAQPage` - Questions/réponses (People Also Ask)
- `@type: BreadcrumbList` - Fil d'Ariane
- `@type: Article` - Articles blog

 ### Sitemap.xml (310+ URLs)

```
├── Priority 1.0    → Accueil
├── Priority 0.9    → Hub Services + 8 services principaux
├── Priority 0.85   → 3 prestations + hub régions
├── Priority 0.8    → 13 régions + 8 départements IDF
 ├── Priority 0.75   → 150+ villes + ville+service (métropoles)
 ├── Priority 0.7    → 20 arr. Paris + 9 arr. Lyon + 12 sect. Marseille
├── Priority 0.65   → Blog + 10 articles
└── Priority 0.3    → 2 pages légales
```

### Maillage Interne

| Type de page | Liens émis |
|--------------|------------|
| Page service | → 10 autres services + hub + régions |
| Page région | → Services + départements + villes |
| Page département | → Services + villes du département |
| Page ville | → Région + département + services locaux + villes voisines |
| Page ville+service | → Ville parente + autres services + FAQ contextuelle |

---

## 🎯 10. STRATÉGIE SEO ANSWER-FIRST

### Philosophie

La stratégie "Answer-First" optimise le contenu pour être directement cité par :
- **Google AI Overviews (SGE)**
- **Assistants vocaux (Alexa, Google Assistant, Siri)**
- **ChatGPT et autres LLMs**
- **Featured Snippets (Position 0)**

### Implémentation

1. **Phrases autonomes et citables** intégrées naturellement dans le texte
2. **Données structurées enrichies** avec descriptions Answer-First
3. **FAQ optimisées** pour "People Also Ask"
4. **Format Question → Réponse directe → Développement**

### Exemples

```typescript
// Mauvais (non citable)
"Nous proposons des services de vidéosurveillance de qualité."

// Bon (Answer-First, citable)
"HD Connect installe des systèmes de vidéosurveillance 4K avec accès 
smartphone 24h/24, certifiés NF&A2P, et garantis 5 ans."
```

### Signaux E-E-A-T Intégrés

- **Experience** : "Depuis 2015", "Plus de 1000 installations"
- **Expertise** : "Techniciens certifiés NF&A2P", "Formation continue"
- **Authority** : "Partenaire Hikvision/Dahua", "Certifié APSAD"
- **Trust** : "Garantie 5 ans", "Devis gratuit", "SAV 7j/7"

---

## 💾 11. BACKEND SUPABASE

### Configuration

```
Project ID: bntatxbwyheajskyrtuh
URL: https://bntatxbwyheajskyrtuh.supabase.co
```

### Tables

#### customer_requests

```sql
CREATE TABLE customer_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  -- Infos client
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  
  -- Demande
  request_type request_type NOT NULL, -- 'quote' | 'intervention' | 'contact'
  services text[],
  message text,
  
  -- Localisation
  city text,
  postal_code text,
  
  -- Statut
  status request_status DEFAULT 'new'
);
```

#### user_roles

```sql
CREATE TABLE user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user', -- 'admin' | 'user'
  created_at timestamptz DEFAULT now()
);
```

### Système de Formulaires (Architecture Hybride)

Le site utilise une architecture hybride pour la gestion des leads :
- **Formspree** : Gère l'envoi immédiat des notifications par email à `kamal@hdconnect.fr`.
- **Supabase** : Stocke simultanément chaque demande dans la table `customer_requests` pour une gestion centralisée via le panel Admin.

Cette approche garantit une fiabilité maximale sans dépendre d'une infrastructure d'emailing complexe.

---

## 🚀 12. INSTALLATION & DÉPLOIEMENT

### Installation Locale

```bash
# 1. Cloner le repository
git clone https://github.com/[username]/hdconnect.git
cd hdconnect

# 2. Installer les dépendances
pnpm install

# 3. Configurer l'environnement
cp .env.example .env
# Éditer .env avec vos valeurs

# 4. Lancer en développement
pnpm dev

# 5. Build production
pnpm build
```

### Déploiement Lovable

1. Ouvrir le projet dans Lovable
2. Cliquer sur **Publish** → **Update**
3. Le site est déployé sur `site-polish-joy.lovable.app`

### Domaine Personnalisé

1. Aller dans **Settings** → **Domains**
2. Ajouter `hdconnect.fr`
3. Configurer les DNS chez le registrar

---

## ⚙️ 13. CONFIGURATION

### Variables d'Environnement (.env)

```bash
# Supabase (obligatoire)
VITE_SUPABASE_URL="https://bntatxbwyheajskyrtuh.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="eyJ..."
VITE_SUPABASE_PROJECT_ID="bntatxbwyheajskyrtuh"
```

### Checklist Configuration

- [x] Variables d'environnement configurées
- [x] Supabase connecté
- [x] Architecture Formspree + Supabase opérationnelle
- [ ] Premier utilisateur admin créé
- [ ] Google Analytics 4 installé
- [ ] Sitemap soumis à Google Search Console

---

## 📋 14. ÉTAT DU PROJET - CHECKLIST COMPLÈTE

### 🏠 PAGES PRINCIPALES

| Tâche | Statut | Notes |
|-------|--------|-------|
| Page d'accueil (`/`) | ✅ Fait | Hero, Services, Témoignages, FAQ, Contact |
| Header navigation | ✅ Fait | Logo, Services, Zones, Blog, bouton Devis |
| Footer complet | ✅ Fait | Liens légaux, services, contact |
| Page 404 | ✅ Fait | Design personnalisé |
| Pages légales | ✅ Fait | Mentions légales, Politique confidentialité |
| Page Admin | ✅ Fait | Authentification Supabase |
| Image OG sociale | ✅ Fait | `public/og-image.jpg` (1200x630) |

### 🔧 PAGES SERVICES (11 services)

| Service | Route | Statut |
|---------|-------|--------|
| Hub Services | `/services` | ✅ |
| Vidéosurveillance | `/services/videosurveillance` | ✅ |
| Alarme | `/services/alarme` | ✅ |
| Contrôle d'accès | `/services/controle-acces` | ✅ |
| Réseau | `/services/reseau` | ✅ |
| Domotique | `/services/domotique` | ✅ |
| Maintenance | `/services/maintenance` | ✅ |
| Antenne/Satellite | `/services/antenne-satellite` | ✅ |
| Portails/Parking | `/services/portails-parking` | ✅ |
| Installation | `/services/installation` | ✅ |
| Dépannage | `/services/depannage` | ✅ |
| Location | `/services/location` | ✅ |

### 🗺️ PAGES PIVOT SEO (Géographiques)

| Page | Quantité | Statut |
|------|----------|--------|
| Hub Zones Intervention | 1 | ✅ Fait |
| Pages Régions | 13 | ✅ Fait |
| Pages Départements | 8+ | ✅ Fait |
| Pages Villes | **125** | ✅ Fait (100% IDF + Métropoles) |
| Pages Ville+Service | **1000+** | ✅ Fait |
| Arrondissements Paris | **20** | ✅ Fait |

### 📝 BLOG

| Tâche | Statut |
|-------|--------|
| Page Blog Hub `/blog` | ✅ Fait |
| Pages Articles `/blog/:slug` | ✅ Fait |
| **10 articles SEO** (5 nationaux + 5 locaux) | ✅ Fait |
| JSON-LD Article schema | ✅ Fait |
| Partage social | ✅ Fait |

### 🔒 FORMULAIRES & BACKEND

| Tâche | Statut | Notes |
|-------|--------|-------|
| Supabase connecté | ✅ Fait | Projet `bntatxbwyheajskyrtuh` |
| Table `customer_requests` | ✅ Fait | Stockage leads (Formspree + Supabase) |
| Système Emails | ✅ Fait | Formspree (Notification) + Supabase (Admin) |
| **RESEND_API_KEY** | ❌ Supprimé | Non utilisé (Architecture Formspree) |

### 📊 SEO & TECHNIQUE

| Tâche | Statut |
|-------|--------|
| Meta tags OG | ✅ Fait |
| Twitter Cards | ✅ Fait |
| robots.txt | ✅ Fait |
| sitemap.xml (252 URLs) | ✅ Fait |
| Canonical URLs | ✅ Fait |
| Breadcrumbs | ✅ Fait |
| JSON-LD schemas | ✅ Fait |
| Stratégie Answer-First | ✅ Fait |
| **Google Analytics 4** | ⏳ En attente ID GA4 |

---

### ⏳ TÂCHES EN ATTENTE (Configuration Externe)

| Tâche | Information requise |
|-------|---------------------|
| Google Analytics 4 | ID de suivi (G-XXXXXXXXXX) |
| Google Search Console | Soumission sitemap |
| Premier admin | Email admin pour INSERT dans user_roles |

### 🟢 AMÉLIORATIONS FUTURES (Optionnelles)

| Tâche | Description | Priorité |
|-------|-------------|----------|
| +25 villes | Atteindre 150 villes | 🟡 Moyenne |
| Page Auteurs/Experts | Renforcer E-E-A-T | 🟡 Moyenne |
| Widget avis Google | Reviews clients | 🟢 Basse |
| Chat live | Support instantané | 🟢 Basse |
| Espace client | Portail post-installation | 🟢 Basse |

---

## 📝 15. CHANGELOG

Voir le fichier [`CHANGELOG.md`](./CHANGELOG.md) pour l'historique complet des versions.

### Dernières modifications (v8.5.0 - 05/02/2026)
- ✅ Optimisation Performance : Images 100% WebP
- ✅ SEO Local Étendu : Sitemap à 252 URLs
- ✅ Architecture Hybride : Formspree + Supabase validée
- ✅ Ajout des 6 villes manquantes (Total: 125 villes)
- ✅ Décommentage du script Google Analytics
- ✅ Correction du Project ID Supabase dans toute la doc
- ✅ Pages légales et Schema Speakable opérationnels

---

## 📞 Contact

- **Email:** kamal@hdconnect.fr
- **Téléphone:** 01 84 80 86 52 / 06 27 13 53 04
- **Site:** https://hdconnect.fr

---

**Document créé le 03 Janvier 2026**  
**Version 8.5 - Production Ready**  
**Dernière mise à jour:** 05 Février 2026
