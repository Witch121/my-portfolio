import '../style/App.css';
import Home from './Home';
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Hobby from "./Hobby";

function App() {

  return (
    <>
      <Home />
      <div className="divider divider-accent"></div>
      <Projects />
      <div className="divider divider-accent"></div>
      <Skills />
      <About />
      <div className="divider divider-accent"></div>
      <Hobby />
      <div className="divider divider-accent"></div>
      <Contact />
    </>
  )
}

export default App
