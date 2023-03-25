import { useLogin } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //   const state = useLocation();

  //   console.log(state);

  const { dispatch } = useLogin();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    dispatch({ type: "setIsLogin", payload: true });
    localStorage.setItem("isSignup", true);
    navigate(`/product`);
  };

  return (
    <div className="container my-4 vh-100 d-flex justify-content-center">
      <form className="w-50 p-4 border h-75" onSubmit={handleLogin}>
        <div className="form-outline mb-4 ">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
