import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { CreateAuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser, googleDirectLogin } = useContext(CreateAuthContext)
  const navigateTo = useNavigate()

  const handleLoginButton = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // set to context function
    loginUser(email, password)
    .then(res => {
      console.log(res.user);
      console.log("login success")
      e.target.reset();
      navigateTo("/")
    })
    .catch(err => console.log(err.message))
  };

  const handlePopupLogin = () => {
    googleDirectLogin()
    .then(res => {
      console.log(res.user);
      console.log("google popup login success")
      navigateTo("/")
    })
    .catch(err => console.log(err.message))
  }

  return (
    <div className="hero min-h-[80vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLoginButton} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-green-400 text-white hover:bg-green-400">
                Login
              </button>
            </div>
          </form>
          <button onClick={handlePopupLogin} className="px-4 py-1 my-2 rounded-xl bg-red-100 text-3xl text-center mx-auto"><FcGoogle /></button>
          <p className="text-center mb-4">
            New Here ?{" "}
            <Link to={"/register"}>
              {" "}
              <button className="text-green-500">Register</button>{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
