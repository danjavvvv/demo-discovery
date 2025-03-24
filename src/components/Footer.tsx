
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4 lg:col-span-5">
            <a href="/" className="text-xl md:text-2xl font-display font-medium tracking-tight inline-block mb-4">
              Lumina
            </a>
            <p className="text-muted-foreground max-w-md">
              Delivering exceptional audio experiences through precision engineering and thoughtful design. Crafted for those who appreciate the difference.
            </p>
            
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-8 lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="font-medium text-sm mb-3">Products</h3>
                <ul className="space-y-2">
                  {['Headphones', 'Earbuds', 'Speakers', 'Accessories', 'Limited Editions'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-sm mb-3">Support</h3>
                <ul className="space-y-2">
                  {['Help Center', 'Contact Us', 'Warranty', 'Returns', 'User Guide'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-sm mb-3">Company</h3>
                <ul className="space-y-2">
                  {['About Us', 'Careers', 'News', 'Sustainability', 'Terms of Service', 'Privacy Policy'].map(item => (
                    <li key={item}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Lumina Audio. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
