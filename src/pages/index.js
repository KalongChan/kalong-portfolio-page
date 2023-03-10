import About from "@/components/About";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <Technologies />
      <Works />
    </div>
  );
}
