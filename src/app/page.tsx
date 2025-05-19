import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FaqSection from "@/components/FaqSection";
import Description from "@/components/Description";
import Reason from "@/components/Reason";

export default function Home() {
  return (
    <main className="space-y-2 px-4 md:px-0">
      <Header />
      <Hero />
      <Description />
      <Reason />
      <FaqSection />
      <Footer />
    </main>
  );
}
