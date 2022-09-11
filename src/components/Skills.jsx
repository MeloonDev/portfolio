import { useState } from "react";
import "./Skills.scss";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { SiStyledcomponents, SiJavascript } from "react-icons/si";

const descArray = [
  "*najedź kursorem na kartę, żeby wyświetlić opis",
  "HTML",
  "CSS",
  "JavaScript",
  "Sass",
  "ReactJS",
  "Styled Components",
  "Bootstrap",
];

const Skills = () => {
  const [isHovering, setIsHovering] = useState(descArray[0]);

  const handleMouseOver = (number) => {
    setIsHovering(descArray[number]);
  };

  return (
    <div id="skills" className="skills-container">
      <div className="skills-section">
        <div className="skills-description">
          <h2>
            Umiejętności<span>.</span>
          </h2>
          <p>{isHovering}</p>
        </div>
        <div className="skills-icons">
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(1)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaHtml5 />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(2)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaCss3Alt />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(3)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <SiJavascript />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(4)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaSass />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(5)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaReact />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(6)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <SiStyledcomponents />
          </div>
          <div
            className="icon"
            onMouseEnter={() => handleMouseOver(7)}
            onMouseLeave={() => handleMouseOver(0)}
          >
            <FaBootstrap />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
