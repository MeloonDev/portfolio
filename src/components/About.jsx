import "./About.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="about-container">
<<<<<<< HEAD
      <div data-aos="zoom-in" className="about-section">
=======
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="about-section"
      >
>>>>>>> 09956d97cc991d023e91296b2f9df736878bfabc
        <img src="/img/prog.svg" alt="programmer" />
        <div className="desc">
          <h1 className="title">
            O mnie<span>.</span>
          </h1>
          <p>
            Nazywam się Mateusz. Jestem początkującym Front-end developerem
            stawiającym na rozwój. Prywatnie pasjonat esportu i włoskiej kuchni.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default About;
