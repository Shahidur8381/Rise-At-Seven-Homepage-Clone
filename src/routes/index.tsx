import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Awards from "@/components/Awards";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-ink">
      <Hero />
      <Marquee items={["Digital PR", "SEO", "Content", "Social", "Influencer", "AI Search", "YouTube", "TikTok"]} />
      <Stats />
      <Services />
      <Work />
      <Clients />
      <Testimonials />
      <Awards />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
