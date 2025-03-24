
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Battery, Bluetooth, Music, Volume2, Zap } from 'lucide-react';

const features = [
  {
    id: 'sound',
    title: 'Superior Sound',
    description: 'Engineered with 45mm drivers for exceptional audio clarity across all frequencies. Experience music exactly as the artist intended.',
    icon: Music,
    image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'battery',
    title: 'All-Day Battery',
    description: 'Enjoy up to 40 hours of continuous playback on a single charge. Quick-charge technology provides 5 hours of listening in just 10 minutes.',
    icon: Battery,
    image: 'https://images.unsplash.com/photo-1606127193309-d641e709a323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'connectivity',
    title: 'Seamless Connectivity',
    description: 'Bluetooth 5.2 technology ensures stable, high-quality connection up to 30 feet. Pair with multiple devices simultaneously.',
    icon: Bluetooth,
    image: 'https://images.unsplash.com/photo-1546435770-a3e736e2b1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'comfort',
    title: 'Luxurious Comfort',
    description: 'Memory foam ear cushions wrapped in premium materials provide comfort for extended listening sessions while isolating ambient noise.',
    icon: Volume2,
    image: 'https://images.unsplash.com/photo-1590658006821-04f4008d5717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'performance',
    title: 'Lightning Fast',
    description: 'State-of-the-art processors eliminate lag and provide instantaneous response for gaming and video calls.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

const FeatureCard = ({ feature, isActive, onClick }: { 
  feature: typeof features[0], 
  isActive: boolean, 
  onClick: () => void 
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-start p-5 text-left rounded-xl transition-all duration-300 border',
        isActive ? 'border-black/20 shadow-sm bg-white' : 'border-transparent hover:bg-white/50'
      )}
    >
      <div className={cn(
        'rounded-full p-2.5 mr-4',
        isActive ? 'bg-black text-white' : 'bg-black/5 text-black'
      )}>
        <feature.icon size={20} />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
        <p className={cn(
          'text-sm transition-all duration-300',
          isActive ? 'text-muted-foreground' : 'text-muted-foreground/70 line-clamp-1'
        )}>
          {feature.description}
        </p>
      </div>
    </button>
  );
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const currentFeature = features.find(f => f.id === activeFeature);

  // Intersection observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.feature-animate');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="features" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 feature-animate opacity-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">Masterfully Crafted</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every detail designed with purpose. Every component selected for exceptional performance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-3 feature-animate opacity-0" style={{ animationDelay: '0.2s' }}>
              {features.map(feature => (
                <FeatureCard
                  key={feature.id}
                  feature={feature}
                  isActive={activeFeature === feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                />
              ))}
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="order-1 lg:order-2 relative feature-animate opacity-0" 
            style={{ animationDelay: '0.4s' }}
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-black/5 shadow-lg">
              {features.map(feature => (
                <div
                  key={feature.id}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-700',
                    activeFeature === feature.id ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-medium mb-2">{currentFeature?.title}</h3>
                <p className="text-white/80 text-sm">{currentFeature?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
