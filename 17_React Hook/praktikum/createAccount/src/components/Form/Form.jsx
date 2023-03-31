import SubmitButton from "../Button/SubmitButton";
import GenderInput from "../Input/GenderInput";
import InputForm from "../Input/InputForm";
import LanguageInput from "../Input/LanguageInput";
import NameInput from "../Input/NameInput";
import NationalityInput from "../Input/NationalityInput";
import TextForm from "./TextForm";

const Form = () => {
  return (
    <div className="container w-50">
      <TextForm />
      <h3 className="mt-2">Detail Form</h3>
      <form id="formProduct">
        <div className="col">
          <NameInput />
          <InputForm title={"Username"} />
          <InputForm title={"Email"} />
          <GenderInput />
          <InputForm title={"Address"} />
          <InputForm title={`Address 2 (Optional)`} />
          <NationalityInput />
          <hr />
          <LanguageInput />
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default Form;
