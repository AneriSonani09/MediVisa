import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Admin() {
  const [hospitals,setHospitals]=useState();
  let data;
  const getAllHospitals = () => {
    axios.get("http://localhost:8000/api/hos")
    .then((response) => {
      data = response.data;
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
    getAllHospitals();
  }, []);


  return (
    <div>
      <h1>Admin</h1>
      {hospitals.map(i=>{
        return(
            <h2 key={i._id}>{i.hospitalName}</h2>
        )
      })}
    </div>
  )
}

export default Admin
