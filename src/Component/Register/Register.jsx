import { useContext } from "react";
import { Link } from "react-router-dom";
import { CreateAuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

    const { createUser } = useContext(CreateAuthContext)

    const handleRegisterButton = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(res=> {
            console.log(res.user, "success");
        })
        .catch(err => console.log(err.message))
      };

    return (
        <div className="hero min-h-[86vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Reg now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegisterButton} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control mt-1">
              <button className="btn bg-green-400 text-white hover:bg-green-400">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mt-2 mb-4">
            Already have an account ?{" "}
            <Link to={"/login"}>
              {" "}
              <button className="text-green-500">Login</button>{" "}
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
    );
};

export default Register;