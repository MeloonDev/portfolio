import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div data-aos="zoom-in" className="about-section">
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
      </div>
    </div>
  );
};
export default About;
