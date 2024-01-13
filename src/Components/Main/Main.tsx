import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import DisplayResumeModal from "../../Reuseable UI/DisplayResumeModal";

const Main = () => {
  return (
    <>
      <DisplayResumeModal />
      <div className="">
        <div id="hero">
          <Hero />
        </div>

        <div id="about">
          <About />
        </div>
        <div id="project">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Main;
