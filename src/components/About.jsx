import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <img src="/img/prog.svg" alt="programmer" />
        <div className="desc">
          <h1 className="title">
            O mnie<span>.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            magni, pariatur voluptates dolorum vitae repellendus beatae delectus
            molestiae odio eaque eum nihil, debitis ducimus doloremque possimus
            accusantium et facere numquam.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
