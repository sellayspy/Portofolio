import { useParams } from "react-router-dom";

import "../styles/DetailPortfolio.css";
import { portfolioList } from "../data/DataPortfolio";

const DetailPortfolio = () => {
  const { id } = useParams();
  const data = portfolioList.filter((item) => item.id == id);
  return <div>DetailPortfolio</div>;
};

export default DetailPortfolio;
