import profilePicture from "../assets/profile-picture.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Riki Fauzia Nurjaman</h3>
        <p>Mahasiswa - Programer - Desain Grafis</p>
        <div className="socialMedia">
          <a href="">
            <FaInstagram />
          </a>
          <a href=""></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
