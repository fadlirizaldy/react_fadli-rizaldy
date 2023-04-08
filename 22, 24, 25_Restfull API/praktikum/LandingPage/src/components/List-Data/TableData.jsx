import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteButton from "../Button/DeleteButton";
import RandomButton from "../Button/RandomButton";
import RecordData from "./RecordData";
import { getProducts } from "../../services/redux/products/productSlice";

const TableData = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.products);
  console.log("datanya: ", datas);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [keywordSearch, setKeywordSearch] = useState("");

  let dataFiltered = datas?.filter((data) => data.name.toLowerCase().includes(keywordSearch.toLowerCase()));

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
              <th scope="col">Product Freshness</th>
              <th scope="col">Product Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="tbody-product">
            {keywordSearch.length > 1
              ? dataFiltered?.map((data, idx) => {
                  return <RecordData data={data} />;
                })
              : datas?.map((data, idx) => {
                  return <RecordData data={data} />;
                })}
          </tbody>
        </table>
        {/* Handle element for data if not found */}
        {datas?.length < 1 ? (
          <div className="mb-3" id="alertSearch">
            No Data
          </div>
        ) : dataFiltered.length < 1 ? (
          <div class="alert alert-danger" role="alert">
            Data not found!
          </div>
        ) : (
          ""
        )}
      </div>
      <input type="text" className="form-control" id="searchInput" placeholder="Search by Product Name" style={{ width: "300px" }} onChange={({ target }) => setKeywordSearch(target.value)} />
      <div className="row d-flex">
        <DeleteButton />
        <RandomButton />
      </div>
    </div>
  );
};

export default TableData;
