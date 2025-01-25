import Signup from "./SignUp";
import { Link } from "react-router";
import image from "../../assets/sign-in-card.gif";

const Register = () => {
  return (
    <div className="flex justify-center items-center gap-20 h-screen bg-black">
      <div className="h-4/5 border p-6 w-[40%] bg-gray-100 rounded-md shadow-md"
      style={{
        background: `url(${image})`,
        backgroundSize: "cover"
      }}
      >
        <h1 className="text-center my-5 text-2xl font-semibold text-gray-200 libre-baskerville-bold">
          Create Your Account{" "}
        </h1>
        <Signup />
        <p className="text-center my-6 text-sm text-gray-200">
          Already Have an Account? <Link to="/sign-in" className="font-semibold underline hover:text-blue-600 pl-2">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
