import { TrendingUp, FileText, Bell } from "lucide-react";

export default function Personas() {
  const personas = [
    {
      icon: TrendingUp,
      title: "For Traders",
      description: "Get the rigorous details you need with advanced analytics and real-time insights.",
      features: [
        "Sentiment volume analytics on article topics",
        "Subjectivity analysis for content filtering",
        "Market correlation data and historical impact",
        "Real-time alerts for security-affecting articles"
      ]
    },
    {
      icon: FileText,
      title: "For Researchers",
      description: "Comprehensive analysis tools and historical data for deep market insights.",
      features: [
        "Time frame summarizations for securities",
        "Article impact signals and predictions",
        "Correlation coefficients and trend analysis",
        "Knowledge graph modularity for research"
      ]
    },
    {
      icon: Bell,
      title: "For Associates",
      description: "Streamlined alerts and consolidated reporting to maximize efficiency.",
      features: [
        "Brokerage-connected investment alerts",
        "Consolidated multi-publisher topic alerts",
        "Summarized perspective reporting",
        "Intelligent noise reduction"
      ]
    }
  ];

  return (
    <section id="personas" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tailored for Every Role</h2>
          <p className="text-xl text-accent-gray max-w-3xl mx-auto">
            Whether you're executing trades, conducting research, or managing portfolios, 
            Sentype provides specialized tools for your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => {
            const IconComponent = persona.icon;
            return (
              <div 
                key={index}
                className="bg-dark-card p-8 rounded-xl border border-dark-border"
                data-testid={`persona-card-${index}`}
              >
                <div className="w-16 h-16 bg-accent-orange/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-accent-orange" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{persona.title}</h3>
                <p className="text-accent-gray mb-6">{persona.description}</p>
                
                <ul className="space-y-3">
                  {persona.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-orange rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
