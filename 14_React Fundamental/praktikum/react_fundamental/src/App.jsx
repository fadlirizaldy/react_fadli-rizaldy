import { useState, useEffect } from "react";
import "./App.css";
import "./createProduct.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import TableData from "./components/List-Data/TableData";
// import ScriptTag from "react-script-tag";

function App() {
  // const scriptJs = () => {
  //   return <ScriptTag src="./index.js" />;
  // };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./src/script.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Form />
      <TableData />
    </div>
  );
}

export default App;
