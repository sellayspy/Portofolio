import { portfolioList } from "../data/DataPortfolio";

import "../styles/Portfolio.css";

const Portfolio = () => {
  return (
    <section id="portoflio">
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          {portfolioList.map((item) => {
            return (
              <div className="item">
                <a href="">
                  <img src={item.image} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
