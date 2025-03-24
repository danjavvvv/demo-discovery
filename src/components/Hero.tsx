
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const productImgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (productImgRef.current && textRef.current) {
        const scrollY = window.scrollY;
        productImgRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
        textRef.current.style.transform = `translateY(${scrollY * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="product" className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div ref={textRef} className="space-y-8 lg:pr-12">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-black/5 rounded-full text-xs font-medium">
                Introducing Lumina
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 tracking-tight animate-fade-in">
                Perfect sound, thoughtfully designed.
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                Experience audio as it was meant to be heard. Crafted with precision for those who demand the extraordinary.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <button className="px-6 py-3 bg-black text-white rounded-md font-medium transition-all hover:bg-black/90">
                Experience Lumina
              </button>
              <button className="px-6 py-3 border border-black rounded-md font-medium transition-all hover:bg-black/5">
                Discover Features
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div>
                <div className="text-2xl font-display font-medium">40h</div>
                <div className="text-sm text-muted-foreground">Battery Life</div>
              </div>
              <div>
                <div className="text-2xl font-display font-medium">45mm</div>
                <div className="text-sm text-muted-foreground">Driver Size</div>
              </div>
              <div>
                <div className="text-2xl font-display font-medium">3.2oz</div>
                <div className="text-sm text-muted-foreground">Ultra Light</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] aspect-square relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary/50 to-accent/30 blur-3xl animate-pulse-subtle" />
              <img 
                ref={productImgRef}
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Lumina Headphones" 
                className="w-full h-full object-contain relative z-10 animate-float"
              />
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-black/10 animate-bounce"
      >
        <ChevronDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
