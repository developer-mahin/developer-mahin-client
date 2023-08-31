import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import ScrollToTop from "react-scroll-up";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import FacebookChat from "../../components/FacebookChat/FacebookChat";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>

      <ScrollToTop
        style={{
          position: "fixed",
          bottom: 50,
          right: 30,
          cursor: "pointer",
          transitionDuration: "0.2s",
          transitionTimingFunction: "linear",
          transitionDelay: "0s",
        }}
        duration="1400"
        showUnder={700}
      >
        <span>
          {" "}
          <BsFillArrowUpCircleFill className="lg:text-4xl text-2xl text-cyan-600 shadow-2xl rounded-full "></BsFillArrowUpCircleFill>{" "}
        </span>
      </ScrollToTop>
      <FacebookChat />
    </div>
  );
};

export default Home;
