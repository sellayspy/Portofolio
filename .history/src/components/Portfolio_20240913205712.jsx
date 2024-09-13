import portfolio1 from "../assets/portfolio1.png";

const Portfolio = () => {
  return (
    <section id="portoflio">
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          <div className="item">
            <a href="">
              <img src={portfolio1} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
