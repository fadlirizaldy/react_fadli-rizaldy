import ErrorInput from "../../elements/Form/ErrorInput";

const CheckInput = ({ setFreshness, value, stateError }) => {
  const handleCheckValue = (e) => {
    let isChecked = e.target.checked;

    if (isChecked) {
      setFreshness(e.target.value);
      return false;
    }
  };
  return (
    <div className="py-4">
      <label htmlFor="product-freshness" className="form-label">
        Product Freshness
      </label>
      <div className="mt-1">
        <div className="form-check">
          <input id="brandNew" name="productFreshness" value="Brand New" type="radio" onChange={(e) => handleCheckValue(e)} className="form-check-input" checked={value === "Brand New"} />
          <label className="form-check-label" htmlFor="brandNew">
            Brand New
          </label>
        </div>
        <div className="form-check">
          <input id="secondHand" name="productFreshness" type="radio" value="Second Hand" onChange={(e) => handleCheckValue(e)} className="form-check-input" checked={value === "Second Hand"} />
          <label className="form-check-label" htmlFor="secondHand">
            Second Hand
          </label>
        </div>
        <div className="form-check">
          <input id="refurbished" name="productFreshness" type="radio" value="Refurbished" onChange={(e) => handleCheckValue(e)} className="form-check-input" checked={value === "Refurbished"} />
          <label className="form-check-label" htmlFor="refurbished">
            Refurbished
          </label>
        </div>
      </div>
      {stateError && value.length < 1 ? <ErrorInput id={"errorFreshness"} message={`Freshness product field cannot be Empty`} /> : ""}
    </div>
  );
};

export default CheckInput;
