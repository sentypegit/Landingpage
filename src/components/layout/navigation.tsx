import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-dark-bg/95 backdrop-blur-sm border-b border-dark-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <img src="/Logo_no_background.png" alt="Logo" className="h-10" />
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-accent-gray hover:text-white transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-accent-gray hover:text-white transition-colors"
              data-testid="nav-benefits"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('personas')}
              className="text-accent-gray hover:text-white transition-colors"
              data-testid="nav-solutions"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-accent-gray hover:text-white transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <Button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-accent-orange hover:brightness-90 text-white px-6 py-2 rounded-lg transition-colors font-medium"
            data-testid="button-request-demo-nav"
          >
            Request Demo
          </Button>
          
          <button 
            className="md:hidden text-accent-gray"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden border-t border-dark-border bg-dark-bg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-accent-gray hover:text-white transition-colors"
                data-testid="mobile-nav-features"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="block w-full text-left px-3 py-2 text-accent-gray hover:text-white transition-colors"
                data-testid="mobile-nav-benefits"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('personas')}
                className="block w-full text-left px-3 py-2 text-accent-gray hover:text-white transition-colors"
                data-testid="mobile-nav-solutions"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-accent-gray hover:text-white transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 bg-accent-orange hover:brightness-90 text-white font-medium"
                data-testid="button-request-demo-mobile"
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
