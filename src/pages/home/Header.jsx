import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-around gap-6 items-center py-3 bg-gray-100 text-gray-800">
      <div>
        <p className="text-center text-3xl libre-baskerville-bold">Rivulet</p>
      </div>
      <nav className="flex space-x-4">
        <Link to="/" className="hover:text-gray-800 hover:font-semibold">
          Home
        </Link>
        <Link to="/" className="hover:text-gray-800 hover:font-semibold">
          About
        </Link>
        <Link to="/" className="hover:text-gray-800 hover:font-semibold">
          Product
        </Link>
        <Link to="/" className="hover:text-gray-800 hover:font-semibold">
          Work Flow
        </Link>
      </nav>
      <div className="flex space-x-5">
        <button className="px-4 py-2 border text-blue-500 border-blue-500 rounded-full hover:bg-blue-500 hover:text-gray-100 transition-all duration-300">
          <Link to="/sign-in">Log In</Link>
        </button>
        <button className="px-4 py-2 text-gray-100 bg-blue-500 rounded-full hover:bg-gray-200 hover:text-black transition-all duration-300">
          <Link to="/sign-up">Get Started</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
