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
import Stars from "./components/canvas/Stars"
import StarsCanvas from "./components/canvas/Stars";

const App = () => {
  return (
    <div className="bg-primary text-tertiary min-h-screen relative z-10">
    <BrowserRouter>
    <StarsCanvas/>
      <div>
        <Navbar />
        <Hero />
      </div>
      <div>
        < About/>

      </div>
      <div className="relative z-50">
        <Experience />
        <Tech />
        <Works />
        <Extracurriculars/>
        <Contact />
        <StarsCanvas/>
      </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
