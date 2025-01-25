/* eslint-disable react/no-unknown-property */
import { Link } from "react-router";
import banner from "../../assets/banner-3.gif";
const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-gray-950 h-[90vh] text-gray-100">
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center gap-14">
        <div className="w-2/3 mx-auto">
          <h1 className="text-7xl font-bold mb-7 abril-fatface-regular">
            <span className="block whitespace-nowrap py-1">Data Analysis</span>
            <span className="block text-center py-1">&</span>
            <span className="block py-1">Statistics</span>{" "}
          </h1>
          <p className="text-center my-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            eveniet omnis commodi beatae voluptatum quae cumque quibusdam
            debitis, magnam quidem!
          </p>

          <button className="px-5 py-2.5 bg-blue-500 text-white font-medium hover:bg-gray-100 hover:text-blue-700 rounded-full">
            <Link to="/sign-up">Get Started</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-[90vh]">
        <img src={banner} alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Banner;
