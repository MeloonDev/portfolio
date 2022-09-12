import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  // const [activeLink, setActiveLink] = useState("");
  // "home"
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", onScroll);

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // };

  return (
    <div
      className={scrolled ? "navbar-container scrolled" : "navbar-container"}
    >
      <div className="navbar-logo">
        <a href="#home">
          <img
            className="logo"
            src="img/logo.svg"
            alt="logo"
            // onClick={() => onUpdateActiveLink("home")}
          />
        </a>
      </div>
      <div className="navbar-menu">
        <a
          href="#home"
          className="home"
          // className={activeLink === "home" ? "active" : ""}
          // onClick={() => onUpdateActiveLink("home")}
        >
          Home
        </a>
        <a
          href="#skills"
          className="skills"
          // className={activeLink === "skills" ? "active" : ""}
          // onClick={() => onUpdateActiveLink("skills")}
        >
          Umiejętności
        </a>
        <a
          href="#projects"
          className="projects"
          // className={activeLink === "projects" ? "active" : ""}
          // onClick={() => onUpdateActiveLink("projects")}
        >
          Projekty
        </a>
        <a
          href="#contact"
          className="contact"
          // className={activeLink === "contact" ? "active" : ""}
          // onClick={() => onUpdateActiveLink("contact")}
        >
          Kontakt
        </a>
      </div>
    </div>
  );
};
export default NavBar;
