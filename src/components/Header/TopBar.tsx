// import React from "react";

const TopBar = () => {
  return (
    <div>
      <div className="pb-2 top-bar mb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-lg-9">
              <a href="#" className="small mr-3">
                <span className="icon-question-circle-o mr-2"></span>{" "}
                <span className="d-none d-lg-inline-block">
                  Have a questions?
                </span>
              </a>
              <a href="#" className="small mr-3">
                <span className="icon-phone mr-2"></span>{" "}
                <span className="d-none d-lg-inline-block">10 20 123 456</span>
              </a>
              <a href="#" className="small mr-3">
                <span className="icon-envelope mr-2"></span>{" "}
                <span className="d-none d-lg-inline-block">
                  info@mydomain.com
                </span>
              </a>
            </div>

            <div className="col-6 col-lg-3 text-right">
              <a href="login.html" className="small mr-3">
                <span className="icon-lock"></span>
                Log In
              </a>
              <a href="register.html" className="small">
                <span className="icon-person"></span>
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
