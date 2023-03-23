import Logo from "./Logo";
import MenuList from "./MenuList";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow">
      <div className="container-fluid">
        <Logo />
        <MenuList />
      </div>
    </nav>
  );
};

export default Navbar;
