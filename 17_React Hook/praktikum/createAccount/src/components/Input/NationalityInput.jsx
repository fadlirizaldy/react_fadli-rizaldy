const NationalityInput = () => {
  return (
    <div className="py-3">
      <label htmlFor="nationality" className="form-label">
        Nationality
      </label>
      <select id="nationality" className="form-select">
        <option value="" hidden></option>
        <option value="Indonesia">Indonesia</option>
        <option value="Singapore">Singapore</option>
        <option value="New Zealand">New Zealand</option>
        <option value="America">America</option>
      </select>
    </div>
  );
};

export default NationalityInput;
