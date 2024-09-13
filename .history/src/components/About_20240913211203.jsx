import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
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
        </div>
      </div>
    </section>
  );
};

export default About;
