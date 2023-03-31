import ErrorInput from "../../elements/Form/ErrorInput";

const InputPrice = ({ title, idError, setStateItem, value, stateError }) => {
  const handleOnChange = (e) => {
    setStateItem(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <input
        type="text"
        className={`form-control ${stateError.isError && (!/^[0-9]+$/.test(value) || value.length < 1) ? "border border-danger" : ""}`}
        value={value}
        placeholder=""
        onChange={handleOnChange}
      />
      {stateError.isError && (!/^[0-9]+$/.test(value) || value.length < 1) ? <ErrorInput id={idError} message={stateError.price} /> : ""}
    </div>
  );
};

export default InputPrice;
