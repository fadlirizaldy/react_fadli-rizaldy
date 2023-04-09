import { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import TableData from "../components/List-Data/TableData";

const CreateProduct = () => {
  return (
    <div className="createProduct">
      <Form />
      <TableData />
    </div>
  );
};

export default CreateProduct;
