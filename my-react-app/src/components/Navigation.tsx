import PrimaryButton from "./PrimaryButton";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <a className="navigation__logo" href="#top">
        Nebula Studio
      </a>
      <div className="navigation__links">
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#approach">Approach</a>
        <a href="#contact">Contact</a>
      </div>
      <PrimaryButton href="#contact" invert>
        Start a Project
      </PrimaryButton>
    </nav>
  );
};

export default Navigation;