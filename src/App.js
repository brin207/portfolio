import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import React, {useState, useEffect} from 'react'

function App() {
  const [light, setLight] = useState(false)
    const handleLight = () => setLight(!light)
    
    useEffect(() => {
      if (light === false) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [light]);

  return (
    <div>
      <NavBar light={light} handleLight={handleLight} />
      <Home />
      <About />
      <Skills light={light} />
      <Experience/>
      <Contact />
    </div>
  );
}

export default App;
