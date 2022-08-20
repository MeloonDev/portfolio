import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="#home">
          <img className="logo" src="img/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="navbar-menu">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};
export default NavBar;
