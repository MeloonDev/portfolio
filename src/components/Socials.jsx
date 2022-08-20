import "./Socials.scss";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials-container">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/mateusz-melaniuk-8440b1248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MeloonDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>

        <li>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
      <div className="socials-line"></div>
    </div>
  );
};
export default Socials;
