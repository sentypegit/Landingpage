import Navigation from "@/components/layout/navigation";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Benefits from "@/components/sections/benefits";
import Personas from "@/components/sections/personas";
import Demo from "@/components/sections/demo";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="font-inter bg-dark-bg text-white min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <Benefits />
      <Personas />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}
