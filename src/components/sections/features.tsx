import { BarChart, Globe, Zap, Archive, CheckCircle, Heart } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Advanced sentiment analysis and volume tracking across articles with immediate correlation to market movements and historical impact assessment."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Comprehensive publisher network spanning international markets, local papers, and specialized industry publications for complete market intelligence."
    },
    {
      icon: Zap,
      title: "Instant Alerts",
      description: "Lightning-fast notification system that identifies market-moving news the moment it breaks, with intelligent filtering and consolidation."
    },
    {
      icon: Archive,
      title: "Historical Archive",
      description: "Extensive searchable database of financial news with advanced analytics to understand long-term trends and historical market reactions."
    },
    {
      icon: CheckCircle,
      title: "Smart Filtering",
      description: "AI-powered content curation that eliminates noise and focuses on articles with genuine market impact potential based on your portfolio."
    },
    {
      icon: Heart,
      title: "Knowledge Graph",
      description: "Modular knowledge graph system creating robust indirect newsfeeds that identify related stories and emerging market narratives."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Comprehensive News Intelligence</h2>
          <p className="text-xl text-accent-gray max-w-3xl mx-auto">
            Our platform delivers unmatched scale and sophistication in financial news analysis, 
            providing the insights your firm needs to stay ahead of the market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-dark-card p-8 rounded-xl border border-dark-border hover:border-accent-orange/50 transition-colors"
                data-testid={`feature-card-${index}`}
              >
                <div className="w-12 h-12 bg-accent-orange/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-accent-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-accent-gray">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
