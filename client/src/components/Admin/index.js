import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Userpro/userPro.css";

function Admin() {
  const [bookings, setBookings] = useState();
  const nav = useNavigate();
  const getAllBookings = () => {
    axios
      .get("http://localhost:8000/api/confirmbook")
      .then((response) => {
        let data = response.data;
        console.log(data);
        console.log("Dhruvi");
        console.log(data.myObj);
        setBookings(data.myObj);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBookings();
    // getUploadStatus();
  }, []);

  function ClickEvent(link1, link2) {
    // e.preventDefault();
    console.log("Hii")
    window.open(link1, '_blank');
    window.open(link2, '_blank');

    // window.open('http://yoururl2.com');
  }
  function getConfirmation(id) {
    console.log(`Booking accepted with ${id}`);
    axios.post("http://localhost:8000/api/confirm/", { id }).then((res) => {
      let data = res.data;
      console.log(data);
      console.log("*********");
      console.log(data.msg);
      window.location.reload();
    });
  }

  return (
    <div>
      <section id="about-section" className="pt-5 pb-5">
        <div className="container wrapabout">
          <div className="red"></div>
          <div className="row">
            <div className="blockabout">
              <div className="blockabout-inner text-center text-sm-start">
                <div className="title-big pb-3 mb-3">
                  <center>
                    <h3>Admin pannel</h3>
                  </center>
                </div>

                <table className="rwd-table">
                  <tbody>
                    <tr>
                      <th>Username</th>
                      <th>Patient Name</th>
                      <th>Email</th>
                      <th>Date of Birth</th>
                      {/* <th>City</th> */}
                      <th>Contact</th>
                      {/* <th>Hospital Name</th> */}
                      <th>Appointment date</th>
                      <th>Appointment time</th>
                      <th>Status</th>
                      <th>View Docs</th>
                      <th>Accept</th>
                    </tr>
                    {(bookings || []).map((i,index) => {
                      return (
                        <tr key={index}>
                          <td>{i._doc.userName}</td>
                          <td>{i._doc.name}</td>
                          <td>{i._doc.email}</td>
                          <td>{new Date(i._doc.dateOfBirth).toLocaleDateString()}</td>
                          {/* <td>{i._doc.city}</td> */}
                          <td>{i._doc.mobile}</td>
                          {/* <td>{i._doc.hospitalId}</td> */}
                          <td>{i._doc.date}</td>
                          <td>{i._doc.timing}</td>
                          <td>{i._doc.isConfirm}</td>
                          {/* <td><button onClick={() => ClickEvent(i.url[0].Attach, i.url[1].Attach)} target = "_blank" className="btn btn-dark border-0 w-30">Docs</button></td> */}
                          <td><button onClick={() => ClickEvent(i.url[0].Attach, i.url[1].Attach)} target = "_blank" className="btn btn-dark border-0 w-30">
                            Docs
                              </button></td>
                          <td>
                            <button className="btn btn-dark border-0 w-30" onClick={() => getConfirmation(i._doc._id)}>
                              Accept
                            </button>
                          </td>
                          {/* <td>{getUploadStatus(i.userName, i.name)}</td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
