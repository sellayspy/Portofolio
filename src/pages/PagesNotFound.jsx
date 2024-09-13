import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PagesNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h3>Oopss...</h3>
        <p>Halaman tidak ditemukan...</p>
      </div>
      <Footer />
    </>
  );
};

export default PagesNotFound;
