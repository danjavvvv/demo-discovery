
import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Headphones on colorful background',
    width: 'col-span-12 md:col-span-6 lg:col-span-4',
  },
  {
    src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Black headphones on dark background',
    width: 'col-span-12 md:col-span-6 lg:col-span-4',
  },
  {
    src: 'https://images.unsplash.com/photo-1590658006821-04f4008d5717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Person wearing headphones',
    width: 'col-span-12 md:col-span-6 lg:col-span-4',
  },
  {
    src: 'https://images.unsplash.com/photo-1606127193309-d641e709a323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'White headphones on white background',
    width: 'col-span-12 md:col-span-6',
  },
  {
    src: 'https://images.unsplash.com/photo-1546435770-a3e736e2b1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    alt: 'Close-up of headphones',
    width: 'col-span-12 md:col-span-6',
  },
];

const GalleryImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={imgRef} 
      className="overflow-hidden rounded-lg opacity-0" 
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="aspect-square lg:aspect-auto lg:h-80 xl:h-96 relative overflow-hidden group">
        <img 
          src={src} 
          alt={alt} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm">{alt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 bg-black/5 rounded-full text-xs font-medium">
            Gallery
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">Designed for perfection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore Lumina from every angle. Exquisite craftsmanship meets uncompromising attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div key={index} className={cn(image.width)}>
              <GalleryImage src={image.src} alt={image.alt} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
