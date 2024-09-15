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
            <span>Hello,I'm</span>
          </h4>
          <h3>Riki Fauzia Nurjaman</h3>
        </div>
        <div className="socialMedia">
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaTiktok />
          </a>
          <a href="">
            <SiFiverr />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
