import React from "react";
import CardData from "../CardData/CardData";
import { gql, useQuery, useMutation, useSubscription } from "@apollo/client";
import { GetProductList, SubscriptionProduct } from "../../services/queryGraphql";

import { Link, useNavigate } from "react-router-dom";

const ListDataHome = () => {
  // const { data, loading, error } = useQuery(GetProductList);
  const { data, loading, error } = useSubscription(SubscriptionProduct);

  const navigate = useNavigate();
  const action = () => {
    navigate(`/product/list`);
  };

  return (
    <div className="container p-4">
      <h2>Product List</h2>
      <div className="row">
        {!loading
          ? data?.product.slice(0, 3).map((data) => {
              //   console.log(data);
              return (
                <div className="col-md-4 col-sm-6">
                  <CardData data={data} />
                </div>
              );
            })
          : "Loading.."}
      </div>
      <div className="row mt-3 ">
        <div className="col-3 ms-auto d-flex justify-content-end">
          <button className="btn btn-primary" onClick={action}>
            Load More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListDataHome;
