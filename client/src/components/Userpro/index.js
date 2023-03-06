import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userpro() {
  console.log("Donnnnneee!!!!")
  var x = localStorage.getItem("loggedUser");
  console.log(x);
  x = JSON.parse(x);

  let uName = x.userName;

  const [bookHistory, setbookHistory] = useState();
  const getHistory = () => {
    axios.post("http://localhost:8000/api/bookHistory/", {uName})
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
  // const getHistory =  async(e) => {
  //   try {
  //     var resi = await fetch("http://localhost:8000/api/bookHistory/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         uName,
  //       }),
  //     });
  //     console.log("////");
  //     resi=resi.json(); 
  //     console.log(resi);
  //     console.log("////");
  //     // let data = res.data;
  //     // console.log(data);
  //     console.log("Hurrahhhh");
  //     console.log(resi.userBooked);
  //     setbookHistory(resi.userBooked);
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
  useEffect(()=>{
    getHistory();
  }, []);


  return (
    <>       
          <h1>User Profile</h1>
          <h2>{x.email}</h2>
          <h2>{x.userName}</h2>
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