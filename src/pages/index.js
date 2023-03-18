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
import {Fragment, useEffect, useState} from "react";
import MobileNavbar from "@/components/MobileNavbar";

export default function Home() {
  //Navbar active section checker
  const [activeSection, setActiveSection] = useState([]);

  const {ref: heroRef, inView: heroInView} = useInView({
    threshold: 0.3,
  });
  const {ref: aboutRef, inView: aboutInView} = useInView({
    threshold: 0.3,
  });
  const {ref: jobsRef, inView: jobsInView} = useInView({
    threshold: 0.3,
  });
  const {ref: projectsRef, inView: projectsInView} = useInView({
    threshold: 0.3,
  });
  const {ref: contactRef, inView: contactInView} = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    setActiveSection([
      heroInView,
      aboutInView,
      jobsInView,
      projectsInView,
      contactInView,
    ]);
  }, [heroInView, aboutInView, jobsInView, projectsInView, contactInView]);

  //Desktop && Mobile mode checker
  const [mode, setMode] = useState("");
  const handleWindowResize = () => {
    if (window.innerWidth > 768) {
      setMode("desktop");
    } else {
      setMode("mobile");
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      handleWindowResize();
      window.addEventListener("resize", handleWindowResize);
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <Fragment>
      {/* Navbar */}
      {mode === "desktop" && <Navbar activeSection={activeSection} />}
      {mode === "mobile" && <MobileNavbar />}

      {/* Body */}
      <div className="home__container">
        <div className="hero" id="home" ref={heroRef}>
          <Hero inView={heroInView} />
        </div>
        <div className="about__container" id="about" ref={aboutRef}>
          <About inView={aboutInView} />
          <Technologies />
        </div>
        <div className="jobs" id="jobs" ref={jobsRef}>
          <Jobs inView={jobsInView} />
        </div>
        <div className="project-group" id="projects" ref={projectsRef}>
          <Projects inView={projectsInView} mode={mode} />
        </div>
        <div className="contact" id="contact" ref={contactRef}>
          <ContactMe inView={contactInView} />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </Fragment>
  );
}
