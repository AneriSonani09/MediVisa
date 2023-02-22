import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Appointment() {
    
    

    

  return (
    <div>
      <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                        <h1 className="display-4">Make An Appointment For Your Family</h1>
                    </div>
                    <p className="text-white mb-5">Book your all appointments from the one place. We are usinf a free API for tracking user's location so it may or may not give accurate result.</p>
                    <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="">Find Doctor</a>
                    <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="">Read More</a>
                </div>

                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Appointment

