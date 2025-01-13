import Signup from "./SignUp";
import signUp from "../../assets/sign-up.jpg";
import { Link } from "react-router";
const Register = () => {
  return (
    <div className="flex justify-center items-center gap-20 h-screen">
      <div className="w-1/3 flex flex-col items-center gap-7">
        <img src={signUp} alt="" />
        <Link to="/" className="px-3 py-2 bg-purple-700 rounded text-gray-100"> Back to Home </Link>
      </div>
      <div className="h-4/5 border p-6 w-[40%] bg-gray-100 rounded-md shadow-md">
        <h1 className="text-center my-5 text-2xl font-semibold">
          Create Your Account{" "}
        </h1>
        <Signup />
        <p className="text-center my-6 text-sm">
          Already Have an Account? <Link to="/sign-in" className="text-purple-600 underline hover:text-blue-600 pl-2">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
