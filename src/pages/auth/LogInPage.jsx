import { Link } from "react-router";
import signIn from "../../assets/sign-in.jpg";
import SignIn from "./SignIn";
import image from "../../assets/sign-in-card.gif";

const LogInPage = () => {
  return (
    <div className="flex flex-row-reverse justify-center items-center gap-20 h-screen bg-black">
      <div className="w-1/3 flex flex-col items-center gap-7">
        <img src={signIn} alt="" />
        <Link to="/" className="px-3 py-2 border-2 border-cyan-600 hover:bg-cyan-600 rounded bg-gray-200 text-cyan-600 hover:text-gray-200">
          {" "}
          Back to Home{" "}
        </Link>
      </div>

      <div
        className="h-3/4 border p-6 w-[40%] border-gray-700 rounded-md shadow-md flex flex-col justify-center text-gray-100"
        style={{
          background: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <h1 className="text-center my-5 text-2xl font-semibold libre-baskerville-bold">
          Sign In
        </h1>
        <SignIn />
        <p className="text-center text-sm my-6 text-gray-200">
          New Here?{" "}
          <Link
            to="/sign-up"
            className="underline font-semibold hover:text-blue-600 pl-2"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
