const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="about-me">
          <h1>TRADIFY</h1>
          <p>We provide an AI service to introduce many local cuisines so people are willing to try them. Together we can make local food great again.</p>
        </div>
        <div className="services">
          <h2>Service</h2>
          <ul>
            <li>Food Detector</li>
            <li>AI Development</li>
            <li>Restaurant Partner</li>
            <li>Research Collaboration</li>
            <li>Market Research</li>
          </ul>
        </div>
        <div className="contact-me">
          <h2>Contact</h2>
          <ul>
            <li>
              <img src="src/assets/footer/house-solid.svg" alt="" /> Gg. Iweni Sari Tim. 1
            </li>
            <li>
              <img src="src/assets/footer/envelope-solid.svg" alt="" /> fadli.rizaldi12@gmail.com
            </li>
            <li>
              <img src="src/assets/footer/mobile-solid.svg" alt="" /> +62 85693215654
            </li>
            <li>
              <img src="src/assets/footer/phone-solid.svg" alt="" /> +62 85693215654
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h2>Follow Me</h2>
          <div className="social-media-icons">
            <a href="http://instagram.com/fadli.rizaldy" target="_blank">
              <img src="src/assets/footer/instagram.svg" alt="" />
            </a>
            <a href="http://linkedin.com/in/fadlirizaldy" target="_blank">
              <img src="src/assets/footer/linkedin.svg" alt="" />
            </a>
            <a href="https://id-id.facebook.com/fadli.rizaldy.7" target="_blank">
              <img src="src/assets/footer/facebook.svg" alt="" />
            </a>
            <a href="https://open.spotify.com/user/ir7uniue3x3zx8icy1qcprv6d?si=fb8b92076b004537" target="_blank">
              <img src="src/assets/footer/spotify.svg" alt="" />
            </a>
            <a href="http://twitter.com/elonmusk" target="_blank">
              <img src="src/assets/footer/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>Copyright &copy; 2023 Fadli Rizaldy. All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
