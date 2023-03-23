const InputTextArea = ({ type, id, label }) => {
  return (
    <div className="my-3">
      <label for="exampleInputTextArea" className="form-label">
        {label}
      </label>
      <textarea type={type} className="form-control" id={id}></textarea>
    </div>
  );
};

export default InputTextArea;
