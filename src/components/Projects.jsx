import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const boxVariantLeft = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0, x: -300 },
  };

  const boxVariantRight = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0, x: 300 },
  };

  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    if (inView2) {
      control2.start("visible");
    }
    if (inView3) {
      control3.start("visible");
    }
  }, [control, inView, inView2, inView3]);

  return (
    <div id="projects" className="projects-container">
      <h1>
        Przykładowe projekty<span>:</span>
      </h1>
      <motion.div
        ref={ref}
        variants={boxVariantRight}
        initial="hidden"
        animate={control}
        className="projects-section"
      >
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
      </motion.div>
      <motion.div
        ref={ref2}
        variants={boxVariantLeft}
        initial="hidden"
        animate={control2}
        className="projects-section left"
      >
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
      </motion.div>
      <motion.div
        ref={ref3}
        variants={boxVariantRight}
        initial="hidden"
        animate={control3}
        className="projects-section"
      >
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
      </motion.div>
    </div>
  );
};
export default Projects;
