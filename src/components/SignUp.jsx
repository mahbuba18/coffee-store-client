import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const handleSignUp=(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo);

        if (
          password.length < 6 ||
          !/[A-Z]/.test(password) ||
          !/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)
        ) {
          toast.error(
            "Password must be at least 6 character & one capital letter & one special character"
          );
          return;
        }

        createUser(email, password)
        .then(result=>{
            console.log(result.user)
        }
         
        )
        .catch((error) => {
         console.log('error',error)
        });


    
        
    }
    
  return (
    <div>
      <div className="">
        <h1 className="text-2xl text-center font-semibold mt-10">
          Register Please
        </h1>
        <form
          onSubmit={handleSignUp}
          className="md:w-3/4 lg:w-1/2 mx-auto bg-slate-200 p-6 rounded-xl shadow-lg"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
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
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo"
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
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account!!
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
