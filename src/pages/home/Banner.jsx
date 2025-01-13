import { Link } from "react-router";
import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-gray-200 h-full">
      <div className="w-4/5 mx-auto flex flex-col justify-center items-center gap-14">
        <h1 className="text-7xl text-purple-600 font-bold ml-5">
          Data Analysis & Statistics{" "}
        </h1>
        <p className="text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          eveniet omnis commodi beatae voluptatum quae cumque quibusdam debitis,
          magnam quidem!
        </p>

        <button className="p-4 bg-blue-700 text-white font-medium hover:bg-gray-100 hover:text-blue-700 rounded">
          <Link to="/sign-up">Get Started</Link>
        </button>
      </div>

      <div className="w-2/3">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
