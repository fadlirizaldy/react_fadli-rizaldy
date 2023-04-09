import { useDispatch } from "react-redux";
import { deleteProduct } from "../../services/redux/products/productSlice";

const DeleteRecordButton = ({ no }) => {
  const dispatch = useDispatch();

  const handleDeleteRecord = (e) => {
    if (confirm("Are you sure want to delete this data?")) {
      // setStateData((prevData) => prevData.filter((data) => data.no != no));
      dispatch(deleteProduct({ id: no }));
    }
    e.stopPropagation();
  };

  return (
    <div className="col-auto p-0">
      <button className="btn btn-danger p-2" id="deleteRecord" type="button" onClick={handleDeleteRecord}>
        Delete
      </button>
    </div>
  );
};

export default DeleteRecordButton;
