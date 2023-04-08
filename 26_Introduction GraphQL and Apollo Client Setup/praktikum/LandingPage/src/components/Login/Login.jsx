// import { useLogin } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  // const { dispatch } = useLogin();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    // dispatch({ type: "setIsLogin", payload: true });
    // localStorage.setItem("isSignup", true);
    event.preventDefault();
    const dummyUser = { username: "admin", password: "admin" };
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
      localStorage.setItem("isLoggedIn", true);
      navigate(`/product`);
    } else if (username === dummyUser.username && password === dummyUser.password) {
      localStorage.setItem("user", JSON.stringify(dummyUser));
      localStorage.setItem("isLoggedIn", true);
      navigate(`/product`);
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="container my-4 vh-100 d-flex justify-content-center">
      <form className="w-50 p-4 border h-75" onSubmit={handleLogin}>
        <div className="form-outline mb-4 ">
          <label className="form-label">Username (admin)</label>
          <input type="text" id="form2Example1" className="form-control" placeholder="Username" onChange={({ target }) => setUsername(target.value)} />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label">Password (admin)</label>
          <input type="password" className="form-control" placeholder="Password" onChange={({ target }) => setPassword(target.value)} />
        </div>

        <div className="text-danger">
          <p>{errorMessage}</p>
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
