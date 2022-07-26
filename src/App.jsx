import { useState } from "react";
import Section from "./components/Section.jsx";
import Navigation from "./components/sections/Navigation.jsx";
import HeroBanner from "./components/sections/HeroBanner.jsx";
import About from "./components/sections/About.jsx";
import Skills from "./components/sections/Skills.jsx";
import Projects from "./components/sections/Projects.jsx";
import Contact from "./components/sections/Contact.jsx";
import "./assets/global.css";
import "./App.css";
import "./assets/fonts.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="app" onClick={() => (showMenu ? setShowMenu(false) : null)}>
      <div className="appBackground"></div>
      <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeroBanner />
      <Section header="about me" id="about">
        <About />
      </Section>
      <Section header="skills" id="skills" backgroundColor="#4D4D4D">
        <Skills />
      </Section>
      <Section header="projects" id="projects">
        <Projects />
      </Section>
      <Section header="contact" id="contact" backgroundColor="#4D4D4D">
        <Contact />
      </Section>
    </div>
  );
}

export default App;
