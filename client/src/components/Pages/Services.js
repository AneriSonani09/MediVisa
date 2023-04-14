import React from 'react'

function Services() {

    const style1 = {"maxWidth":"500px"}
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={style1}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
              Required Tests
            </h5>
            <h1 className="display-4">Thorough Physical Examination</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-bone text-white"></i>
                </div>
                <h4 className="mb-3">Chest X-Rays</h4>
                <p className="m-0">
                      This is an important medical examination to determine any
                      persisting issues with crucial systems. If a female
                      applicant is pregnant, the X-Ray test is avoided for
                      better health of the fetus.
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-flask text-white"></i>
                </div>
                <h4 className="mb-3">Urine Analysis</h4>
                <p className="m-0">
                It is done to check for any signs of kidney or bladder problems, as well as to screen for communicable diseases like sexually transmitted infections. 
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-tint text-white"></i>
                </div>
                <h4 className="mb-3">Blood Test</h4>
                <p className="m-0">
                Blood test is done to check for any signs of infectious diseases, such as HIV, Hepatitis B or C, Syphilis, or Tuberculosis. The blood test also checks the applicant's blood type and hemoglobin levels.
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
                <h4 className="mb-3">Physical Examination</h4>
                <p className="m-0">
                It involves a thorough check-up of the applicant's general health, including their heart, lungs, eyes, ears, nose, throat, and skin. 
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-syringe text-white"></i>
                </div>
                <h4 className="mb-3">Immunization</h4>
                <p className="m-0">
                The applicant must provide proof of vaccination for certain diseases, including measles, mumps, rubella, polio, tetanus, diphtheria, pertussis, and varicella.
                </p>
                <a className="btn btn-lg btn-primary rounded-pill" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                  <i className="fa fa-2x fa-notes-medical text-white"></i>
                </div>
                <h4 className="mb-3">Medical History</h4>
                <p className="m-0">
                Applicants will be asked to provide details about any pre-existing medical conditions, including mental health issues and chronic diseases.
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
