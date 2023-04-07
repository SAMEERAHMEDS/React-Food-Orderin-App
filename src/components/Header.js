import { useState, useContext } from "react";
import Logo from "../assests/img/foodVilla.png";
import { Link } from "react-router-dom";
import About from "./About";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img className="h-28 p-2 " alt="Logo" src={Logo} />
  </a>
);

const Header = () => {
  const { user } = useContext(UserContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="sticky top-0 z-10">
      <div className="flex justify-between w-full h-25 py-2 px-4 bg-white bg-grey-50 shadow-lg shadow-gray-500/50">
        <Title />
        <div className="flex">
          <ul className="flex py-10 font-extrabold">
            <Link className="hover:text-[#fc8019]" to="/">
              <li className="py-1 px-2">Home</li>
            </Link>

            <Link className="hover:text-[#fc8019]" to="/about">
              <li className="py-1 px-2 ">About</li>
            </Link>

            <Link className="hover:text-[#fc8019]" to="/contact">
              <li className="py-1 px-2">Contact</li>
            </Link>

            <li className="py-1 px-2">
              <div>
                <Link
                  className="flex items-center hover:text-[#fc8019] relative "
                  to="/cart"
                >
                  {/* <MdShoppingCart fontSize="24px" /> */}
                  <span
                    data-testid="cart"
                    className="absolute top-[-8px] left-4 w-4 h-4 p-3 flex justify-center items-center rounded-full bg-lime-500 text-white text-xs"
                  >
                    {/* {cartItems} */}
                    Cart
                  </span>
                </Link>
              </div>
            </li>
            <Link className="hover:text-[#fc8019]" to="/instamart">
              <li className="py-1 px-2">Instamart</li>
            </Link>
          </ul>
        </div>
        {user.name}
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
