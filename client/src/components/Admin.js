import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [bookings, setBookings] = useState();

  const getAllBookings = () => {
    axios
      .get("http://localhost:8000/api/confirmbook")
      .then((response) => {
        let data = response.data;
        console.log(data);
        console.log("Dhruvi");
        console.log(data.allBookings);
        setBookings(data.allBookings);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    <div>
      <h1>Admin</h1>
      <table class="rwd-table">
        <tbody>
          <tr>
            <th>Patient Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>City</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Accept</th>
          </tr>
          {(bookings || []).map((i) => {
            return (
              <tr key={i._id}>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.dateOfBirth}</td>
                <td>{i.city}</td>
                <td>{i.mobile}</td>
                <td>{i.isConfirm}</td>
                <td>
                  <button>Accept</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
