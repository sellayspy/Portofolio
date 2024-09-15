import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import "../styles/Navbar.css";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

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
          <Link to="/">Portfolio</Link>
        </div>
        <button onClick={tampilMenu}>
          {statusTampil == "" ? <FaBars /> : <IoClose />}
        </button>
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <HashLink to="/#portfolio">Project</HashLink>
            </li>
            <li>
              <HashLink to="/#about">About</HashLink>
            </li>
            <li>
              <HashLink to="/#experience">Skills</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
