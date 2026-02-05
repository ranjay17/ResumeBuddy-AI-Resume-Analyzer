import logo1 from "../assets/logo1.png";

const Header = () => {
  return (
    <header className="px-12 py-4 bg-black ">
      <img src={logo1} alt="logo" className="h-16 w-auto" />
    </header>
  );
};

export default Header;
