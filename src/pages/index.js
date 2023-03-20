import About from "@/components/About";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import Jobs from "@/components/Jobs";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import MobileNavbar from "@/components/MobileNavbar";
import {useInView} from "react-intersection-observer";
import {Fragment, useEffect, useState} from "react";
import {navData} from "../config";

export default function Home() {
  //Navbar active section checker
  const [activeSection, setActiveSection] = useState([]);

  const {ref: heroRef, inView: heroInView} = useInView({
    threshold: 0.4,
  });
  const {ref: aboutRef, inView: aboutInView} = useInView({
    threshold: 0.3,
  });
  const {ref: jobsRef, inView: jobsInView} = useInView({
    threshold: 0.3,
  });
  const {ref: projectsRef, inView: projectsInView} = useInView({
    threshold: 0.1,
  });
  const {ref: contactRef, inView: contactInView} = useInView({
    threshold: 0.4,
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

  //Desktop Nav Animation
  const [isNavLoaded, setIsNavLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsNavLoaded(true);
    }, navData.length * 100);
  }, []);

  return (
    <Fragment>
      {/* Navbar */}
      {mode === "desktop" && (
        <Navbar activeSection={activeSection} isNavLoaded={isNavLoaded} />
      )}
      {mode === "mobile" && <MobileNavbar isNavLoaded={isNavLoaded} />}

      {/* Body */}
      <div className="home__container">
        <div className="hero" id="home" ref={heroRef}>
          <Hero />
        </div>
        <div className="about__wrapper" id="about" ref={aboutRef}>
          <About />
          <Technologies />
        </div>
        <div className="jobs" id="jobs" ref={jobsRef}>
          <Jobs />
        </div>
        <div className="projects" id="projects" ref={projectsRef}>
          <Projects mode={mode} />
        </div>
        <div className="contact__wrapper" id="contact" ref={contactRef}>
          <ContactMe />
        </div>
        <Sidebar />
      </div>
      <Footer />
    </Fragment>
  );
}
