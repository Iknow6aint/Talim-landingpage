import DigitalEcosystem from "@/components/DigitalEcosystem";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowTalimWorks from "@/components/HowTalimWorks";
import ManagementSection from "@/components/Management";
import SlideshowTwo from "@/components/SlideshowTwo";
import FaqSection from "@/components/FaqSection";
import Description from "@/components/Description";

export default function Home() {
  return (
    <main className="space-y-2">
      <Header />
      <Hero />
<Description/>
      <SlideshowTwo />
      <HowTalimWorks />
      <DigitalEcosystem />
      <ManagementSection />
      <CallToAction />
      <FaqSection />
      <Footer />
    </main>
  );
}
