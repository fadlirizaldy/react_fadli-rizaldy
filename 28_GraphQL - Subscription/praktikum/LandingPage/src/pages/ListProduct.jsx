import React, { useState } from "react";
import { GetProductList, SubscriptionProduct } from "../services/queryGraphql";
import { useQuery, useSubscription } from "@apollo/client";
import CardData from "../components/CardData/CardData";

const ListProduct = () => {
  // const { data, loading, error } = useQuery(GetProductList);
  const { data, loading, error } = useSubscription(SubscriptionProduct);

  const [keyword, setKeyword] = useState("");

  return (
    <div className="container p-2">
      <div className="row mt-4 text-center">
        <h1>List Product</h1>
        <hr />
      </div>
      <div className="row w-75 mx-auto mb-3">
        <div className="col">
          <div className="input-group rounded ">
            <input type="search" className="form-control rounded" placeholder="Search" onChange={({ target }) => setKeyword(target.value)} />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        {!loading
          ? data?.product
              .filter((data) => {
                if (keyword === "") {
                  return data;
                } else if (data.name.toLowerCase().includes(keyword.toLowerCase())) {
                  return data;
                }
              })
              .map((data) => {
                return (
                  <div className="col-md-4 col-sm-6 py-3">
                    <CardData data={data} />
                  </div>
                );
              })
          : "Loading.."}
      </div>
    </div>
  );
};

export default ListProduct;
