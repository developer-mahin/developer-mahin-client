import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Skills from './Skills';
import Projects from "./Projects"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;