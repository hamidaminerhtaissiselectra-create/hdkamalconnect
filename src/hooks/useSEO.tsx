import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

export const useSEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl,
  ogImage = 'https://hdconnect.fr/og-image.png',
  ogType = 'website',
  noIndex = false
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Helper function to set meta tag
    const setMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Gestion du noindex pour les pages dynamiques
    if (noIndex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      // Supprimer le noindex s'il existe
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }

    // Update meta description
    setMetaTag('description', description);
    
    // Update meta keywords
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Update canonical URL - Ne pas définir de canonical pour les pages noindex
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonicalUrl && !noIndex) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', canonicalUrl);
    } else if (canonical && noIndex) {
      canonical.remove();
    }

    // Open Graph tags
    if (!noIndex) {
      setMetaTag('og:title', title, true);
      setMetaTag('og:description', description, true);
      setMetaTag('og:type', ogType, true);
      setMetaTag('og:image', ogImage, true);
      setMetaTag('og:site_name', 'HD Connect', true);
      setMetaTag('og:locale', 'fr_FR', true);
      if (canonicalUrl) {
        setMetaTag('og:url', canonicalUrl, true);
      }

      // Twitter Card tags
      setMetaTag('twitter:card', 'summary_large_image');
      setMetaTag('twitter:site', '@hdconnect');
      setMetaTag('twitter:title', title);
      setMetaTag('twitter:description', description);
      setMetaTag('twitter:image', ogImage);
    }
    
    // Cleanup function
    return () => {
      document.title = 'HD Connect - Sécurité Intelligente';
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, noIndex]);
};

export default useSEO;
