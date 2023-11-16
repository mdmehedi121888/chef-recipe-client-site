import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { logIn, signInWithGoogle, signInWithGithub, setIsLogged, setUser } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setIsLogged(true);
        setUser(user);
        navigate(from);
        toast("successfully login !!");
      })
      .catch((error) => toast(error.message));
    event.target.reset();
  };

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setIsLogged(true);
        const user = result.user;
        setUser(user);
        navigate(from);
        toast("successfully login with google");
      })
      .catch((error) => {
        toast(error.message);
      });
  };
  const handleGithub = () => {
    signInWithGithub()
      .then(() => {
        setIsLogged(true);
        navigate(from);
        toast("successfully login with github");
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button className="label-text-alt link link-hover">
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mb-3">Login</button>
            </div>
            <h1>
              Dont’t Have An Account ? <Link to={"/register"}>Register</Link>
            </h1>
            <p className="mt-3 text-center mb-3">or</p>
            <button onClick={handleGoogle}>
              <img src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png"></img>
            </button>
            <button onClick={handleGithub}>
              <img src="https://assets-global.website-files.com/5c2a9a234fdbba7439c48fa4/632cc59b0ce5f831d6ce0c8c_Screen%20Shot%202022-09-22%20at%204.13.26%20PM.jpg"></img>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
