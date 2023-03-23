import ErrorInput from "../../elements/Form/ErrorInput";

const InputName = ({ title, idError, setStateItem, value, stateError }) => {
  const handleOnChange = (e) => {
    setStateItem(e.target.value);
  };

  console.log(stateError);
  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <input
        type="text"
        className={`form-control ${stateError.isError && (!/^[A-Za-z0-9 ]*$/.test(value) || value.length < 1) ? "border border-danger" : ""}`}
        value={value}
        placeholder=""
        onChange={handleOnChange}
      />
      {stateError.isError ? <ErrorInput id={idError} message={stateError.productName} /> : ""}
      {value.length > 10 ? <ErrorInput id={idError} message={"Product Name should be 10 characters or less"} /> : ""}
    </div>
  );
};

export default InputName;
