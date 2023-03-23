import DescInput from "../../elements/Contact/DescInput";

const InputForm = ({ type, id, label, value, setData }) => {
  const handleOnChange = (event) => {
    if (id == "inputName") {
      setData((prevData) => ({ ...prevData, name: event.target.value }));
    } else if (id == "inputEmail") {
      setData((prevData) => ({ ...prevData, email: event.target.value }));
    }
  };

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" id={id} value={value} onChange={handleOnChange} required />
      {id === "inputEmail" ? <DescInput id={"DescEmailInput"} label={"We'll never share your email with anyone else."} /> : ""}
    </div>
  );
};

export default InputForm;
