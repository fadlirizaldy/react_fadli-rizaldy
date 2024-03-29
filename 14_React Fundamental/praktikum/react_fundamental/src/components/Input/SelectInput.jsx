const SelectInput = () => {
  return (
    <div className="py-4">
      <label for="username" className="form-label">
        Product Category
      </label>
      <select className="form-select" id="productCategory">
        <option value="" hidden></option>
        <option>Handphone</option>
        <option>Laptop</option>
        <option>Computer</option>
      </select>
      <div id="errorCategory"></div>
    </div>
  );
};

export default SelectInput;
