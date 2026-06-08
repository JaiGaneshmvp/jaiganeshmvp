import { createFileRoute } from "@tanstack/react-router";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import CustomCursor from "@/components/portfolio/CustomCursor";
import ParticleBackground from "@/components/portfolio/ParticleBackground";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Resume from "@/components/portfolio/Resume";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jai's Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Jai — Full Stack and Java Developer. Projects, skills and ways to get in touch.",
      },
      { property: "og:title", content: "Jai's Portfolio" },
      {
        property: "og:description",
        content: "Full Stack | Java Developer portfolio with projects and skills.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Alex Carter",
          jobTitle: "Full Stack Developer",
          url: "/",
          sameAs: [
            "https://github.com",
            "https://linkedin.com",
            "https://leetcode.com",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <LoadingScreen />
      <ScrollProgress />
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Resume />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
