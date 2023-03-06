import React, { useEffect, useState } from "react";
import axios from "axios";

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

function Hospitals() {
  const [regionName, setregionName] = useState();

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
      .get("http://localhost:8000/api/hos")
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
  }, []);

  const [data, setData] = useState({
    state: regionName,
  });

  return (
    <div>
      <div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="pt-2">
                  <button
                    href=""
                    className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2"
                  >
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

      

      <table class="rwd-table">
        <tbody>
          {(hospitals || []).map((i) => {
            return (
              <div className="container-fluid">
                <div class="card">
                  <h5 class="card-header">{i.hospitalName}</h5>
                  <div class="card-body">
                    <h5 class="card-title">{i.city}</h5>
                    <h5 class="card-title">{i.state}</h5>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.lorem Lorem ipsum, dolor sit amet
                      consectetur adipisicing elit. Non natus nesciunt, aut
                      perferendis assumenda modi fugit iure, voluptates
                      molestias accusamus illo beatae, quas eveniet nulla labore
                      quidem dicta excepturi voluptatibus.
                    </p>
                    <a
                      href="http://localhost:3000/book"
                      class="btn btn-primary"
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
      </table>
    </div>
  );
}

export default Hospitals;
