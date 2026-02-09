import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogArticles, BlogCategory } from "@/data/blogData";

/**
 * Section CTA Blog contextuel pour les pages services
 * Affiche les articles liés au service concerné
 */

interface BlogCTASectionProps {
  /** Catégorie(s) d'articles à afficher */
  categories: BlogCategory[];
  /** Titre de la section (optionnel) */
  title?: string;
  /** Nombre max d'articles à afficher */
  maxArticles?: number;
}

const BlogCTASection = ({ 
  categories, 
  title = "Nos Guides et Conseils", 
  maxArticles = 3 
}: BlogCTASectionProps) => {
  // Filtrer les articles par catégorie
  const relatedArticles = blogArticles
    .filter(article => categories.includes(article.category))
    .slice(0, maxArticles);

  // Si pas d'articles, afficher un CTA général vers le blog
  if (relatedArticles.length === 0) {
    return (
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Découvrez Notre Blog Expert
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Guides pratiques, conseils d'experts et actualités du secteur de la sécurité pour vous aider à faire les bons choix.
            </p>
            <Link to="/blog">
              <Button>
                Visiter le blog
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Blog Expert</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nos experts partagent leurs conseils et guides pratiques pour vous aider à sécuriser efficacement vos locaux.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {relatedArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${article.slug}`}>
                <Card className="h-full hover-lift overflow-hidden group cursor-pointer">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {article.readingTime} min de lecture
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Voir tous les articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCTASection;
