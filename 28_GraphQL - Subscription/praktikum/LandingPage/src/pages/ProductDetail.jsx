import { useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { state } = useLocation();

  return (
    <div className="vh-100">
      <h2 className="py-4 text-center">Product Detail</h2>
      <div className="Product p-4 container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img src="/src/assets/No-Image-Placeholder.png" alt="gaada" style={{ width: "300px" }} />
          </div>
          <div className="col">
            <p>Product ID : {state.data.id}</p>
            <p>Product Name : {state.data.name}</p>
            <p>Product Category : {state.data.category}</p>
            <p>Product Freshness : {state.data.freshness}</p>
            <p>Product price : {state.data.price}</p>
            <p>Product description : {state.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
