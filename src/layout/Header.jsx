import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((state) => state.client); // Access user object from clientReducer
  const userEmail = user?.email; // Access only email of user from clientReducer
  console.log(userEmail);

  return (
    <header className="bg-white shadow-lg">
      <div className="flex md:flex-row justify-between px-4 py-2">
        <div className="flex items-center">
          <i className="fas fa-shopping-bag text-black mr-2" />
          <h1 className="text-black text-xl font-bold">Butikcim</h1>
        </div>
        <div id="right-icons" className="flex items-center md:mt-0">
          <i className="fas fa-search text-black mr-2" />
          <i className="fas fa-shopping-cart text-black mr-2" />
          <i className="fas fa-bars text-black" />
          {userEmail && ( // Conditional check for userEmail
            <span className="ml-4 text-black">
              Welcome, {userEmail}
            </span>
          )}
          {!userEmail && ( // Display message if user is not logged in
            <span className="ml-4 text-black">
              You did not log in
            </span>
          )}
        </div>
      </div>
      <nav className="flex flex-col pb-4 items-center md:flex-row md:justify-center md:space-x-4">
        <Link to="/" className="text-black hover:text-gray-600 mb-2 md:mb-0">
          Home
        </Link>
        <Link to="/shop" className="text-black hover:text-gray-600 mb-2 md:mb-0">
          Shop
        </Link>
        <Link to="/contact" className="text-black hover:text-gray-600 mb-2 md:mb-0">
          Contact
        </Link>
        <Link to="/aboutus" className="text-black hover:text-gray-600 mb-2 md:mb-0">
          About Us
        </Link>
        <Link to="/team" className="text-black hover:text-gray-600 mb-2 md:mb-0">
          Team
        </Link>
        <Link to="/signup" className="text-black hover:text-gray-600 mb-2 md:mb-0">
          Sign Up
        </Link>
      </nav>
    </header>
  );
};

export default Header;