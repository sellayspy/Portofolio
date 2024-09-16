import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
