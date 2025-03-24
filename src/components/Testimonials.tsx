
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    content: "The sound quality is astonishing. I can pick up details in my favorite songs that I've never noticed before. Worth every penny.",
    author: "Alex Johnson",
    title: "Audio Engineer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    content: "Incredibly comfortable for long listening sessions. I wore them for a 10-hour flight and forgot they were on my head. The noise cancellation is phenomenal.",
    author: "Sophia Chen",
    title: "Travel Blogger",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    content: "The minimalist design catches everyone's attention. But it's the crystal clear audio that keeps me using them daily. Battery life is exceptional.",
    author: "David Kim",
    title: "Product Designer",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 4,
    content: "As a professional musician, I need accuracy and clarity. These headphones deliver both, plus they're surprisingly durable for daily studio use.",
    author: "Emma Roberts",
    title: "Recording Artist",
    rating: 4,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToTestimonial = (index: number) => {
    if (index < 0) {
      setActiveIndex(testimonials.length - 1);
    } else if (index >= testimonials.length) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (containerRef.current && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeIndex]);

  // For intersection observer animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.testimonial-animate');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 testimonial-animate opacity-0">
          <div className="inline-block mb-4 px-3 py-1 bg-black/5 rounded-full text-xs font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">What our customers say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it — hear from those who've experienced Lumina.
          </p>
        </div>
        
        <div className="relative testimonial-animate opacity-0" style={{ animationDelay: '0.2s' }}>
          <div 
            ref={containerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                ref={el => itemRefs.current[index] = el}
                className={cn(
                  'min-w-full sm:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] pr-6 snap-start',
                )}
              >
                <div className={cn(
                  'h-full rounded-xl p-6 border transition-all duration-300',
                  activeIndex === index ? 'border-black/20 shadow-sm bg-white' : 'border-black/10 bg-white/50'
                )}>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        size={16} 
                        fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                        className={i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all',
                  activeIndex === index ? 'bg-black w-8' : 'bg-black/20'
                )}
                onClick={() => scrollToTestimonial(index)}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 hidden md:block">
            <button 
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm"
              onClick={() => scrollToTestimonial(activeIndex - 1)}
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 hidden md:block">
            <button 
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm"
              onClick={() => scrollToTestimonial(activeIndex + 1)}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
