import ErrorInput from "../../elements/Form/ErrorInput";

const TextAreaInput = ({ setDescription, value, stateError }) => {
  return (
    <div className="mb-4">
      <label htmlFor="additional-desc" className="form-label">
        Additional Description
      </label>
      <textarea
        className={`form-control ${stateError && value.length < 1 ? "border border-danger" : ""}`}
        id="productDesc"
        rows="3"
        value={value}
        onChange={({ target }) => setDescription(target.value)}
      ></textarea>
      {stateError && value.length < 1 ? <ErrorInput id={"errorDesc"} message={`Description field cannot be Empty`} /> : ""}
    </div>
  );
};

export default TextAreaInput;
