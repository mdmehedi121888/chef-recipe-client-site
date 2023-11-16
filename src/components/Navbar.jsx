import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import "./NavBar.css";

const Navbar = () => {
  const { user, setUser, logOut, setIsLogged, isLogged } =
    useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {
        setUser(null);
        setIsLogged(false);
        toast("Log out successfully !!");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  // console.log(user);
  return (
    <div className="bg-base-300">
      <div className="navbar container mx-auto flex justify-between">
        <Link to={"/"} className="font-bold text-2xl">
          BhuriBhoj
        </Link>
        <div className="text-lg font-semibold gap-5">
          <nav id="home">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </nav>
          <nav id="blog">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={"/blog"}
            >
              Blog
            </NavLink>
          </nav>
          {isLogged && (
            <div className="flex justify-center items-center gap-3">
              <img
                className="rounded-full h-20 w-20"
                src={user.photoURL}
                title={user.displayName ? user.displayName : ""}
              ></img>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          {!isLogged && (
            <nav id="login">
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={"/login"}
              >
                Login
              </NavLink>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
