import profilePicture from "../assets/profile-picture.png";
import "../styles/Header.css";
const Header = () => {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Riki Fauzia Nurjaman</h3>
        <p>Mahasiswa - Programer - Desain Grafis</p>
      </div>
    </header>
  );
};

export default Header;
