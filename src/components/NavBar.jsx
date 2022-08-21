import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", onScroll);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <div
      className={scrolled ? "navbar-container scrolled" : "navbar-container"}
    >
      <div className="navbar-logo">
        <a href="#home">
          <img
            className="logo"
            src="img/logoP.svg"
            alt="logo"
            onClick={() => onUpdateActiveLink("home")}
          />
        </a>
      </div>
      <div className="navbar-menu">
        <a
          href="#home"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => onUpdateActiveLink("home")}
        >
          Home
        </a>
        <a
          href="#skills"
          className={activeLink === "skills" ? "active" : ""}
          onClick={() => onUpdateActiveLink("skills")}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeLink === "projects" ? "active" : ""}
          onClick={() => onUpdateActiveLink("projects")}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeLink === "contact" ? "active" : ""}
          onClick={() => onUpdateActiveLink("contact")}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
export default NavBar;
