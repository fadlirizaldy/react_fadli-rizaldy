import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CardData = ({ data }) => {
  const navigate = useNavigate();
  const action = () => {
    navigate(`/product/detail/${data.id}`, {
      state: { data },
    });
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="" className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
        <a className="btn btn-primary" onClick={action}>
          detail
        </a>
      </div>
    </div>
  );
};

export default CardData;
