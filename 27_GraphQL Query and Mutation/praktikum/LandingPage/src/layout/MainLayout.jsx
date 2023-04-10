import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";
import CreateProduct from "./../pages/CreateProduct";
import Home from "./../pages/Home";
import NotFound from "./../pages/NotFound";
import ProductDetail from "../pages/ProductDetail";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import LoginPage from "../pages/LoginPage";
import ListProduct from "../pages/ListProduct";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" exact Component={LoginPage} />
          <Route path="/product/list" exact Component={ListProduct} />
          <Route path="/product" exact element={<PrivateRoute />}>
            <Route path="/product" exact Component={CreateProduct} />
            <Route path="/product/detail/:id" exact Component={ProductDetail} />
          </Route>
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default MainLayout;
