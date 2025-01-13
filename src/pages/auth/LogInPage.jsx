import { Link } from "react-router";
import signIn from "../../assets/sign-in.jpg";
import SignIn from "./SignIn";

const LogInPage = () => {
  return (
    <div className="flex flex-row-reverse justify-center items-center gap-20 h-screen">
      <div className="w-1/3 flex flex-col items-center gap-7">
        <img src={signIn} alt="" />
        <Link to="/" className="px-3 py-2 bg-cyan-600 rounded text-gray-100">
          {" "}
          Back to Home{" "}
        </Link>
      </div>
      <div className="h-3/4 border p-6 w-[40%] bg-gray-100 rounded-md shadow-md flex flex-col justify-center">
        <h1 className="text-center my-5 text-2xl font-semibold">
          Sign In From Here
        </h1>
        <SignIn />
        <p className="text-center text-sm my-6">
          New Here?{" "}
          <Link
            to="/sign-up"
            className="text-purple-600 underline hover:text-blue-600 pl-2"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
