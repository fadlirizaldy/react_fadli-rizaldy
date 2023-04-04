import ErrorInput from "../../elements/Form/ErrorInput";

const SelectInput = ({ setCategory, value, stateError }) => {
  return (
    <div className="py-4">
      <label htmlFor="username" className="form-label">
        Product Category
      </label>
      <select
        className={`form-select ${stateError.isError && value.length < 1 ? "border border-danger" : ""}`}
        id="productCategory"
        value={value}
        onChange={({ target }) => setCategory(target.value)}
        aria-label="selectCategory"
        data-testid="select-category"
      >
        <option value="" hidden></option>
        <option value="Handphone" data-testid="select-option">
          Handphone
        </option>
        <option value="Laptop" data-testid="select-option">
          Laptop
        </option>
        <option value="Computer" data-testid="select-option">
          Computer
        </option>
      </select>
      {stateError.isError && value.length < 1 ? <ErrorInput id={"errorCategory"} message={stateError.category} /> : ""}
    </div>
  );
};

export default SelectInput;
