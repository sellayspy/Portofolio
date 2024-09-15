import profilePicture from "../assets/test.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <div className="header-text">
          <h4>
            Hello,i'm a <span></span>
          </h4>
          <h3>Riki Fauzia Nurjaman</h3>
          <p>"Never feel like it's too late to learn"</p>
        </div>
        <div className="socialMedia">
          <a href="https://www.instagram.com/rikifauzianurjaman/">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@officialspylike">
            <FaTiktok />
          </a>
          <a href="https://www.fiverr.com/rikifauzianurja">
            <SiFiverr />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
