const MenuList = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto pe-4">
        <li className="nav-item pe-4">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item pe-4">
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li className="nav-item pe-4">
          <a className="nav-link" href="/pricing">
            Pricing
          </a>
        </li>
        <li className="nav-item pe-4">
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
