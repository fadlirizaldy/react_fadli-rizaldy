import { useState, useEffect } from "react";
import "./App.css";
import "./createProduct.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import TableData from "./components/List-Data/TableData";
// import ScriptTag from "react-script-tag";

function App() {
  const tmpData = {
    name: "Xiaomi",
    category: "Handphone",
    image: "c:/graph.jpg",
    freshness: "Fake News",
    description: "lorem ipsum dolor skododdle",
    price: "20000",
  };

  const [dataProd, setDataProd] = useState([tmpData, tmpData]);

  return (
    <div className="App">
      <Navbar />
      <Form setStateData={setDataProd} />
      <TableData datas={dataProd} setStateData={setDataProd} />
    </div>
  );
}

export default App;
