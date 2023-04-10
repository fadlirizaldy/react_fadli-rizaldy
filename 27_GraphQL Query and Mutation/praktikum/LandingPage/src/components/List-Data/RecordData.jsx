import DeleteRecordButton from "../Button/DeleteRecordButton";
import EditRecordButton from "../Button/EditRecordButton";
import { Link, useNavigate } from "react-router-dom";

const RecordData = ({ data }) => {
  const navigate = useNavigate();
  const action = () => {
    navigate(`/product/detail/${data.id}`, {
      state: { data },
    });
  };

  return (
    <>
      <tr key={data.id} onClick={action}>
        <th scope="row" className="w-25">
          {data.id}
        </th>
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.freshness}</td>
        <td>{data.price}</td>
        <td>
          <div className="container">
            <div className="row">
              <DeleteRecordButton id={data.id} />
              <EditRecordButton />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RecordData;
