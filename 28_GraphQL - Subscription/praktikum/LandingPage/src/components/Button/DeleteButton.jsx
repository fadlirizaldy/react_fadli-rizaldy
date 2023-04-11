import { gql, useQuery, useMutation } from "@apollo/client";
import { DeleteProductById, GetProductList, LatestId } from "../../services/queryGraphql";
import { useEffect } from "react";

const DeleteButton = () => {
  // const dispatch = useDispatch();
  const { data, loading, error } = useQuery(LatestId);

  const [deleteProduct] = useMutation(DeleteProductById, {
    refetchQueries: [GetProductList, LatestId],
  });

  const handleDeleteData = (e) => {
    // dispatch(deleteProductAxios({ id: -1 }));

    deleteProduct({
      variables: {
        id: data.product[0].id,
      },
    });
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
