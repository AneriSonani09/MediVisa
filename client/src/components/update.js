import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./style.css";
// import {NavLink} from 'react-router-dom'
export default function Customer() {
  const [data, setData] = useState({
    username: "",
    fname: "",
    lname: "",
    email: "",
    PhoneNumber: "",
    address: "",
  });
  const [error, seterror] = useState({
    username: "",
    email: "",
    PhoneNumber: "",
  });
  const [mainerror, setmainerror] = useState();

  const handlechange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
 
  const handleupdate = async (e) => {
    console.log("print yes 1");
    e.preventDefault();
    const { username, fname, lname, address,  email, PhoneNumber} =data;
    var user=localStorage.getItem("user");
    user=JSON.parse(user);
    const id=user.user_id;

    const upRes = () => {
        axios
        .post("http://localhost:8000/api/confirm/",{id})
        .then((upRes) => {
            let data = upRes.data;
            console.log(data);
            console.log("*********");
            console.log(data.booking);

        })
    }

    const res = await fetch("/customerupdate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        username,
        fname,
        lname,
        email,
        PhoneNumber,
        address
      }),
    });
    console.log(res);
    const y = await res.json();
    console.log(y);
    localStorage.setItem("user", JSON.stringify(y));
    setData({["username"]:y.username,["fname"]:y.fname,["lname"]:y.lname,["email"]:y.email,["PhoneNumber"]:y.PhoneNumber,["address"]:y.address})
    /*
    if (y.message === "PhoneNumber") {
      setmainerror(
        "user with " + PhoneNumber + " PhoneNumber is already exits"
      );
      setData({ ...data, [y.message]: "" });
    } else if (y.message === "email") {
      setmainerror("user with " + email + " Email is already exits");
    } else if (y.message === "username") {
      setmainerror("user with " + username + " Username is already exits");
    } else {
      localStorage.setItem("loginuser", JSON.stringify(y));
      setData(y);
      // console.log(data);
      window.location.href = "/";
    }
    */
  };
useEffect(()=>{
  var user=localStorage.getItem("user");
  user=JSON.parse(user);
  setData({ ['username']: user.username,['fname']:user.fname,['lname']:user.lname,['email']:user.email,['PhoneNumber']:user.PhoneNumber,['address']:user.address });
},[])

  
  return (
    <div class="main">
      <section class="signup">
        <div>Customer Update</div>
        <div
          class="container"
          style={{ marginBottom: "35px", marginTop: "35px", width: "660px" }}
        >
          <div class="signup-content">
            <form
              method="POST"
              id="signup-form"
              class="signup-form"
              onSubmit={handleupdate}
            >
              <h2 class="form-title">Update account</h2>
              <div class="form-group">
                <input
                  type="text"
                  onChange={handlechange}
                  value={data.username}
                  class="form-input"
                  name="username"
                  id="name"
                  placeholder="Your User Name"
                  required
                />
                <div style={{ color: "red" }}>{error.username}</div>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  onChange={handlechange}
                  value={data.fname}
                  class="form-input"
                  name="fname"
                  id="fname"
                  placeholder="Your First Name"
                  required
                />
                {/* <div style={{color:'red'}}>{error.username}</div> */}
              </div>
              <div class="form-group">
                <input
                  type="text"
                  onChange={handlechange}
                  value={data.lname}
                  class="form-input"
                  name="lname"
                  id="lname"
                  placeholder="Your Last Name"
                  required
                />
                {/* <div style={{color:'red'}}>{error.username}</div> */}
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-input"
                  onChange={handlechange}
                  value={data.PhoneNumber}
                  name="PhoneNumber"
                  id="PhoneNumber"
                  placeholder="Your Phone Number"
                  max="9999999999"
                  required
                />
                <div style={{ color: "red" }}>{error.PhoneNumber}</div>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-input"
                  onChange={handlechange}
                  value={data.email}
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
                <div style={{ color: "red" }}>{error.email}</div>
              </div>
              
              <div class="form-group">
                <input
                  type="text"
                  class="form-input"
                  onChange={handlechange}
                  value={data.address}
                  name="address"
                  id="address"
                  placeholder="Your address"
                  required
                />
                {/* <div style={{color:'red'}}>{error.}</div> */}
              </div>
              
              <div class="form-group">
                <input
                  style={{
                    backgroundImage:
                      "linear-gradient(to left, rgb(207 212 235), rgb(101 44 145))",
                  }}
                  type="submit"
                  name="submit"
                  id="submit"
                  class="form-submit"
                  value="Sign up"
                />
                <div style={{ color: "red" }}>{mainerror}</div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}