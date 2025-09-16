import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface JourneyStep {
  title: string;
  description: string;
  position: number; // 0 to 100 - percentage along the timeline
}

const journeySteps: JourneyStep[] = [
  {
    title: "Discovery",
    description: "First encounter with our platform's powerful capabilities",
    position: 15
  },
  {
    title: "Integration",
    description: "Seamless setup and API implementation",
    position: 35
  },
  {
    title: "Adoption",
    description: "Team-wide platform utilization begins",
    position: 55
  },
  {
    title: "Optimization",
    description: "Fine-tuning and expanding usage",
    position: 75
  },
  {
    title: "Growth",
    description: "Achieving significant ROI and scaling operations",
    position: 90
  }
];

const generateCandlesticks = () => {
  const candlesticks = [];
  const totalSticks = 25; // Reduced number of candlesticks for more spacing
  const spacing = 4; // Increased spacing between candlesticks
  
  for (let i = 0; i < totalSticks; i++) {
    const isHighlighted = journeySteps.some(
      step => Math.abs(step.position - (i / totalSticks * 100)) < 4
    );
    
    // Create more upward trend for positions > 75%
    const position = i / totalSticks * 100;
    const heightMultiplier = position > 75 ? 1.5 : 1;
    
    const height = Math.random() * 30 * heightMultiplier + 20;
    const wickHeight = Math.random() * 15 + 10;
    
    candlesticks.push({
      x: i * spacing, // Using explicit spacing value
      height,
      wickHeight,
      isHighlighted,
      isGreen: Math.random() > 0.4 || position > 75
    });
  }
  
  return candlesticks;
};

export default function ChartJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress into chart progress
  const chartProgress = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]); // Reversed direction
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  // Use this to control scroll behavior
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1]);
  
  const candlesticks = generateCandlesticks();

  return (
    <div 
      ref={ref} 
      className="min-h-screen py-20 bg-dark-bg relative overflow-hidden"
      id="chart-journey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ opacity }}
          className="relative sticky top-0 h-screen flex flex-col pt-20"
        >
          <h2 className="text-4xl font-bold text-center mb-16 w-full">
            Your Journey to Success
          </h2>
          
          {/* Chart Container */}
          <div className="relative h-[400px] mb-8 w-full">
            {/* Chart Background */}
            <div className="absolute inset-0 border-b border-dark-border">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full border-t border-dark-border opacity-10"
                  style={{ top: `${(i + 1) * 20}%` }}
                />
              ))}
            </div>

            {/* Candlesticks */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              <motion.g
                initial={{ x: "100%" }}
                style={{ x: chartProgress }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {candlesticks.map((stick, i) => (
                  <g key={i} transform={`translate(${stick.x}, 0)`}>
                    {/* Candlestick body */}
                    <rect
                      x="-6"
                      y={(400 - stick.height) / 2}
                      width="12"
                      height={stick.height}
                      className={`${
                        stick.isGreen ? 'fill-green-500' : 'fill-red-500'
                      } ${stick.isHighlighted ? 'opacity-100' : 'opacity-30'}`}
                      rx="2"
                    />
                    {/* Wicks */}
                    <line
                      x1="0"
                      y1={(400 - stick.height - stick.wickHeight) / 2}
                      x2="0"
                      y2={(400 + stick.height + stick.wickHeight) / 2}
                      stroke={stick.isGreen ? '#22c55e' : '#ef4444'}
                      strokeWidth="2"
                      className={stick.isHighlighted ? 'opacity-100' : 'opacity-30'}
                    />
                  </g>
                ))}
              </motion.g>
            </svg>

            {/* Journey Step Annotations */}
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className="absolute top-0 transform -translate-y-full"
                style={{
                  left: `${step.position}%`,
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.2 + index * 0.15, 0.3 + index * 0.15],
                    [0, 0, 1]
                  )
                }}
              >
                <div className="bg-accent-orange text-white p-4 rounded-lg shadow-lg max-w-[200px] mb-4">
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm">{step.description}</p>
                </div>
                <div className="w-px h-8 bg-accent-orange mx-auto" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
