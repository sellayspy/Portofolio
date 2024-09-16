import { portfolioList } from "../data/DataPortfolio";

import { Link } from "react-router-dom";

import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Project</h3>
        <div className="grid">
          <div className="row">
            {portfolioList.map((item) => {
              return (
                <div className="item" key={item.id}>
                  <Link to={`/portfolio/${item.id}`}>
                    <img src={item.image} />
                    <h5>{item.title}</h5>
                    <p>{item.skill}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
