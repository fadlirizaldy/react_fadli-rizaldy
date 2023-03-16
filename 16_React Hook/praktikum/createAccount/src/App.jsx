import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./createAccount.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";

function App() {
  useEffect(() => {
    setTimeout(() => {
      alert("Welcome!");
    }, 500);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Form />
    </div>
  );
}

export default App;
