import SubmitButton from "../Button/SubmitButton";
import CheckInput from "../Input/CheckInput";
import FileInput from "../Input/FileInput";
import InputForm from "../Input/InputForm";
import SelectInput from "../Input/SelectInput";
import TextAreaInput from "../Input/TextAreaInput";
import TextForm from "./TextForm";
import Article from "./article";
import { useState } from "react";
import LanguageButton from "../Button/LanguageButton";

const Form = ({ setStateData }) => {
  const [prodName, setProdName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [filePath, setFilePath] = useState("");
  const [freshness, setFreshness] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState(false);
  const [lang, setLang] = useState("en");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Validation
    if (formValidation()) {
      setErrors(true);
      return;
    }

    setStateData((prevData) => {
      return [...prevData, { no: crypto.randomUUID(), name: prodName, category, image: filePath, freshness, description, price }];
    });

    alert("Success Submit");
    setProdName("");
    setPrice("");
    setCategory("");
    setFilePath("");
    setFreshness("");
    setDescription("");
    setErrors(false);
  };

  // Validation Function
  const formValidation = () => {
    if (prodName == "" || price == "" || category == "" || filePath == "" || freshness == "" || description == "") {
      return true;
    }

    if (prodName.length > 10 || isNaN(Number(price))) {
      return true;
    }
  };

  return (
    <div className="container w-50">
      <TextForm title={Article.title[lang]} desc={Article.description[lang]} />
      <h3 className="mt-2">Detail Product</h3>
      <form id="formProduct" onSubmit={handleSubmitForm}>
        <div className="col">
          <InputForm title="Product Name" idError="errorProduct" setStateItem={setProdName} value={prodName} stateError={errors} />
          <SelectInput setCategory={setCategory} value={category} stateError={errors} />
          <FileInput setFilePath={setFilePath} value={filePath} stateError={errors} />
          <CheckInput setFreshness={setFreshness} value={freshness} stateError={errors} />
          <TextAreaInput setDescription={setDescription} value={description} stateError={errors} />
          <InputForm title="Product Price" idError="errorPrice" setStateItem={setPrice} value={price} stateError={errors} />
          <SubmitButton />
        </div>
      </form>
      <LanguageButton language={lang == "id" ? "English" : "Indonesia"} setLang={setLang} />
    </div>
  );
};

export default Form;
