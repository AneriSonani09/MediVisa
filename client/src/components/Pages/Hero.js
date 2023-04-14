import React from 'react'
import {NavLink} from 'react-router-dom'

function Hero() {

  const divStyle = {
    borderColor: ' rgba(256, 256, 256, .3) !important', 
  }
  return (
    <div className="container-fluid bg-primary py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row justify-content-start">
          <div className="col-lg-8 text-center text-lg-start">
            <h5
              className="d-inline-block text-white text-uppercase border-bottom border-5"
              style={divStyle}>
              Welcome To MediVisa
            </h5>
            <h1 className="display-1 text-white mb-md-4">
            Your One-Stop Solution for Visa Medical Tests
            </h1>
            <div className="pt-2">
              <NavLink to="/rules" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Rules</NavLink>
              <NavLink to="/hospitals" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Appointment</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero
