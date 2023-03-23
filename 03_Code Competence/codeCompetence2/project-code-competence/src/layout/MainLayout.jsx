import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";

import Navbar from "../components/Navbar/Navbar";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default MainLayout;
