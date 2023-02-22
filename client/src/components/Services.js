import React from 'react'

function Services() {

    const style1 = {"maxWidth":"500px"}
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={style1}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Services
            </h5>
            <h1 className="display-4">Excellent Medical Services</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-user-md text-white"></i>
                </div>
                <h4 className="mb-3">General Information</h4>
                <p className="m-0">
                  The test contents in the medical examination packages of CIC
                  are only as per the advice of the Canadian consulate. If
                  required additional tests have to be done as per their
                  protocol.
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-procedures text-white"></i>
                </div>
                <h4 className="mb-3">Appointment Details</h4>
                <p className="m-0">
                  Applicants who are unable to keep up their appointment are
                  requested to cancel at least one day prior to the appointment
                  day.
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-stethoscope text-white"></i>
                </div>
                <h4 className="mb-3">Outdoor Checkup</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-ambulance text-white"></i>
                </div>
                <h4 className="mb-3">Ambulance Service</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-pills text-white"></i>
                </div>
                <h4 className="mb-3">Medicine & Pharmacy</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-microscope text-white"></i>
                </div>
                <h4 className="mb-3">Blood Testing</h4>
                <p className="m-0">
                  Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                  rebum stet, justo elitr dolor amet sit
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services
