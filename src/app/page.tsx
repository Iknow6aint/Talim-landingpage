import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProblemStatement from "@/components/ProblemStatement";
import PlatformOverview from "@/components/PlatformOverview";
import InstitutionTypes from "@/components/InstitutionTypes";
import DataDrivenSection from "@/components/DataDrivenSection";
import VerifiedRecords from "@/components/VerifiedRecords";
import RolePortals from "@/components/RolePortals";
import RealResults from "@/components/RealResults";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemStatement />
      <PlatformOverview />
      <InstitutionTypes />
      <DataDrivenSection />
      <VerifiedRecords />
      <RolePortals />
      <RealResults />
      <VideoSection />
      <CTASection />
      <Footer />
    </main>
  );
}
