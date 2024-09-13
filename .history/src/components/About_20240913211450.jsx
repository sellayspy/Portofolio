import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiCoreldraw } from "react-icons/si";
import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam magni,
          dolorum, explicabo obcaecati ut impedit officiis quae non natus
          praesentium ex, excepturi asperiores laboriosam distinctio vitae
          cupiditate nulla debitis consectetur?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
          similique.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <h4>Programing Language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3 />
          <IoLogoJavascript />
          <FaLaravel />
                  <FaReact />
                  
        </div>
      </div>
    </section>
  );
};

export default About;
