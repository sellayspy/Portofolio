import profilePicture from "../assets/profile-picture.png";
const Header = () => {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
      </div>
    </header>
  );
};

export default Header;
