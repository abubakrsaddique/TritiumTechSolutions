import Hero from "@/components/home/Hero";
import Marquee from "@/components/ui/Marquee";
import ServicesGrid from "@/components/home/ServicesGrid";
import Stats from "@/components/home/Stats";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import FeaturedWork from "@/components/home/FeaturedWork";
import CtaBand from "@/components/ui/CtaBand";
import { techStack } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={techStack} />
      <ServicesGrid />
      <Stats />
      <ProcessTimeline />
      <FeaturedWork />
      <CtaBand />
    </>
  );
}
