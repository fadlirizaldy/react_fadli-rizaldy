// import { useDispatch } from "react-redux";
// import { deleteProduct, deleteProductAxios } from "../../services/redux/products/productSlice";
import { gql, useQuery, useMutation } from "@apollo/client";

import { DeleteProductById, GetProductList } from "../../services/queryGraphql";

const DeleteRecordButton = ({ id }) => {
  // const dispatch = useDispatch();
  const [deleteProduct, { loading, error }] = useMutation(DeleteProductById, {
    refetchQueries: [GetProductList],
  });

  const handleDeleteRecord = (e) => {
    if (confirm("Are you sure want to delete this data?")) {
      deleteProduct({
        variables: {
          id,
        },
      });
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
