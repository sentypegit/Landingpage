import { Check } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Unprecedented Scale",
      description: "Our platform monitors 50,000+ publishers globally, from major financial news outlets to local papers covering targeted industries like refineries and agriculture."
    },
    {
      title: "Portfolio-Wide Coverage",
      description: "Unlike quantitative strategies that focus on specific areas, our platform provides comprehensive analysis across your entire portfolio."
    },
    {
      title: "Advanced Analytics",
      description: "Sophisticated sentiment analysis, correlation coefficients, and predictive signals that go beyond traditional news monitoring."
    },
    {
      title: "Dedicated Service",
      description: "An everlasting service dedicated to financial news intelligence, continuously improving and expanding rather than competing for internal resources."
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Modern financial analytics dashboard with charts and data visualization" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="benefits-image"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Beyond Internal Solutions</h2>
            <p className="text-xl text-accent-gray mb-8">
              While many institutions rely on internal news platforms, Sentype delivers unmatched scale, 
              modularity, and insights that no in-house solution can match.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent-orange rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-accent-gray">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
