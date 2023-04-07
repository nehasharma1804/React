import { useState } from "react";

const Header = () => {
  const [loggedIn,setLLoggedIn]=useState(false);
    return(


    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="login-container">
      {loggedIn?<button onClick={()=>{setLLoggedIn(false)}}>Login</button>:
      <button onClick={()=>{setLLoggedIn(true)}}>Logout</button>}
      </div>
    </div>
    )
    };

    export default Header;