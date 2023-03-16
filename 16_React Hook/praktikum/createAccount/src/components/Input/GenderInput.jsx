const GenderInput = () => {
  return (
    <div className="py-3">
      <label htmlFor="product-freshness" className="form-label">
        Product Freshness
      </label>
      <div className="mt-1">
        <div className="form-check">
          <input id="male" name="genderType" value="Male" type="radio" className="form-check-input" />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check">
          <input id="female" name="genderType" type="radio" value="Female" className="form-check-input" />
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-check">
          <input id="others" name="genderType" type="radio" value="Others" className="form-check-input" />
          <label className="form-check-label">Others</label>
        </div>
      </div>
    </div>
  );
};

export default GenderInput;
