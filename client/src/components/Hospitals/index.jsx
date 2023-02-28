import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Hospitals() {
    const [regionName,setregionName]=useState();
    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            setregionName(data.region);
            console.log(regionName);
        }).catch((error) => {
            console.log(error);
        });
    };
    useEffect(()=>{
        getGeoInfo();
        // handleSubmit();
    },[])

    const [data, setData] = useState({
      state: regionName,
  });
   
  const [error, setError] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
          const url="http://localhost:8000/api/hospital";
          const {data: res} = await axios.get(url,data);
          console.log(res);
          // window.location = "/";
      }
      catch(error){
          if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      setError(error.response.data.message);
    }
      }
  };


  return (
    <div>
        <div className="container-fluid py-5">
        <div className="container">
        <div className="row g-5">
            <div className="col-lg-4 col-md-6">
            <div className="pt-2">
              <button href="" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2" onClick={handleSubmit}>
                Confirm
              </button>
            </div>
              <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <h4 className="mb-3">{regionName}</h4>
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
        </div>
        </div>
        </div>
    </div>
  )
}

export default Hospitals
