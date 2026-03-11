import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Extracurriculars from "./components/Extracurriculars";
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <div className="bg-primary text-tertiary min-h-screen relative">
      {/* Full-page background. Keep it behind all content so it can't intercept clicks. */}
      <StarsCanvas />

      <div className="relative z-10">
        <BrowserRouter>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Extracurriculars />
          <Contact />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
