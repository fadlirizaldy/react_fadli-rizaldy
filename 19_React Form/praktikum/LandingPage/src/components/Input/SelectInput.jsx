import ErrorInput from "../../elements/Form/ErrorInput";

const SelectInput = ({ setCategory, value, stateError }) => {
  return (
    <div className="py-4">
      <label htmlFor="username" className="form-label">
        Product Category
      </label>
      <select className={`form-select ${stateError.isError && value.length < 1 ? "border border-danger" : ""}`} id="productCategory" value={value} onChange={({ target }) => setCategory(target.value)}>
        <option value="" hidden></option>
        <option>Handphone</option>
        <option>Laptop</option>
        <option>Computer</option>
      </select>
      {stateError.isError && value.length < 1 ? <ErrorInput id={"errorCategory"} message={stateError.category} /> : ""}
    </div>
  );
};

export default SelectInput;
