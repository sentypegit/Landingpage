import { Button } from "@/components/ui/button";

export default function Demo() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="demo" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-accent-orange/10 to-slate-800/50 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">See Sentype in Action</h2>
          <p className="text-xl text-accent-gray mb-8 max-w-3xl mx-auto">
            Experience the power of comprehensive financial news intelligence. 
            Book a personalized demo and discover how Sentype can transform your market analysis.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-dark-card/50 p-6 rounded-xl" data-testid="demo-stat-setup">
              <div className="text-3xl font-bold text-accent-orange mb-2">15 min</div>
              <div className="text-accent-gray">Setup Time</div>
            </div>
            <div className="bg-dark-card/50 p-6 rounded-xl" data-testid="demo-stat-demo">
              <div className="text-3xl font-bold text-accent-orange mb-2">Free</div>
              <div className="text-accent-gray">Demo Available</div>
            </div>
            <div className="bg-dark-card/50 p-6 rounded-xl" data-testid="demo-stat-support">
              <div className="text-3xl font-bold text-accent-orange mb-2">24/7</div>
              <div className="text-accent-gray">Support</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              data-testid="button-schedule-demo"
            >
              Schedule Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
