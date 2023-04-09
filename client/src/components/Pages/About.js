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
                        <img className="position-left w-100 h-100 rounded" src="img/about.jpg" alt="medical test" style={style2} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                        <h1 className="display-4">Best Medical Test For Yourself and Your Family</h1>
                    </div>
                    <p>We are authorized for Canada Visa Medical Test in India, our goal is to provide hassle free and prompt service from start to finish. Our team consists of highly qualified and experienced radiologists, technicians and staff who care for the patient at every step and guide them so that the process of undergoing tests becomes easy and stress-free as well as ensures results are accurate and reliable.</p>
                    <div className="row g-3 pt-3">
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-user-md text-primary mb-3"></i>
                                <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-procedures text-primary mb-3"></i>
                                <h6 className="mb-0">Emergency<small className="d-block text-primary">Services</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-microscope text-primary mb-3"></i>
                                <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="bg-light text-center rounded-circle py-4">
                                <i className="fa fa-3x fa-ambulance text-primary mb-3"></i>
                                <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
