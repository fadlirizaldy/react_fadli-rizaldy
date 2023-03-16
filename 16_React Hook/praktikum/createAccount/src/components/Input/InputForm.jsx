const InputForm = ({ title }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{title}</label>
      <input type="text" className="form-control" />
    </div>
  );
};

export default InputForm;
