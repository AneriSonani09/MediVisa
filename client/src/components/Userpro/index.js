import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userpro() {
  console.log("Donnnnneee!!!!")
  var x = localStorage.getItem("loggedUser");
  console.log(x);
  x = JSON.parse(x);

  let uName = x.userName;

  var y = localStorage.getItem("bookedData");
  console.log(y);
  y = JSON.parse(y);

  const [bookHistory, setbookHistory] = useState();
  // const [userName, setuserName] = useState()
  const getHistory =  async(e) => {
    try {
      var resi = await fetch("http://localhost:8000/api/bookHistory/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uName,
        }),

      });
      console.log("////");
      resi=resi.json(); 
      console.log(resi);
      console.log("////");
      // let data = res.data;
      // console.log(data);
      console.log("Hurrahhhh");
      console.log(resi.userBooked);
      setbookHistory(resi.userBooked);
    }catch(error){
      console.log(error);
    }
    // axios.post("http://localhost:8000/api/bookHistory/", {
    //   userName: x.userName,
    // })
    // .then((res) => {
    //   console.log("////");
    //   console.log(res);
    //   console.log("////");
    //   let data = res.data;
    //   console.log(data);
    //   console.log("Hurrahhhh");
    //   console.log(data.userBooked);
    //   setbookHistory(data.userBooked);
    // }).catch((err)=>{
    //   console.log(err);
    // });
  }
    // axios.get("http://localhost:8000/api/bookHistory/")
    // .then((res) => {
    //   console.log("////");
    //   console.log(res);
    //   console.log("////");
    //   let data = res.data;
    //   console.log(data);
    //   console.log("Hurrahhhh");
    //   console.log(data.userBooked);
    //   setbookHistory(data.userBooked);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // });
  // };

  useEffect(()=>{
    getHistory();
  }, );


  return (
    <>       
          <h1>User Profile</h1>
          <h2>{x.email}</h2>
          <h2>{x.userName}</h2>
          <h2>{y.city}</h2>
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
          {(bookHistory || []).map(i=>{
            return(
              <tr key = {i._id}>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.dateOfBirth}</td>
              <td>{i.city}</td>
              <td>{i.mobile}</td>
              <td>{i.isConfirm}</td>
              <td><button>Accept</button></td>
            </tr>        
            )
          })}
        </tbody>
        </table>
    </>
  );
};
export default Userpro;