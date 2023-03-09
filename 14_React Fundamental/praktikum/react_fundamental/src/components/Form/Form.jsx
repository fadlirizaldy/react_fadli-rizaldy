import SubmitButton from "../Button/SubmitButton";
import CheckInput from "../Input/CheckInput";
import FileInput from "../Input/FileInput";
import InputForm from "../Input/InputForm";
import SelectInput from "../Input/SelectInput";
import TextAreaInput from "../Input/TextAreaInput";
import TextForm from "./TextForm";

const Form = () => {
  return (
    <div className="container w-50">
      <TextForm />
      <h3 className="mt-2">Detail Product</h3>
      <form id="formProduct">
        <div className="col">
          <InputForm id="productName" title="Product Name" idError="errorProduct" />
          <SelectInput />
          <FileInput />
          <CheckInput />
          <TextAreaInput />
          <InputForm id="productPrice" title="Product Price" idError="errorPrice" />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
