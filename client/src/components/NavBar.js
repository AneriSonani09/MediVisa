import React from 'react'

function NavBar() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
      };
      
  return (
    <div>
      {/* TopBar start */}
      <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href="">
                  <i className="bi bi-telephone me-2"></i>+012 345 6789
                </a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href="">
                  <i className="bi bi-envelope me-2"></i>info@example.com
                </a>
              </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
              <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="text-body px-2" href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="text-body ps-2" href="">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TopBar ends */}

      {/* Navbar Starts */}
      <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 text-uppercase text-primary">
                <i className="fa fa-clinic-medical me-2"></i>Ready 2 Fly
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="service.html" className="nav-item nav-link">
                  Service
                </a>
                <a href="price.html" className="nav-item nav-link">
                  Pricing
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="blog.html" className="dropdown-item">
                      Blog Grid
                    </a>
                    <a href="detail.html" className="dropdown-item">
                      Blog Detail
                    </a>
                    <a href="team.html" className="dropdown-item">
                      The Team
                    </a>
                    <a href="testimonial.html" className="dropdown-item">
                      Testimonial
                    </a>
                    <a href="appointment.html" className="dropdown-item">
                      Appointment
                    </a>
                    <a href="search.html" className="dropdown-item">
                      Search
                    </a>
                  </div>
                </div>
                <a
                  href="http://localhost:3000/Userpro"
                  className="nav-item nav-link"
                >
                  Profile
                </a>
                <button className="nav-item nav-link" onClick={handleLogout}>
                  Logout{" "}
                </button>
                {/* <a href="contact.html" className="nav-item nav-link">Logout</a> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* NavBar ends */}
    </div>
  );
}

export default NavBar
