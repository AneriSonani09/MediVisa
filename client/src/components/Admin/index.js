import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Userpro/userPro.css";

function Admin() {
  const [bookings, setBookings] = useState();
  const nav = useNavigate();
  // const getUploadStatus = (userName, name) => {
  //   let y = userName + "." + name;
  //   axios
  //     .post("http://localhost:8000/api/isUploaded/", { y })
  //     .then((response) => {
  //       let data = response.data;
  //       console.log("*/887");
  //       console.log("Here we have fetched the data");
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
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
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-eye"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                              </svg> */}Docs
                              </button></td>
                          {/* <td><a href={i.url[1].Attach} target = "_blank">clcik</a></td> */}
                          {/* <td>{i.url[1].Attach1===[] ? "null" : i.url[1].Attach1}</td> */}
                          {/* <td>{i.url[2].Attach}</td> */}
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
