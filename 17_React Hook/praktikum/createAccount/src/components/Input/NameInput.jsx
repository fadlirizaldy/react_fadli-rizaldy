import InputForm from "./InputForm";

const NameInput = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col p-0">
          <InputForm title={"First Name"} />
        </div>
        <div className="col">
          <InputForm title={"Last Name"} />
        </div>
      </div>
    </div>
  );
};

export default NameInput;
