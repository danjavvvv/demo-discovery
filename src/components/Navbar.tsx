
import { useState, useEffect } from 'react';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        isScrolled ? "py-2 glass-panel shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-xl md:text-2xl font-display font-medium tracking-tight">
          Lumina
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Product', 'Features', 'Gallery', 'Testimonials'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="font-medium text-sm opacity-80 hover:opacity-100 transition-opacity link-hover"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-5 py-2 text-sm font-medium transition-all hover:bg-black hover:text-white border border-black rounded-md">
            Buy Now
          </button>
          
          <button 
            className="block md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 z-50 bg-black/95 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col space-y-8 text-center">
            {['Product', 'Features', 'Gallery', 'Testimonials'].map((item) => (
              <li key={item} className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="font-display text-2xl text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <button className="px-8 py-3 text-base font-medium bg-white text-black rounded-md">
                Buy Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
