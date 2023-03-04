import React from "react";
import styles from "./styles.module.css";

const Userpro = (props) => {
  console.log("Donnnnneee!!!!")
  var x = localStorage.getItem("loggedUser");
  console.log(x);
  x = JSON.parse(x);
  return (
    <>
        <div>
          {/* <h1>Hii</h1> */}
          <h1>{x.firstName}</h1>
          <h1>{x.lastName}</h1>
          <h1>{x.email}</h1>
        </div>
    </>
  );
};
export default Userpro;