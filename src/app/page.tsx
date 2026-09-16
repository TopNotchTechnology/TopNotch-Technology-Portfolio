import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Outcomes from "@/components/Outcomes";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="relative w-full overflow-hidden bg-void">
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Services />
        <Projects />
        <Outcomes />
        <TechStack />
        <About />
        <Team />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}