import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import "./userPro.css";

function Userpro() {
  const nav = useNavigate();

  var x = localStorage.getItem("loggedUser");
  x = JSON.parse(x);
  let uName = x.userName;

  // const y = localStorage.getItem("fName");

  const [bookHistory, setbookHistory] = useState();
  const [hosName, setHosName] = useState();

async function handleClick(name) {
    console.log("][][]][]");
    console.log(name);
    localStorage.setItem("slotUser", name);
    console.log("Hiii");
    // getUploadStatus();
    const objects = await getUploadStatus();

    if (objects && objects.isUpload.length === 0) window.location.href = "/upload";
    else window.location.href = "/uploaded";

    console.log(objects);
    console.log("Hiii2");
    //  nav("/upload")
  }

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

  const getUploadStatus = () => {
    var slotUser = localStorage.getItem("slotUser");
    var fName = uName + "." + slotUser;
    console.log(fName);
    localStorage.setItem("fName", fName);
    let y = localStorage.getItem("fName");
    return axios
      .post("http://localhost:8000/api/isUploaded/", { y })
      .then((response) => {
        let data = response.data;
        console.log("*/887");
        console.log("Here we have fetched the data");
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.log(error);
        return null;
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
                  <h3>
                    {" "}
                    <span className="text-primary text-uppercase">
                      User Details :{" "}
                    </span>{" "}
                    {x.userName}{" "}
                    <span className="text-primary text-uppercase"> |</span>{" "}
                    {x.email}{" "}
                  </h3>
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
                        <th>Appointment date</th>
                        <th>Appointment time</th>
                        <th>Status</th>
                        <th>Upload Documents</th>
                      </tr>
                      {(bookHistory || []).map((i) => {
                        return (
                          <tr key={i._id}>
                            <td>{i.name}</td>
                            <td>
                              {new Date(i.dateOfBirth).toLocaleDateString()}
                            </td>
                            <td>{i.email}</td>
                            <td>{i.mobile}</td>
                            <td>{i.date}</td>
                            <td>{i.timing}</td>
                            <td>{i.isConfirm}</td>
                            {/* <td>{<button onClick={()=>handleClick(i.name)}>Upload</button>?<NavLink to="/upload" />:<NavLink to="/" />}</td> */}
                            <td>
                              <button onClick={() => handleClick(i.name)} className="btn btn-dark border-0 w-30">
                                Upload
                              </button>
                            </td>
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
