import { NavLink } from "react-router-dom";

const Motto = () => {
  const style = {
    backgroundColor: "#f5eaea",
  };

  return (
    <div className="container-fluid motto vh-100" style={style}>
      <div className="row mb-3 d-flex justify-content-center">
        <hr class="bg-success border-4 w-75 " />
      </div>
      <div className="row d-flex justify-content-center align-items-center my-5 py-5">
        <div className="col d-flex justify-content-center">
          <img src="src/assets/robot-food.png" className="rounded robotImage" alt="robotfoodies" />
        </div>
        <div className="col py-5 px-5">
          <h2 className="mb-3">Bring Your Curiosity Here</h2>
          <p>This project will full fill your curiosity about the food you casually meet. Get trouble to know traditional food you haven't met before? try Tradify</p>
          <button type="button" className="btn bg-primary text-white">
            <NavLink to="/about" className="text-white text-decoration-none">
              Learn More
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Motto;
