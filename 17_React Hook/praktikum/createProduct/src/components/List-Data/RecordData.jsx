import DeleteRecordButton from "../Button/DeleteRecordButton";
import EditRecordButton from "../Button/EditRecordButton";

const RecordData = ({ no, name, category, freshness, price, setStateData }) => {
  return (
    <>
      <tr key={no}>
        <th scope="row" className="w-25">
          {no}
        </th>
        <td>{name}</td>
        <td>{category}</td>
        <td>{freshness}</td>
        <td>{price}</td>
        <td>
          <div className="container">
            <div className="row">
              <DeleteRecordButton setStateData={setStateData} no={no} />
              <EditRecordButton />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default RecordData;
