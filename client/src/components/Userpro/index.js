import React, { useEffect, useState } from "react";
import axios from "axios";
import './userPro.css'

function Userpro() {
  // console.log("Donnnnneee!!!!");

  var x = localStorage.getItem("loggedUser");
  //console.log(x);
  x = JSON.parse(x);
  let uName = x.userName;

  const [bookHistory, setbookHistory] = useState();
  const [hosName, setHosName] = useState();

  const getHospitalName = (hospitalId) => {
    axios
      .post("http://localhost:8000/api/hosById", { hospitalId })
      .then((response) => {
        let data = response.data;
        setHosName(data.hospital);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getHistory = () => {
    axios
      .post("http://localhost:8000/api/bookHistory/", { uName })
      .then((res) => {
        let data = res.data;
        setbookHistory(data.userBooked);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <br></br>
      {/* ----------------------- */}
      <section id="about-section" className="pt-5 pb-5">
        <div className="container wrapabout">
          <div className="red"></div>
          <div className="row">
            <div className="col-lg-9 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
              <div className="blockabout">
                <figure className="potoaboutwrap">
                  <h3> <span className="text-primary text-uppercase">User Details : </span> {x.userName} <span className="text-primary text-uppercase"> |</span> {x.email} </h3>
                </figure>
                <div className="blockabout-inner text-center text-sm-start">
                  <div className="title-big pb-3 mb-3">
                    <h3>Booking History</h3>
                  </div>
                  <table className="rwd-table">
                    <tbody>
                      <tr>
                        <th>Patient Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Hospital Name</th>
                        <th>Appointment date</th>
                        <th>Appointment time</th>
                        <th>Status</th>
                        <th>Upload Documents</th>
                      </tr>
                      {(bookHistory || []).map((i) => {
                        return (
                          <tr key={i._id}>
                            <td>{i.name}</td>
                            <td>{new Date(i.dateOfBirth).toLocaleDateString()}</td>
                            <td>{i.email}</td>
                            <td>{i.mobile}</td>
                            <td>{i.hospitalId}</td>
                            <td>{i.date}</td>
                            <td>{i.timing}</td>
                            <td>{i.isConfirm}</td>
                            <td><button>Upload</button></td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 mt-5 mt-lg-0">
              <figure className="potoaboutwrap">
                <h2>User Details</h2>
                <h3>{x.email}</h3>
                <h3>{x.userName}</h3>
              </figure>
            </div> */}
          </div>
        </div>
      </section>


    </>
  );
}
export default Userpro;