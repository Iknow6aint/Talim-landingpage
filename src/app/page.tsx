import DigitalEcosystem from "@/components/DigitalEcosystem";
import EarlyAccess from "@/components/EarlyAccess";
import FaqSection from "@/components/FaqSection";
import FeaturesSlider from "@/components/FeaturesSlider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowTalimWorks from "@/components/HowTalimWorks";
import ManagementSection from "@/components/Management";
import Slideshow from "@/components/Slideshow";

export default function Home() {
  return (
    <main className="bg-gray-100 space-y-8">
      <Header />
      <Hero />
      <Slideshow/>
      <HowTalimWorks/>
      <DigitalEcosystem/>
      <ManagementSection/>
   
     
      <FaqSection/>
      <Footer/>

    </main>
    
  );
}
