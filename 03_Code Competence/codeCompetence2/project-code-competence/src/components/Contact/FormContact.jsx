import { useState } from "react";
import InputForm from "./inputForm";
import InputTextArea from "./InputTextArea";

const FormContact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    desc: "",
  });

  const handleSubmit = () => {
    alert(`Thank you ${data.name}. We will contact you to ${data.email} as soon as possible.`);
  };

  return (
    <form role="form" id="form1" onSubmit={handleSubmit}>
      <InputForm type={"text"} id={"inputName"} label={"Full Name"} value={data.name} setData={setData} />
      <InputForm type={"email"} id={"inputEmail"} label={"Email Address"} value={data.email} setData={setData} />
      <InputTextArea type={"text"} id={"inputDescription"} label={"What can we help you with?"} value={data.desc} setData={setData} />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormContact;
