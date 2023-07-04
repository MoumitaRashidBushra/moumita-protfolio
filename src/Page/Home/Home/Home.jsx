import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Skill></Skill>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;