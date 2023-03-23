import ErrorInput from "../../elements/Form/ErrorInput";

const TextAreaInput = ({ setDescription, value, stateError }) => {
  return (
    <div className="mb-4">
      <label htmlFor="additional-desc" className="form-label">
        Additional Description
      </label>
      <textarea
        className={`form-control ${stateError.isError && value.length < 1 ? "border border-danger" : ""}`}
        id="productDesc"
        rows="3"
        value={value}
        onChange={({ target }) => setDescription(target.value)}
      ></textarea>
      {stateError.isError ? <ErrorInput id={"errorDesc"} message={stateError.desc} /> : ""}
    </div>
  );
};

export default TextAreaInput;
