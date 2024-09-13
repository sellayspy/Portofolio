import { Navigate, useParams } from "react-router-dom";

import "../styles/DetailPortfolio.css";
import { portfolioList } from "../data/DataPortfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
const DetailPortfolio = () => {
  const { id } = useParams();
  const data = portfolioList.find((item) => item.id == id);
  if (data == undefined) {
    return <Navigate to="/pages-not-found" />;
  }
  return (
    <>
      <Navbar />
      <section id="detail-portfolio">
        <div className="wrapper">
          <h1>{data.title}</h1>
          <img src={data.image} />
          <p className="skill">
            <b>Skills:</b>
            {data.skill}
          </p>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default DetailPortfolio;
