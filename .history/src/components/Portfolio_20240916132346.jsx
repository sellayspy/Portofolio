import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import portfolio5 from "../assets/portfolio5.png";
import portfolio6 from "../assets/portfolio6.png";

import { Link } from "react-router-dom";

import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3 style={{ color: "#fff" }}>Project</h3>
        <div className="grid">
          <div className="row">
            <img src={portfolio1} alt="" />
            <div className="item">
              <div className="text">
                <h5>Website Invitaion Design</h5>
              </div>
              <div className="icon">
                <i></i>
              </div>
            </div>
            <h4>Website Invitaion Design</h4>
          </div>
          <div className="row">
            <img src={portfolio2} alt="" />
            <div className="item">
              <div className="text">
                <h5>Website Invitaion Design</h5>
              </div>
              <div className="icon">
                <i></i>
              </div>
            </div>
            <h4>Website Invitaion Design</h4>
          </div>
          <div className="row">
            <img src={portfolio3} alt="" />
            <div className="item">
              <div className="text">
                <h5>Website Invitaion Design</h5>
              </div>
              <div className="icon">
                <i></i>
              </div>
            </div>
            <h4>Website Invitaion Design</h4>
          </div>
          <div className="row">
            <img src={portfolio4} alt="" />
            <div className="item">
              <div className="text">
                <h5>Website Invitaion Design</h5>
              </div>
              <div className="icon">
                <i></i>
              </div>
            </div>
            <h4>Website Invitaion Design</h4>
          </div>
          <div className="row">
            <img src={portfolio5} alt="" />
            <div className="item">
              <div className="text">
                <h5>Website Invitaion Design</h5>
              </div>
              <div className="icon">
                <i></i>
              </div>
            </div>
            <h4>Website Invitaion Design</h4>
          </div>
          <div className="row">
            <img src={portfolio6} alt="" />
            <div className="item">
              <div className="text">
                <h5>Website Invitaion Design</h5>
              </div>
              <div className="icon">
                <i></i>
              </div>
            </div>
            <h4>Website Invitaion Design</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
