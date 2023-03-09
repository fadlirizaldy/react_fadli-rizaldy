import DeleteButton from "../Button/DeleteButton";
import SearchButton from "../Button/SearchButton";

const TableData = () => {
  return (
    <div className="container m-5 py-2">
      <h2 style={{ textAlign: "center" }}>List Product</h2>
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Description</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody id="tbody-product"></tbody>
        </table>
        <div className="mb-3" id="alertSearch">
          No Data
        </div>
      </div>
      <input type="text" className="form-control" id="searchInput" placeholder="Search by Product Name" style={{ width: "300px" }} />
      <div className="row d-flex">
        <DeleteButton />
        <SearchButton />
      </div>
    </div>
  );
};

export default TableData;
