import { FaBars } from "react-icons/fa6";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Portofolio</a>
        </div>
        <button>
          <FaBars />
        </button>
        <div className="menu">
          <ul>
            <li>
              <a href="#portoflio">Portoflio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experince">Expreince</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
