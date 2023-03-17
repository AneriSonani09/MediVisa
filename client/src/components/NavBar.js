import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        // localStorage.removeItem("loggedUser");
        window.location.reload();
    };

    const user = localStorage.getItem("token");
      
  return (
    <div>
      
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
                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/slots" className="nav-item nav-link">Slots</NavLink>
                <NavLink to="/hospitals" className="nav-item nav-link">New Appointment</NavLink>
                {user && <NavLink to="/Userpro" className="nav-item nav-link">Profile</NavLink>}
                {user && 
                <button className="nav-item nav-link" onClick={handleLogout}>
                  Logout
                </button>}
                {!user && <NavLink to="/login" className="nav-item nav-link">Login</NavLink>}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* NavBar ends */}
    </div>
  );
}

export default NavBar;
