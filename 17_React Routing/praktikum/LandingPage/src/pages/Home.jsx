import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Subs from "../components/Subscription/Subs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Subs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
