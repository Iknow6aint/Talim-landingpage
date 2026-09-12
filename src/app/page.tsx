import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PlatformPillars from "@/components/PlatformPillars";
import CapabilityMarquee from "@/components/CapabilityMarquee";
import InstitutionTypes from "@/components/InstitutionTypes";
import ProductShowcase from "@/components/ProductShowcase";
import ConnectedLayers from "@/components/ConnectedLayers";
import RolePortals from "@/components/RolePortals";
import RealResults from "@/components/RealResults";
import DataDrivenSection from "@/components/DataDrivenSection";
import MobileShowcase from "@/components/MobileShowcase";
import VerifiedRecords from "@/components/VerifiedRecords";
import FaqSection from "@/components/FaqSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <PlatformPillars />
        <CapabilityMarquee />
        <InstitutionTypes />
        <ProductShowcase />
        <ConnectedLayers />
        <RolePortals />
        <RealResults />
        <DataDrivenSection />
        {/* <Testimonials /> goes here once approved, attributed quotes replace its placeholders. */}
        <MobileShowcase />
        <VerifiedRecords />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
