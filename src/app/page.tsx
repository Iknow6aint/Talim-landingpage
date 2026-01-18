import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import Description from "@/components/Description";
import Reason from "@/components/Reason";
import CTASection from "@/components/CTASection";
import TrustBadgeSection from "@/components/Partners";
import WhySchoolsChoose from "@/components/WhySchoolsChoose";
import WhySchoolsNeedTalim from "@/components/NeedForTalim";
import TrustedBySchools from "@/components/TrustedBySchools";
import TalimVideoSection from "@/components/TalimVideoSection";
import BranchingDiagram from "@/components/Ani";
import MobileAppSection from "@/components/MobileAppSection";

export default function Home() {
  return (
    <main className="space-y-2 px-4 bg-[#FBFCFE] md:px-0">
      <Header />
      <Hero />
      <TrustBadgeSection />
      <WhySchoolsChoose />
      <WhySchoolsNeedTalim />
      <TrustedBySchools />
      <TalimVideoSection />
      <MobileAppSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
