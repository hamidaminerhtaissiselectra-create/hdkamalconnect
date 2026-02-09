import { Card, CardContent } from "@/components/ui/card";
import { content } from "@/data/content";
import { Award, Users, Clock, Shield, Zap, ThumbsUp } from "lucide-react";
import aboutTeamImage from "@/assets/about-team.webp";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useParallax";
import { useEffect, useState } from "react";

const iconMap: Record<number, React.ComponentType<{ className?: string }>> = {
  0: Award,
  1: Users,
  2: Clock,
};

const values = [
  {
    icon: Shield,
    title: "Expertise",
    description: "10 ans d'expérience dans le domaine de la sécurité électronique."
  },
  {
    icon: Zap,
    title: "Réactivité",
    description: "Intervention rapide en Île-de-France sous 24 à 48 heures."
  },
  {
    icon: ThumbsUp,
    title: "Qualité",
    description: "Utilisation exclusive de matériel certifié et de marques premium."
  }
];

const About = () => {
  const aboutContent = content.about;
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: valuesRef, visibleItems: valuesVisible } = useStaggeredAnimation(3, 150);
  const { ref: statsRef, visibleItems: statsVisible } = useStaggeredAnimation(3, 150);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations with Parallax */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/8 via-accent/5 to-transparent rounded-bl-full"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/8 via-primary/5 to-transparent rounded-tr-full"
        style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
      ></div>
      {/* Animated dots */}
      <div className="absolute inset-0 pattern-dots opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={headerRef}
            className={`transition-all duration-700 ${headerVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="badge-primary mb-4">
              <Award className="w-4 h-4" />
              <span>À Propos de HD Connect</span>
            </div>
            
            <h2 className="section-title text-center md:text-left mb-4">
              {aboutContent.title}
            </h2>
            
            <div className="space-y-3 text-muted-foreground text-sm md:text-base text-center md:text-left mb-6">
              {aboutContent.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>

            {/* Values Grid with staggered animation */}
            <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              {values.map((value, index) => {
                const gradients = [
                  'from-blue-500/10 to-cyan-500/10 border-blue-500/20 hover:border-blue-500/40',
                  'from-orange-500/10 to-amber-500/10 border-orange-500/20 hover:border-orange-500/40',
                  'from-green-500/10 to-emerald-500/10 border-green-500/20 hover:border-green-500/40'
                ];
                const iconGradients = [
                  'from-blue-500 to-cyan-500',
                  'from-orange-500 to-amber-500',
                  'from-green-500 to-emerald-500'
                ];
                return (
                  <div 
                    key={index}
                    className={`p-4 rounded-xl bg-gradient-to-br ${gradients[index]} border transition-all duration-500 hover:scale-105 hover:shadow-lg group ${valuesVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${iconGradients[index]} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Stats & Image */}
          <div className="space-y-6">
            {/* Team Image with parallax hover */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <img 
                src={aboutTeamImage} 
                alt="Équipe HD Connect - Experts en sécurité"
                className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:translate-y-[-4px]">
                <p className="text-white font-semibold text-lg">Notre équipe d'experts</p>
                <p className="text-white/80 text-sm">Professionnels certifiés à votre service</p>
              </div>
            </div>

            {/* Stats Grid with staggered animation */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4">
              {aboutContent.stats.map((stat, index) => {
                const Icon = iconMap[index] || Award;
                return (
                  <Card 
                    key={index} 
                    className={`stats-card border-border/50 transition-all duration-500 hover:scale-105 hover:shadow-xl ${statsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 hover:scale-110">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;