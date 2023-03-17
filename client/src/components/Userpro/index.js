import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../NavBar";
import './userPro.css'


function Userpro() {
  console.log("Donnnnneee!!!!");

  var x = localStorage.getItem("loggedUser");
  console.log(x);
  x = JSON.parse(x);

  let uName = x.userName;

  const [bookHistory, setbookHistory] = useState();
  const getHistory = () => {
    axios
      .post("http://localhost:8000/api/bookHistory/", { uName })
      .then((res) => {
        let data = res.data;
        console.log(data);
        console.log("Dhruvi");
        console.log("/////////");
        console.log(data.userBooked);
        console.log("/////////");
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
                <div className="blockabout-inner text-center text-sm-start">
                  <div className="title-big pb-3 mb-3">
                    <h3>Booking History</h3>
                  </div>
                  {/* <h1>User Profile</h1>
                  <h2>{x.email}</h2>
                  <h2>{x.userName}</h2> */}

                  <table className="rwd-table">
                    <tbody>
                      <tr>
                        <th>Patient Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>City</th>
                        <th>Hospital Name</th>
                        <th>Contact</th>
                        <th>Status</th>
                      </tr>
                      {(bookHistory || []).map((i) => {
                        return (
                          <tr key={i._id}>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.dateOfBirth}</td>
                            <td>{i.city}</td>
                            <td>{i.hospitalName}</td>
                            <td>{i.mobile}</td>
                            <td>{i.isConfirm}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5 mt-lg-0">
              <figure className="potoaboutwrap">
                {/* <img
                  src="https://bootdey.com/image/400x700/FF7F50/000000"
                  alt="potoabout"
                /> */}
                <h2>User Details</h2>
                <h3>{x.email}</h3>
                <h3>{x.userName}</h3>
              </figure>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
export default Userpro;