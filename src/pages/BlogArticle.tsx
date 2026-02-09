import { useParams, Link, Navigate } from "react-router-dom";
import DOMPurify from "dompurify";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/SEO/Breadcrumbs";
import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  getArticleBySlug, 
  getRelatedArticles,
  blogCategories,
  BlogCategory
} from "@/data/blogData";
import { 
  ArrowLeft,
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  User
} from "lucide-react";

/**
 * SECURITY NOTE: Blog content is currently static and hardcoded in blogData.ts.
 * If blog content is ever sourced from a database or user input, ensure proper
 * sanitization continues to be applied via DOMPurify.
 */

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);

  useSEO({
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.tags.join(", "),
    canonicalUrl: `https://hdconnect.fr/blog/${article.slug}`,
  });

  const breadcrumbItems = [
    { name: "Blog", url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ];

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

  // JSON-LD pour l'article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt,
    "author": {
      "@type": "Organization",
      "name": article.author,
      "url": "https://hdconnect.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HD Connect",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hdconnect.fr/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hdconnect.fr/blog/${article.slug}`
    },
    "keywords": article.tags.join(", "),
    "articleSection": getCategoryName(article.category),
    "wordCount": article.content.split(/\s+/).length,
    "timeRequired": `PT${article.readingTime}M`
  };

  const shareUrl = `https://hdconnect.fr/blog/${article.slug}`;
  const shareText = article.title;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-primary/10 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto mt-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>

            <Badge className={`${getCategoryColor(article.category)} border mb-4`}>
              {getCategoryName(article.category)}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readingTime} min de lecture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image principale */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contenu de l'article */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_250px] gap-8">
              {/* Article principal */}
              <article className="prose prose-lg prose-invert max-w-none">
                <div 
                  className="text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: DOMPurify.sanitize(
                      article.content
                        .replace(/## /g, '<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">')
                        .replace(/### /g, '<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">')
                        .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4">')
                        .replace(/\n- /g, '</p><li class="text-muted-foreground ml-4">')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>'),
                      { 
                        ALLOWED_TAGS: ['h2', 'h3', 'p', 'li', 'strong', 'em', 'a', 'ul', 'ol', 'br'],
                        ALLOWED_ATTR: ['class', 'href', 'target', 'rel']
                      }
                    )
                  }} 
                />
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Partage */}
                <Card className="border-border">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Partager
                    </h3>
                    <div className="flex gap-2">
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 hover:bg-blue-600/30 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-sky-600/20 flex items-center justify-center text-sky-400 hover:bg-sky-600/30 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-blue-800/20 flex items-center justify-center text-blue-300 hover:bg-blue-800/30 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card className="border-border">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="text-muted-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* CTA */}
                <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-accent/10">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-foreground mb-2">
                      Besoin d'un devis ?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Nos experts sont à votre disposition
                    </p>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent"
                      asChild
                    >
                      <Link to="/#quote">
                        Devis gratuit
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Articles connexes */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Articles connexes
                </h2>
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relArticle, index) => (
                  <AnimatedSection key={relArticle.id} animation="scale-in" delay={index * 100}>
                    <Link to={`/blog/${relArticle.slug}`}>
                      <Card className="h-full hover-lift border-border group cursor-pointer">
                        <div className="relative h-32 overflow-hidden rounded-t-lg">
                          <img 
                            src={relArticle.image} 
                            alt={relArticle.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm">
                            {relArticle.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {relArticle.readingTime} min
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogArticle;
