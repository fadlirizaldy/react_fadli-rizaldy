const Contact = () => {
  return (
    <div className="contact">
      <div className="salesContact">
        <h2>Arsha</h2>
        <p>
          A108 Adam Street <br />
          New York, NY 535022
          <br />
          United States <br />
          <br />
          <b>Phone:</b> +1 5589 55488 55
          <br />
          <b>Email:</b>info@example.com
        </p>
      </div>
      <div className="usefulLinks">
        <h2>Useful Links</h2>
        <div className="linksMenu">
          <a href="#" className="links">
            Home
          </a>
          <a href="#" className="links">
            About us
          </a>
          <a href="#" className="links">
            Services
          </a>
          <a href="#" className="links">
            Terms of serivce
          </a>
          <a href="#" className="links">
            Privacy policy
          </a>
        </div>
      </div>
      <div className="services">
        <h2>Our Services</h2>
        <div className="serviceMenu">
          <a href="#" className="links">
            Web Design
          </a>
          <a href="#" className="links">
            Web Development
          </a>
          <a href="#" className="links">
            Product Management
          </a>
          <a href="#" className="links">
            Marketing
          </a>
          <a href="#" className="links">
            Graphic Design
          </a>
        </div>
      </div>
      <div className="socialNetworks">
        <h2>Our Social Networks</h2>
        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
        <div className="social-media">
          <div className="circle">
            <i className="fa-brands fa-instagram icon-sosmed"></i>
          </div>
          <div className="circle">
            <i className="fa-brands fa-linkedin-in icon-sosmed"></i>
          </div>
          <div className="circle">
            <i className="fa-brands fa-facebook icon-sosmed"></i>
          </div>
          <div className="circle">
            <i className="fa-brands fa-twitter icon-sosmed"></i>
          </div>
          <div className="circle">
            <i className="fa-brands fa-line icon-sosmed"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
