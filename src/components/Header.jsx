import "./Header.scss";
import { BsWater, BsChevronDoubleDown, BsX, BsPlay } from "react-icons/bs";

const Header = () => {
  document.addEventListener("mousemove", parallax);

  function parallax(e) {
    this.querySelectorAll(".layer").forEach((move) => {
      const speedValue = move.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speedValue) / 100;
      const y = (window.innerHeight - e.pageY * speedValue) / 100;

      if (window.innerWidth > 1000) {
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      } else {
        move.style.transform = `translateX(0) translateY(0)`;
      }
    });
  }

  return (
    <div className="header-container" id="home">
      <div id="layer" className="layer circle one" data-speed="-8"></div>
      <div id="layer" className="layer circle two" data-speed="9"></div>
      <div id="layer" className="layer circle three" data-speed="-2"></div>
      <div id="layer" className="layer circle four" data-speed="-10"></div>
      <div id="layer" className="layer circle five" data-speed="12"></div>
      <BsWater className="layer icon water" data-speed="6" />
      <BsChevronDoubleDown className="layer icon dd" data-speed="14" />
      <BsX className="layer icon x" data-speed="9" />
      <BsPlay className="layer icon play" data-speed="-16" />

      <h2 className="layer" data-speed="5">
        Cześć, jestem
      </h2>
      <h1 className="layer" data-speed="3">
        Mateusz <span>Melaniuk.</span>
      </h1>
      <h3 className="layer" data-speed="5">
        Front-End Developer
      </h3>
    </div>
  );
};
export default Header;
