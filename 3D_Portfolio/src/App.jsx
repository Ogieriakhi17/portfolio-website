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


const App = () => {
  return (
    <div className="bg-primary text-tertiary min-h-screen">
    <BrowserRouter>
      <div>
        <Navbar />
        <Hero />
      </div>
      <div>
        < About/>
        <Experience />
        <Tech />
        <Works />
        <Extracurriculars/>
      </div>
      <div className='relative z-0'>
          <Contact />
      
        </div>
    </BrowserRouter>
    </div>
  );
};

export default App;
