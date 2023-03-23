import { useState } from "react";

const loggedInUser = () => {
  //API call to check authentication

  return false;
};

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="Logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyWeMhSa2GNCHH27wLCMm-EBxnZopGfsFdZ8IsagDEZhTMezVuAnWoxpJTVqDTNxYCrzw&usqp=CAU"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
