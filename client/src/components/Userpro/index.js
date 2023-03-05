import styles from "./styles.module.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Userpro() {
  console.log("Donnnnneee!!!!")
  var x = localStorage.getItem("loggedUser");
  console.log(x);
  x = JSON.parse(x);

  var y = localStorage.getItem("bookedData");
  console.log(y);
  y = JSON.parse(y);

  const [bookHistory, setbookHistory] = useState();

  const getHistory =  () => {
    axios.get("http://localhost:8000/api/appointmentHis")
    .then((response) => {
      let data = response.data;
      console.log(data);
      console.log("Hurrahhhh");
      console.log(data.bookHistory);
      setbookHistory(data.bookHistory);
    })
    .catch((error)=>{
      console.log(error);
    });
  };
  useEffect(()=>{
    getHistory();
  }, []);


  return (
    <>
        <div>
          <h1>User Profile</h1>
          <h2>{x.email}</h2>
          <h2>{x.userName}</h2>

          {(bookHistory || []).map(i=>{
            return(
              <td>{i.name}</td>  
                  
            )
          })}
        </div>
    </>
  );
};
export default Userpro;