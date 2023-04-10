const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid">
          <a className="navbar-brand logoSimple" href="/">
            Simple Header
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-nav collapse navbar-collapse navbarMenu" id="navbarNavAltMarkup">
            <a className="nav-link btn btn-primary mx-2 text-white" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link mx-2" href="/product">
              Product
            </a>
            <a className="nav-link mx-2" href="/pricing">
              Pricing
            </a>
            <a className="nav-link mx-2" href="/faq">
              FAQs
            </a>
            <a className="nav-link mx-2" href="/about">
              About
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
