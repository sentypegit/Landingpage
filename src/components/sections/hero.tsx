import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Financial News Intelligence at{" "}
              <span className="text-accent-orange">Unprecedented Scale</span>
            </h1>
            <p className="text-xl text-accent-gray mb-8 leading-relaxed">
              The most comprehensive financial news curation platform with detailed insights, 
              real-time analytics, and an ever-growing archive that outperforms any internal 
              solution in scale, modularity, and depth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact}
                className="bg-accent-orange hover:brightness-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                data-testid="button-schedule-demo"
              >
                Schedule a Demo
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-dark-border">
              <div>
                <div className="text-3xl font-bold text-accent-orange" data-testid="stat-publishers">
                  50,000+
                </div>
                <div className="text-sm text-accent-gray">Publishers Tracked</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-orange" data-testid="stat-articles">
                  2M+
                </div>
                <div className="text-sm text-accent-gray">Articles Daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-orange" data-testid="stat-latency">
                  &lt;500ms
                </div>
                <div className="text-sm text-accent-gray">Alert Latency</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Modern financial trading floor with multiple monitors" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
