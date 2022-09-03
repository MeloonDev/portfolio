import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Socials from "./components/Socials";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Socials />
      <Header />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
