// import React from "react";

import NavBar from "./NavBar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div>
      <nav className="site-nav mb-5">
        <TopBar />
        <NavBar />
      </nav>
    </div>
  );
};

export default Header;
