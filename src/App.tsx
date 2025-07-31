import "./App.css";

function App() {
  return (
    <>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav mb-5">
        <div className="sticky-nav js-sticky-header">
          <div className="container position-relative">
            <div className="site-navigation text-center">
              <a href="index.html" className="logo menu-absolute m-0">
                Learner<span className="text-primary">.</span>
              </a>

              <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="news.html">News</a>
                </li>
                <li>
                  <a href="gallery.html">Gallery</a>
                </li>
                <li className="active">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>

              <a
                href="#"
                className="btn-book btn btn-secondary btn-sm menu-absolute"
              >
                Login
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
      </nav>

      <div
        className="untree_co-hero inner-page overlay"
        style={{ backgroundImage: "url('images/img-school-5-min.jpg')" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div className="col-lg-6 text-center ">
                  <h1
                    className="mb-4 heading text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Login
                  </h1>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* <!--  /.row --> */}
        </div>
        {/* {/* <!--  /.container --> */}
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div
              className="col-lg-5 mx-auto order-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <form action="#" className="form-box">
                <div className="row">
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <div className="col-12 mb-3">
                    <label className="control control--checkbox">
                      <span className="caption">Remember me</span>
                      <input type="checkbox" checked={true} />
                      <div className="control__indicator"></div>
                    </label>
                  </div>

                  <div className="col-12">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mr-auto">
              <div className="widget">
                <h3>
                  About Us<span className="text-primary">.</span>{" "}
                </h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>{" "}
              {/* <!--  /.widget --> */}
              <div className="widget">
                <h3>Connect</h3>
                <ul className="list-unstyled social">
                  <li>
                    <a href="#">
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-pinterest"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon-dribbble"></span>
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* <!--  /.widget --> */}
            </div>{" "}
            {/* <!--  /.col-lg-3 --> */}
            <div className="col-lg-2 ml-auto">
              <div className="widget">
                <h3>Projects</h3>
                <ul className="list-unstyled float-left links">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">HTML5</a>
                  </li>
                  <li>
                    <a href="#">CSS3</a>
                  </li>
                  <li>
                    <a href="#">jQuery</a>
                  </li>
                  <li>
                    <a href="#">Bootstrap</a>
                  </li>
                </ul>
              </div>{" "}
              {/* <!--  /.widget --> */}
            </div>{" "}
            {/* <!--  /.col-lg-3 --> */}
            <div className="col-lg-3">
              <div className="widget">
                <h3>Gallery</h3>
                <ul className="instafeed instagram-gallery list-unstyled">
                  <li>
                    <a className="instagram-item" href="#" data-fancybox="gal">
                      {" "}
                      <img
                        src="assets/images/gal_1.jpg"
                        alt=""
                        width="72"
                        height="72"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/gal_2.jpg"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_2.jpg"
                        alt=""
                        width="72"
                        height="72"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/gal_3.jpg"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_3.jpg"
                        alt=""
                        width="72"
                        height="72"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/gal_4.jpg"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_4.jpg"
                        alt=""
                        width="72"
                        height="72"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/gal_5.jpg"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_5.jpg"
                        alt=""
                        width="72"
                        height="72"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="instagram-item"
                      href="images/gal_6.jpg"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_6.jpg"
                        alt=""
                        width="72"
                        height="72"
                      />
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* <!--  /.widget --> */}
            </div>{" "}
            {/* <!--  /.col-lg-3 --> */}
            <div className="col-lg-3">
              <div className="widget">
                <h3>Contact</h3>
                <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                <ul className="list-unstyled links mb-4">
                  <li>
                    <a href="tel://11234567890">+1(123)-456-7890</a>
                  </li>
                  <li>
                    <a href="tel://11234567890">+1(123)-456-7890</a>
                  </li>
                  <li>
                    <a href="#">info@mydomain.com</a>
                  </li>
                </ul>
              </div>{" "}
              {/* <!--  /.widget --> */}
            </div>{" "}
            {/* <!--  /.col-lg-3 --> */}
          </div>{" "}
          {/* <!--  /.row --> */}
          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="copyright">
                Copyright &copy; All Rights Reserved.{" "}
              </p>
            </div>
          </div>
        </div>{" "}
        {/* <!--  /.container --> */}
      </div>

      {/* <!--  /.container --> */}

      <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}

export default App;
