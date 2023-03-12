import About from "@/components/About";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Jobs from "@/components/Jobs";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <Technologies />
      <Jobs />
      <Projects />
    </div>
  );
}
