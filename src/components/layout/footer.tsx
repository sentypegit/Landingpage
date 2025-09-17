import { Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src="/Logo_no_background.png" alt="Logo" className="h-9" />
            </div>
            <p className="text-accent-gray mb-4 max-w-md">
              The most comprehensive financial news intelligence platform, delivering unprecedented 
              scale and insights for modern financial institutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-accent-gray hover:text-accent-orange transition-colors"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-accent-gray hover:text-accent-orange transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-accent-gray">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-features">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-pricing">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-api">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-documentation">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-accent-gray">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-about">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-careers">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-dark-border mt-8 pt-8 text-center text-accent-gray">
          <p>&copy; 2024 Sentype. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
