import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CreateAuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(CreateAuthContext);

  const allNav = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "bg-green-400 btn hover:bg-green-400 text-white" : "btn"
        }
      >
        Home
      </NavLink>

      {!user && (
        <>
          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              isActive
                ? "bg-green-400 btn hover:bg-green-400 text-white"
                : "btn"
            }
          >
            Register
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "bg-green-400 btn hover:bg-green-400 text-white"
                : "btn"
            }
          >
            Login
          </NavLink>
        </>
      )}
      {user && (
        <>
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive
                ? "bg-green-400 btn hover:bg-green-400 text-white"
                : "btn"
            }
          >
            Orders
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              isActive
                ? "bg-green-400 btn hover:bg-green-400 text-white"
                : "btn"
            }
          >
            Profile
          </NavLink>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(console.log("success logout"))
      .then((err) => console.log(err.message));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {allNav}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Private Route</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-1">{allNav}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>{user.email}</span>{" "}
            <button onClick={handleLogOut} className="btn">
              LogOut
            </button>
          </>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
