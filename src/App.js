
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skill />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
