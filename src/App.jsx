import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact";
import Extracurriculars from "./components/Extracurriculars";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <div className="bg-primary text-tertiary min-h-screen relative z-10">
      <BrowserRouter>
        {/* Top sections: no stars */}
        <Navbar />
        <Hero />
        <About />

        {/* Wrapper for star-covered sections */}
        <div className="relative z-10">
          {/* StarsCanvas behind everything below "About" */}
          <StarsCanvas />

          {/* Sections with stars background */}
          <Experience />
          <Tech />
          <Works />
          <Extracurriculars />
          <Contact />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
