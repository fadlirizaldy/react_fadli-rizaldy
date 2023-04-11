import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ListDataHome from "../components/List-Data/ListDataHome";
import Subs from "../components/Subscription/Subs";

const Home = () => {
  return (
    <>
      <Hero />
      <ListDataHome />
      <Subs />
      <Contact />
    </>
  );
};

export default Home;
