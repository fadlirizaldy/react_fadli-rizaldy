const RecordData = ({ no, name, category, image, freshness, desc, price }) => {
  return (
    <>
      <tr key={no}>
        <th scope="row">{no}</th>
        <td>{name}</td>
        <td>{category}</td>
        <td>{image}</td>
        <td>{freshness}</td>
        <td>{desc}</td>
        <td>{price}</td>
      </tr>
    </>
  );
};

export default RecordData;
