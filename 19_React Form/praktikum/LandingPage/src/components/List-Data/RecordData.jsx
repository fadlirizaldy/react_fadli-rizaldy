import DeleteRecordButton from "../Button/DeleteRecordButton";
import EditRecordButton from "../Button/EditRecordButton";
import { Link, useNavigate } from "react-router-dom";

const RecordData = ({ data, setStateData }) => {
  const navigate = useNavigate();
  const action = () => {
    navigate(`/product/detail/${data.no}`, {
      state: { data },
    });
  };

  return (
    <>
      <tr key={data.no} onClick={action}>
        <th scope="row" className="w-25">
          {data.no}
        </th>
        <td>{data.name}</td>
        <td>{data.category}</td>
        <td>{data.freshness}</td>
        <td>
          <img src={data.image} alt="productImage.jpg" />
        </td>
        <td>{data.price}</td>
        <td>
          <div className="container">
            <div className="row">
              <DeleteRecordButton setStateData={setStateData} no={data.no} />
              <EditRecordButton />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RecordData;
