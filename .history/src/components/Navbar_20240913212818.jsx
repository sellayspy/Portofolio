import { FaBars } from "react-icons/fa6";
import "../styles/Navbar.css";
import { useState } from "react";
const Navbar = () => {
  const [statusTampil, setStatusTampil] = useState("");

  const tampilMenu = () => {
    if (statusTampil == "") {
      setStatusTampil("tampil");
    } else {
      setStatusTampil("");
    }
  };
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Portofolio</a>
        </div>
        <button onClick={tampilMenu}>
          <FaBars />
        </button>
        <div className={`menu ${statusTampil}`}>
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
