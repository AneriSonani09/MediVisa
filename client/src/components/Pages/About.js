import React from 'react'

function About() {

    const style1 = { minHeight : '500px',}
    const style2 = {"objectFit":"cover"}

  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-5 mb-5 mb-lg-0" style={style1}>
              <div className="position-relative h-100">
                <img
                  className="position-left w-100 h-100 rounded"
                  src="img/about.jpg"
                  alt="medical test"
                  style={style2}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mb-4">
                <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">
                  About Us
                </h5>
                <h1 className="display-4">
                  Best Medical Test For Yourself and Your Family
                </h1>
              </div>
              <p>
                We are authorized for Canada Visa Medical Test in India, our
                goal is to provide hassle free and prompt service from start to
                finish. Our team consists of highly qualified and experienced
                radiologists, technicians and staff who care for the patient at
                every step and guide them so that the process of undergoing
                tests becomes easy and stress-free as well as ensures results
                are accurate and reliable.
              </p>
              <p>
                We are committed to providing the highest level of service to
                our users. Our team is constantly working to improve the
                application and add new features that make the process even more
                convenient. If you have any feedback or suggestions, please feel
                free to get in touch with us. We would love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
