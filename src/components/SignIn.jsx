import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignin = (media) => {
    media()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        toast.success("User user logged in successfully");
        navigate("/");
        console.log(result.user);
        //update last login time
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const SignInfo = { email, lastSignInTime };

        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(SignInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => {
        toast.error(
          "Email and password do not match. Please try again.",
          error
        );
      });
  };
  return (
    <div>
      <div>
        <h2 className="text-3xl my-10 text-center">Please Signin</h2>
        <form
          onSubmit={handleSignIn}
          className="md:w-3/4 lg:w-1/2 mx-auto bg-slate-200 p-6 rounded-xl shadow-lg"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
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
              required
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          <div className="form-control mt-6">
            <button
              onClick={() => handleGoogleSignin(googleSignIn)}
              className="btn btn-primary"
            >
              With Google
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          Do not have an account{" "}
          <Link className="text-blue-600 font-bold" to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
