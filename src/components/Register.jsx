import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext, auth } from "./AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { signUp, signInWithGoogle, signInWithGithub, setUser, setIsLogged } =
    useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const url = form.photourl.value;
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(
        password
      )
    ) {
      toast(
        "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }
    signUp(email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: url ? url : "/images/user.png",
        })
          .then(() => {})
          .catch((error) => {
            toast(error.message);
          });
        const user = result.user;
        // setUser(null);
        // console.log(user);
        setIsLogged(false);
        toast("successfully registration !!");
      })
      .catch((error) => toast(error.message));
    event.target.reset();
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then(() => {
        setIsLogged(true);
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
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                name="photourl"
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary mb-3">Register</button>
            </div>
            <h1>
              Already Have An Account ? <Link to={"/login"}>Login</Link>
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

export default Register;
