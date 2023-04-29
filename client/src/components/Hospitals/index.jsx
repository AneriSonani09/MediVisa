import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

function Hospitals() {
  const [regionName, setregionName] = useState();
  const [hospitals, setHospitals] = useState();
  
  const getUserLocation = () => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setregionName(data.region);
        console.log("User location");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching user location:", error);
      });
  };

  const getAllHospitals = () => {
    axios
      .post("http://localhost:8000/api/hosByRegion",{ regionName })
      .then((response) => {
        let data = response.data;
        setHospitals(data.allHospitals);
        //console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserLocation();
    getAllHospitals();
  }, [regionName]);

  return (
    <div>
      <div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5">
              <h4 className="mb-3">According to your location, best possible options are displayed here</h4>
            {(hospitals || []).map((i) => {
              return (
              <div className="col-lg-4 col-md-6" key={i._id}>
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className="mb-3">{i.hospitalName}</h4>
                  <h5>{i.city} | {i.state}</h5>
                  <p className="m-0">
                    The test contents in the medical examination packages of CIC
                    are only as per the advice of the Canadian consulate. If
                    required additional tests have to be done as per their
                    protocol.
                  </p>
                  <Link to={`/book/${i._id}`} className="btn"><i className="bi bi-arrow-right btn btn-primary"></i></Link>
                </div>
              </div>
              )})}
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default Hospitals;
