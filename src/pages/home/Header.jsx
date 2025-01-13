import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-around gap-6 items-center py-6 bg-blue-400 text-gray-800">
      <div>
        <p className="text-center text-3xl">Jamovi</p>
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
      <div className="flex space-x-5 text-gray-200">
        <button className="px-3 py-2 bg-gray-700 rounded-md hover:bg-gray-200 hover:text-black transition-all duration-300">
          <Link to="/sign-in">Log In</Link>
        </button>
        <button className="px-3 py-2 bg-blue-700 rounded-md hover:bg-gray-200 hover:text-black transition-all duration-300">
          <Link to="/sign-up">Get Started</Link>
        </button>
      </div>
    </header>
  );
};

export default Header;
