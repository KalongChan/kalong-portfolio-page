import About from "@/components/About";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Jobs from "@/components/Jobs";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

export default function Home() {
  const [active, setActive] = useState([]);
  const [loaded, setLoaded] = useState();

  const {ref: heroRef, inView: heroInView} = useInView({
    threshold: 0.3,
  });

  const {ref: aboutRef, inView: aboutInView} = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    // setActive[(heroInView, aboutInView)];
    setActive([heroInView, aboutInView]);
  }, [heroInView, aboutInView]);

  console.log(active);
  // console.log(active.lastIndexOf(true));

  return (
    <div className="home-container">
      <Navbar />
      <div className="test" ref={heroRef}>
        <Hero inView={heroInView} />
      </div>
      <div className="about" ref={aboutRef}>
        <About inView={aboutInView} />
      </div>
      <Technologies />
      <Jobs />
      <Projects />
      <ContactMe />
      <Sidebar />
      <Footer />
    </div>
  );
}
