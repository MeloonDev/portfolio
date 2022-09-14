import "./Projects.scss";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { SiStyledcomponents, SiJavascript } from "react-icons/si";

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>
        Przykładowe projekty<span>:</span>
      </h1>
      <div data-aos="zoom-in-left" className="projects-section">
        <div className="project">
          <div className="img first">
            <div className="img-shadow">
              <h2>POLISHPRIDE E-commerce</h2>
              <div className="line"></div>
              <p>Wykonane przy użyciu:</p>
              <div className="icons">
                <FaReact style={{ color: "#61DBFB" }} />
                <SiStyledcomponents style={{ color: "#b64389" }} />
              </div>
              <button>
                <a
                  href="https://e-commerce-polishpride.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sprawdź &gt;
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="img second">
            <div className="img-shadow">
              <h2>Sign In / Sign Up</h2>
              <div className="line"></div>
              <p>Wykonane przy użyciu:</p>
              <div className="icons">
                <FaHtml5 style={{ color: "#e34c26" }} />
                <FaCss3Alt style={{ color: "#2965f1" }} />
                <SiJavascript style={{ color: "#f0db4f" }} />
              </div>
              <button>
                <a
                  href="https://sign-in-up.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sprawdź &gt;
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-right" className="projects-section left">
        <div className="project">
          <div className="img third">
            <div className="img-shadow">
              <h2>BEST Technology</h2>
              <div className="line"></div>
              <p>Wykonane przy użyciu:</p>
              <div className="icons">
                <FaHtml5 style={{ color: "#e34c26" }} />
                <FaCss3Alt style={{ color: "#2965f1" }} />
                <SiJavascript style={{ color: "#f0db4f" }} />
              </div>
              <button>
                <a
                  href="https://best-technology.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sprawdź &gt;
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="img fourth">
            <div className="img-shadow">
              <h2>Movie App</h2>
              <div className="line"></div>
              <p>Wykonane przy użyciu:</p>
              <div className="icons">
                <FaReact style={{ color: "#61DBFB" }} />
                <FaCss3Alt style={{ color: "#2965f1" }} />
                <FaBootstrap style={{ color: "#7410f0" }} />
              </div>
              <button>
                <a
                  href="https://movie-app-wine-ten.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sprawdź &gt;
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="projects-section">
        <div className="project">
          <div className="img fifth">
            <div className="img-shadow">
              <h2>Animated NavBar</h2>
              <div className="line"></div>
              <p>Wykonane przy użyciu:</p>
              <div className="icons">
                <FaReact style={{ color: "#61DBFB" }} />
                <FaSass style={{ color: "#cc6699" }} />
              </div>
              <button>
                <a
                  href="https://animated-nav-bar.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sprawdź &gt;
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="img sixth">
            <div className="img-shadow">
              <h2>Portfolio</h2>
              <div className="line"></div>
              <p>Wykonane przy użyciu:</p>
              <div className="icons">
                <FaReact style={{ color: "#61DBFB" }} />
                <FaSass style={{ color: "#cc6699" }} />
              </div>
              <button>
                <a
                  href="https://mateusz-melaniuk.pl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Sprawdź &gt;
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
