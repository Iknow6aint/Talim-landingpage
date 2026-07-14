import Navbar from "@/components/Navbar";
import CapabilityMarquee from "@/components/CapabilityMarquee";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductShowcase from "@/components/ProductShowcase";
import MobileShowcase from "@/components/MobileShowcase";
import ConnectedLayers from "@/components/ConnectedLayers";
import DataDrivenSection from "@/components/DataDrivenSection";
import VerifiedRecords from "@/components/VerifiedRecords";
import RolePortals from "@/components/RolePortals";
import RealResults from "@/components/RealResults";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import BoldStatement from "@/components/BoldStatement";

export default function Home() {
  return (
    <main className="talim-soft-contrast overflow-x-clip">
      <Navbar />
      <CapabilityMarquee />
      <Hero />
      <TrustBar />
      <ProductShowcase />
      <MobileShowcase />
      <ConnectedLayers />
      <RolePortals />
      <RealResults />
      <DataDrivenSection />
      <VerifiedRecords />
      <BoldStatement />
      <FaqSection />
      <Footer />
    </main>
  );
}
