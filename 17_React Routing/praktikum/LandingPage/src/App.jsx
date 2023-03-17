import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./createProduct.css";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/createProduct" exact Component={CreateProduct} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
