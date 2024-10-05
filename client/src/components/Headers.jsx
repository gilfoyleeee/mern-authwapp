import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Headers = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-200 shadow-lg">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-xl font-bold text-indigo-600">Auth App</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-indigo-600 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/profile"
            className="text-gray-700 hover:text-indigo-600 transition duration-200"
          >
            {currentUser ? (
              <div className="flex items-center gap-2">
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-9 w-9 rounded-full object-cover"
                />
                <span className="font-medium">{currentUser.username}</span>
              </div>
            ) : (
              <span>Profile</span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-indigo-600 focus:outline-none"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-100 px-4 py-2 space-y-2">
          <Link
            to="/"
            className="block text-gray-700 hover:bg-indigo-100 p-2 rounded"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:bg-indigo-100 p-2 rounded"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/profile"
            className="block text-gray-700 hover:bg-indigo-100 p-2 rounded"
            onClick={toggleMenu}
          >
            {currentUser ? (
              <div className="flex items-center gap-2">
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span>{currentUser.username}</span>
              </div>
            ) : (
              <span>Profile</span>
            )}
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Headers;
