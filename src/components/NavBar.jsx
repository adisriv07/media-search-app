import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[radial-gradient(circle_at_50%_50%,#4c00ff_0%,#4f4f4f_100%)]">
      <Link className="text-start text-2xl font-semibold">Media Search</Link>
      <div className="flex gap-3 text-md font-medium text-gray-300">
        <Link
          to="/"
          className="bg-gray-700 rounded-lg px-3 py-2 active:scale-95 hover:bg-gray-800 transition duration-400"
        >
          Search
        </Link>
        <Link
          to="/collection"
          className="bg-gray-700 rounded-lg px-3 py-2 active:scale-95 hover:bg-gray-800 transition duration-400"
        >
          Collection
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
