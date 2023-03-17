import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import TableData from "../components/List-Data/TableData";
import Footer from "../components/Footer/Footer";

const CreateProduct = () => {
  const tmpData = {
    no: crypto.randomUUID(),
    name: "Xiaomi",
    category: "Handphone",
    image: "c:/graph.jpg",
    freshness: "Fake News",
    description: "lorem ipsum dolor skododdle",
    price: "20000",
  };
  const tmpData2 = {
    no: crypto.randomUUID(),
    name: "Sumsang",
    category: "Laptop",
    image: "c:/topsang.jpg",
    freshness: "Brand New",
    description: "lorem dimsum color skododdle",
    price: "75000",
  };

  const [dataProd, setDataProd] = useState([tmpData, tmpData2]);

  return (
    <div className="createProduct">
      <Navbar />
      <Form setStateData={setDataProd} />
      <TableData datas={dataProd} setStateData={setDataProd} />
      <Footer />
    </div>
  );
};

export default CreateProduct;
