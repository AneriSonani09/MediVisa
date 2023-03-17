import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import NavBar from "../NavBar";

// function Hospitals() {
//     const [regionName, setregionName]=useState();
//     const getGeoInfo = () => {
//         axios.get('https://ipapi.co/json/').then((response) => {
//             let data = response.data;
//             setregionName(data.region);
//             console.log(regionName);
//         }).catch((error) => {
//             console.log(error);
//         });
//     };
//     useEffect(()=>{
//         getGeoInfo();
//         // handleSubmit();
//     },[])

//     const [data, setData] = useState({
//       state: regionName,
//   });

//   const [error, setError] = useState("");
// const handleSubmit = async (e) => {

//   const params = {
//     loc_id: regionName,
//   }

//   const { data: res } = axios.get('http://localhost:8000/api/hospital', { params });
//   console.log(res);

//   //   e.preventDefault();
//   //   try{
//   //       const url="http://localhost:8000/api/hospital";
//   //       const {data: res} = await axios.get(url,data);
//   //       console.log(res);
//   //       // window.location = "/";
//   //   }
//   //   catch(error){
//   //       if (
//   //   error.response &&
//   //   error.response.status >= 400 &&
//   //   error.response.status <= 500
//   // ) {
//   //   setError(error.response.data.message);
//   // }
//   //   }
//   };

//   return (
//     <div>
//         <div className="container-fluid py-5">
//         <div className="container">
//         <div className="row g-5">
//             <div className="col-lg-4 col-md-6">
//             <div className="pt-2">
//               <button href="" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2" onClick={handleSubmit}>
//                 Confirm
//               </button>
//             </div>
//               <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
//                 <h4 className="mb-3">{regionName}</h4>
//                 <p className="m-0">
//                   The test contents in the medical examination packages of CIC
//                   are only as per the advice of the Canadian consulate. If
//                   required additional tests have to be done as per their
//                   protocol.
//                 </p>
//                 <a className="btn btn-lg btn-primary rounded-pill" href="">
//                   <i className="bi bi-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//         </div>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default Hospitals

function Hospitals(props) {
  const [regionName, setregionName] = useState();
  const navigate = useNavigate();
  var obj;

  fetch("https://ipapi.co/json/")
    .then((res) => res.json())
    .then((data) => {
      obj = data;
      setregionName(obj.region);
    })
    .then(() => {
      console.log(obj);
    });

  const [hospitals, setHospitals] = useState();

  const getAllHospitals = () => {
    axios
      .post("http://localhost:8000/api/hos",{ regionName })
      .then((response) => {
        let data = response.data;
        console.log(data);
        console.log("Dhruvi");
        console.log(data.allHospitals);
        setHospitals(data.allHospitals);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    //  handleSubmit();
    getAllHospitals();
  }, [regionName]);

  function bookedhospital(hos){
    console.log(`Button clicked with ${hos}`);
    localStorage.setItem("hospital", JSON.stringify(hos));
    var bookedHos = localStorage.getItem("hospital");
    console.log(bookedHos);
    bookedHos = JSON.parse(bookedHos);
    console.log(bookedHos);

    navigate('/book');

  }
  // const [data, setData] = useState({
  //   state: regionName,
  // });

  return (
    <div>
      <div>

       
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5">
            {(hospitals || []).map((i) => {
              return (
              <div className="col-lg-4 col-md-6">
                <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                  <h4 className="mb-3">{i.hospitalName}</h4>
                  <h5>{i.city} | {i.state}</h5>
                  <p className="m-0">
                    The test contents in the medical examination packages of CIC
                    are only as per the advice of the Canadian consulate. If
                    required additional tests have to be done as per their
                    protocol.
                  </p>
                  <button onClick={() => bookedhospital(i.hospitalName)} >
                    <i className="bi bi-arrow-right btn btn-primary"></i>
                  </button> 
                </div>
              </div>
              )})}

            </div>
          </div>
           
        </div>

      </div>

    
      {/* <table className="rwd-table">
        <tbody>
          {(hospitals || []).map((i) => {
            return (
              <div className="container-fluid">
                <div className="card">
                  <h5 className="card-header">{i.hospitalName}</h5>
                  <div className="card-body">
                    <h5 className="card-title">{i.city}</h5>
                    <h5 className="card-title">{i.state}</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.lorem Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Non natus nesciunt, aut
                      perferendis assumenda modi fugit iure, voluptates
                      molestias accusamus illo beatae, quas eveniet nulla labore
                      quidem dicta excepturi voluptatibus.
                    </p>
                    <a
                      href="http://localhost:3000/book"
                      className="btn btn-primary"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
                <br></br>
              </div>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default Hospitals;
