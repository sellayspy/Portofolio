import { portfolioList } from "../data/DataPortfolio";

import { Link } from "react-router-dom";

import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3 style={{ color: "#fff" }}>Project</h3>
        <div className="grid">
          {portfolioList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <Link to={`/portfolio/${item.id}`}>
                  <img src={item.image} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
