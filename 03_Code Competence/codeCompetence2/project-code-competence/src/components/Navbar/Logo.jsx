const Logo = () => {
  return (
    <div className="w-75 ps-4 d-flex align-items-center">
      <a className="navbar-brand company-name" href="#">
        TRADIFY
      </a>
      <button
        className="navbar-toggler justify-content-end"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  );
};

export default Logo;
