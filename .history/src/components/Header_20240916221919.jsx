import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCoreldraw } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../styles/Header.css";
const Header = () => {
  const [text] = useTypewriter({
    words: ["Student", "Web Developer", "Designer"],
    loop: true,
  });

  const title = "Hello I'm Riki Fauzia Nurjaman";

  return (
    <header>
      <div className="header-jumbotron">
        <h1>
          {title.split("").map((letra) => (
            <span className="animated-tex">{letra}</span>
          ))}
        </h1>
        <h2>
          I am <span className="type-animation">{text}</span>
          <Cursor />
        </h2>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, minima
          eum. Harum quod at praesentium voluptate veritatis consequuntur
          doloribus aliquam. Nemo reprehenderit natus aperiam odio ipsum qui
          illo quaerat necessitatibus. Dolores et, doloribus asperiores voluptas
          delectus temporibus quia vero pariatur.
        </p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/rikifauzianurjaman/">
            <span>
              <FaInstagram />
            </span>
          </a>
          <a href="https://www.tiktok.com/@officialspylike">
            <span>
              <FaTiktok />
            </span>
          </a>
          <a href="https://www.fiverr.com/rikifauzianurja">
            <span>
              <SiFiverr />
            </span>
          </a>
        </div>
        <div className="mySkill">
          <a href="#">
            <span>
              <FaHtml5 />
            </span>
          </a>
          <a href="#">
            <span>
              <FaCss3 />
            </span>
          </a>
          <a>
            <span>
              <IoLogoJavascript />
            </span>
          </a>
          <a>
            <span>
              <RiTailwindCssFill />
            </span>
          </a>
          <a>
            <span>
              <FaLaravel />
            </span>
          </a>
          <a>
            <span>
              <FaReact />
            </span>
          </a>
          <a>
            <span>
              <SiCoreldraw />
            </span>
          </a>
          <a>
            <span>
              <SiAdobephotoshop />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
