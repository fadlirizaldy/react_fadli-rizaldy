const DeleteButton = ({ setStateData }) => {
  const handleDeleteData = (e) => {
    setStateData((currentData) => currentData.slice(0, -1));
  };
  return (
    <div className="col-1 me-1">
      <button className="btn btn-primary mt-1" id="deleteButton" type="button" onClick={handleDeleteData}>
        Deletion
      </button>
    </div>
  );
};

export default DeleteButton;
