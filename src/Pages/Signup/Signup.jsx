import login from "../../assets/images/login/login.svg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password).then((result) => {
      console.log(result.user);
    })
        .catch(error => {
          console.error(error)
      })
  };
  return (
    <div className="  min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row gap-6">
        <div className="text-center mx-auto md:w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card  max-w-sm shrink-0 border border-gray-200 w-full md:w-1/2  rounded-sm">
          <h1 className="text-3xl my-4 font-bold text-center">Sign up </h1>
          <form onSubmit={handleSignup} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered rounded-sm focus:outline-none"
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
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered rounded-sm focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary bg-[#FF3811] text-white border-none"
                type="submit"
                value="Sign up"
              />
            </div>
            <p className="text-center text-slate-800 font-medium">
              Or Sign In with
            </p>
            <div className="flex justify-center gap-3 my-2">
              <span className=" p-2  rounded-full bg-gray-200">
                <FcGoogle className="text-xl " />
              </span>
              <span className="p-2 rounded-full bg-gray-200">
                <FaFacebookF className="text-blue-700  text-xl" />
              </span>
              <span className=" p-2  rounded-full bg-gray-200">
                <FaLinkedinIn className="text-blue-600 text-xl" />{" "}
              </span>
            </div>
            <p className="text-center">
              Already have an account? please
              <Link to="/login">
                <span className="text-orange-600"> Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
