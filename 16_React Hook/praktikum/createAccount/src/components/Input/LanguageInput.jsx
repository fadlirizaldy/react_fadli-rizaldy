const LanguageInput = () => {
  return (
    <div className="py-2">
      <label htmlFor="product-freshness" className="form-label">
        Language Spoken :
      </label>
      <div className="mt-1">
        <div className="form-check">
          <input id="bahasa" name="Language" value="Bahasa" type="checkbox" className="form-check-input" />
          <label className="form-check-label">Bahasa</label>
        </div>
        <div className="form-check">
          <input id="english" name="Language" type="checkbox" value="English" className="form-check-input" />
          <label className="form-check-label">English</label>
        </div>
        <div className="form-check">
          <input id="other" name="Language" type="checkbox" value="Other" className="form-check-input" />
          <label className="form-check-label">Other</label>
        </div>
      </div>
    </div>
  );
};
export default LanguageInput;
