import SubmitButton from "../Button/SubmitButton";
import CheckInput from "../Input/CheckInput";
import FileInput from "../Input/FileInput";
import SelectInput from "../Input/SelectInput";
import TextAreaInput from "../Input/TextAreaInput";
import TextForm from "./TextForm";
import Article from "./article";
import { useState } from "react";
import LanguageButton from "../Button/LanguageButton";
import FormValidation from "./validation";
import InputName from "../Input/InputName";
import InputPrice from "../Input/InputPrice";
import { gql, useQuery, useMutation } from "@apollo/client";
import { AddProduct, GetProductList } from "../../services/queryGraphql";

const Form = () => {
  const [insertProduct] = useMutation(AddProduct, {
    refetchQueries: [GetProductList],
  });

  const [prodName, setProdName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [filePath, setFilePath] = useState("");
  const [freshness, setFreshness] = useState("");
  const [description, setDescription] = useState("");

  const [errors, setErrors] = useState({
    isError: false,
    productName: "",
    category: "",
    filepath: "",
    freshness: "",
    desc: "",
    price: "",
  });
  const [lang, setLang] = useState("en");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Validation
    if (FormValidation(prodName, category, filePath, freshness, description, price, setErrors)) {
      // if some data is not valid, doing this
      setErrors((prevData) => ({ ...prevData, isError: true }));
      return;
    } else {
      setErrors((prevData) => ({ ...prevData, isError: false }));
    }

    insertProduct({
      variables: {
        object: { name: prodName, category, image: filePath, freshness, description, price: parseInt(price) },
      },
    });

    alert("Success Submit");
    setProdName("");
    setPrice("");
    setCategory("");
    setFilePath("");
    setFreshness("");
    setDescription("");
  };

  return (
    <div className="container w-50">
      <TextForm title={Article.title[lang]} desc={Article.description[lang]} />
      <h3 className="mt-2">Detail Product</h3>
      <form id="formProduct" onSubmit={handleSubmitForm}>
        <div className="col">
          <InputName title="Product Name" idError="errorProduct" setStateItem={setProdName} value={prodName} stateError={errors} />
          <SelectInput setCategory={setCategory} value={category} stateError={errors} />
          <FileInput setFilePath={setFilePath} value={filePath} stateError={errors} />
          <CheckInput setFreshness={setFreshness} value={freshness} stateError={errors} />
          <TextAreaInput setDescription={setDescription} value={description} stateError={errors} />
          <InputPrice title="Product Price" idError="errorPrice" setStateItem={setPrice} value={price} stateError={errors} />
          <SubmitButton />
        </div>
      </form>
      <LanguageButton language={lang == "id" ? "English" : "Indonesia"} setLang={setLang} />
    </div>
  );
};

export default Form;
