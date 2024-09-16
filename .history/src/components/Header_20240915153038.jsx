import profilePicture from "../assets/test.png";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-jumbotron">
        <h1>Hello I'm <span>Riki Fauzi Nurjaman</span></h1>
        <h2>I am <span className="type-animation">Student</span></h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, minima eum. Harum quod at praesentium voluptate veritatis consequuntur doloribus aliquam. Nemo reprehenderit natus aperiam odio ipsum qui illo quaerat necessitatibus. Dolores et, doloribus asperiores voluptas delectus temporibus quia vero pariatur.</p>
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
