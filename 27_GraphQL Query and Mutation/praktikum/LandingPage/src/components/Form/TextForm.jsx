const TextForm = ({ title, desc }) => {
  return (
    <div className="py-5 text-center">
      <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
      <h2>{title}</h2>
      <p className="lead">{desc}</p>
    </div>
  );
};

export default TextForm;
