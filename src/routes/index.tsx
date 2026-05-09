import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import AgencySection from "@/components/AgencySection";
import FeaturedWork from "@/components/FeaturedWork";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import Legacy from "@/components/Legacy";
import WhatsNew from "@/components/WhatsNew";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[#efeeec]">
      <Hero />
      <ClientLogos />
      <AgencySection />
      <FeaturedWork />
      <Services />
      <Marquee />
      <Legacy />
      <WhatsNew />
      <CTA />
      <Footer />
    </main>
  );
}
