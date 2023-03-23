import { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import TableData from "../components/List-Data/TableData";

const CreateProduct = () => {
  const tmpData = {
    no: crypto.randomUUID(),
    name: "Xiaomi",
    category: "Handphone",
    image: "src/assets/imageuser/xiomi.jpg",
    freshness: "Refurbished",
    description: "lorem ipsum dolor skododdle",
    price: "20000",
  };
  const tmpData2 = {
    no: crypto.randomUUID(),
    name: "Samsong",
    category: "Laptop",
    image: "src/assets/imageuser/samsong.jpg",
    freshness: "Brand New",
    description: "lorem dimsum color skododdle",
    price: "75000",
  };

  const [dataProd, setDataProd] = useState([tmpData, tmpData2]);

  return (
    <div className="createProduct">
      <Form setStateData={setDataProd} />
      <TableData datas={dataProd} setStateData={setDataProd} />
    </div>
  );
};

export default CreateProduct;
