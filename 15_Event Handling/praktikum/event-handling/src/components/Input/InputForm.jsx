import ErrorInput from "../../elements/Form/ErrorInput";

const InputForm = ({ title, idError, setStateItem, value, stateError }) => {
  const handleOnChange = (e) => {
    setStateItem(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <input type="text" className={`form-control ${stateError && value.length < 1 ? "border border-danger" : ""}`} value={value} placeholder="" onChange={handleOnChange} />
      {stateError && value.length < 1 ? <ErrorInput id={idError} message={`${title} field cannot be Empty`} /> : ""}
      {value.length > 10 && title === "Product Name" ? <ErrorInput id={idError} message={"Product Name should be 10 characters or less"} /> : ""}
      {isNaN(Number(value)) && title === "Product Price" ? <ErrorInput id={idError} message={"Please enter a valid Product price"} /> : ""}
    </div>
  );
};

export default InputForm;
