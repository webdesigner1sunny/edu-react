// import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="sticky-nav js-sticky-header">
        <div className="container position-relative">
          <div className="site-navigation text-center">
            <a href="index.html" className="logo menu-absolute m-0">
              Learner<span className="text-primary">.</span>
            </a>

            <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              {/* <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li> */}
              {/* <li>
                <a href="staff.html">Our Staff</a>
              </li> */}
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  About
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  Contacts
                </a>
              </li>
            </ul>

            <a
              href="#"
              className="btn-book btn btn-secondary btn-sm menu-absolute"
            >
              Enroll Now
            </a>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
