import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  blogArticles, 
  blogCategories, 
  getFeaturedArticles,
  getRecentArticles,
  BlogCategory
} from "@/data/blogData";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag,
  BookOpen,
  Newspaper
} from "lucide-react";

const Blog = () => {
  useSEO({
    title: "Blog Sécurité 2025-2026 | Conseils IA, Vidéosurveillance & Alarme | HD Connect",
    description: "Expertise sécurité 2025-2026 : guides sur la vidéosurveillance IA, alarmes NF&A2P et domotique. Conseils d'experts pour protéger votre domicile et entreprise.",
    keywords: "blog sécurité 2025-2026, conseils vidéosurveillance IA, guide alarme NF&A2P, actualités sécurité électronique, HD Connect blog",
    canonicalUrl: "https://hdconnect.fr/blog",
  });

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
  ];

  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles(6);

  const getCategoryColor = (category: BlogCategory): string => {
    const colors: Record<BlogCategory, string> = {
      "videosurveillance": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "alarme": "bg-red-500/20 text-red-400 border-red-500/30",
      "controle-acces": "bg-green-500/20 text-green-400 border-green-500/30",
      "domotique": "bg-amber-500/20 text-amber-400 border-amber-500/30",
      "conseils": "bg-violet-500/20 text-violet-400 border-violet-500/30",
      "actualites": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "reglementation": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400";
  };

  const getCategoryName = (category: BlogCategory): string => {
    return blogCategories.find(c => c.slug === category)?.name || category;
  };

  // JSON-LD pour le blog
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog HD Connect - Sécurité & Domotique",
    "description": "Articles experts sur la vidéosurveillance, les alarmes, le contrôle d'accès et la domotique.",
    "url": "https://hdconnect.fr/blog",
    "publisher": {
      "@type": "Organization",
      "name": "HD Connect",
      "logo": "https://hdconnect.fr/logo.png"
    },
    "blogPost": blogArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.publishedAt,
      "dateModified": article.updatedAt,
      "author": {
        "@type": "Organization",
        "name": article.author
      },
      "url": `https://hdconnect.fr/blog/${article.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto text-center mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              <span>Blog & Actualités</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Blog <span className="text-primary">Sécurité & Domotique</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Conseils d'experts, guides pratiques et actualités du secteur pour vous aider à protéger efficacement votre domicile et votre entreprise.
            </p>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-8 bg-secondary/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog/categorie/${category.slug}`}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all hover:scale-105 ${getCategoryColor(category.slug as BlogCategory)}`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles à la une */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection animation="fade-up">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  À la une
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article, index) => (
                <AnimatedSection key={article.id} animation="scale-in" delay={index * 100}>
                  <Link to={`/blog/${article.slug}`}>
                    <Card className="h-full hover-lift border-border group cursor-pointer overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <Badge className={`${getCategoryColor(article.category)} border`}>
                            {getCategoryName(article.category)}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.publishedAt).toLocaleDateString('fr-FR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readingTime} min
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tous les articles */}
      <section className="py-16 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Derniers articles
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentArticles.map((article, index) => (
              <AnimatedSection key={article.id} animation="fade-up" delay={index * 50}>
                <Link to={`/blog/${article.slug}`}>
                  <Card className="h-full hover-lift border-border group cursor-pointer">
                    <div className="relative h-40 overflow-hidden rounded-t-lg">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-5">
                      <Badge className={`${getCategoryColor(article.category)} border mb-3`}>
                        {getCategoryName(article.category)}
                      </Badge>
                      <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(article.publishedAt).toLocaleDateString('fr-FR')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readingTime} min
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/20 via-background to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Besoin d'un conseil personnalisé ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nos experts sont à votre disposition pour répondre à toutes vos questions sur la sécurité de votre domicile ou entreprise.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              asChild
            >
              <Link to="/#quote">
                Demander un devis gratuit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
