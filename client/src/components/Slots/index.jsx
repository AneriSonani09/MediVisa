import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Slots() {
    /// get userinfo
    var y = localStorage.getItem("loggedUser");
    //console.log(y);
    y = JSON.parse(y);
    y = y.userName;

    /// get hospital id from url
    const path = window.location.pathname
    const array = path.split("/")
    const id = array[2]

    // console.log("Booking for hospital ")
    // console.log(id)

    const [hospital, setHospital] = useState();
    const [days, setDays] = useState([]);
    const [selectedDate, setselectedDate] = useState();
    const [selectedTime, setselectedTime] = useState();
    const [slots, setSlots] = useState([]);

    /// object to be added
    const [data, setData] = useState({
        userName: y,
        name: "",
        email: "",
        dateOfBirth: "",
        city: "",
        hospitalId: id,
        mobile: "",
        date: "",
        timing: "",
    });

    const mail = data.email;
    const uname = data.name;
    const udate = data.date;
    const utime = data.timing

        
    // const [subject, setSubject] = useState("");
    // const [text, setText] = useState("");

    const handleSendEmail = () => {
      axios
        .post("http://localhost:8000/api/sendmail", { mail, uname, udate, utime })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
  };
  
  const disableFutureDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const maxDate = yyyy + "-" + mm + "-" + dd;
    return maxDate;
  };

    const getHospital = () => {
        axios
            .post("http://localhost:8000/api/hosById", { id })
            .then((response) => {
                let data = response.data;
                setHospital(data.hospital);
                // setHname(data.hospital.hospitalName);
                
            })
            .catch((error) => {
                console.log(error);
            });
    };
    //   console.log(hospital)

    useEffect(() => {
        const today = new Date();
        const days = [];
        for (let i = 1; i < 8; i++) {
            const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
            days.push({ date: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }), index: i });
        }
        setDays(days);
    }, []);

    useEffect(() => {
        getHospital();
    }, [])

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleDateChange = (e) => {
        const sDate = e.target.value;
        console.log(sDate)
        setselectedDate(sDate)
        setData({ ...data, date: sDate });

        // Fetch available slots for selected date and hospital
        axios.get(`http://localhost:8000/api/hospital/${id}/slots/${sDate}`)
            .then((response) => {
                const ss = response.data.timing;
                setSlots(ss);
                console.log("slots are ")
                console.log(ss);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleTimeChange = (e) => {
        const sTime = e.target.value;
        setselectedTime(sTime)
        setData({ ...data, timing: sTime });
  }
  
   

    const decSlot = () => {
        axios.patch(`http://localhost:8000/api/decSlot/${id}/slots/${selectedDate}/${selectedTime}`)
            .then((response) => {
                console.log(response.data);
                window.location.href = "/Userpro";
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data to be booked")
        console.log(data);
        axios.post("http://localhost:8000/api/book", data)
            .then((response) => {
                console.log("Booking success")
                console.log(response.data);
                decSlot();
            })
            .catch((error) => {
                console.log("Booking error")
                console.log(error);
            });
    }

    const style1 = { "maxWidth": "500px" }
    const style2 = { "width": "100%", "maxWidth": "600px" }
    const style3 = { "height": "60px" }
    const style4 = { "marginTop": "0" }

    return (
      <div style={style4}>
        {hospital && (
          <div className="container-fluid bg-primary my-5 py-5">
            <div className="container py-5">
              <div className="text-center mx-auto mb-5" style={style1}>
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                  {hospital.hospitalName}
                </h5>
                <h1 className="display-4 mb-4">Select Your Timings</h1>
                <h5 className="text-white fw-normal">
                  You're booking a appointment for {hospital.hospitalName}{" "}
                </h5>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mx-auto" style={style2}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="input-group form-control border-primary w-50"
                      placeholder="Full Name"
                      style={style3}
                      onChange={handleChange}
                      value={data.name}
                      name="name"
                      required
                    />
                    <input
                      type="text"
                      className="input-group form-control border-primary w-50"
                      placeholder="Email Address"
                      style={style3}
                      onChange={handleChange}
                      value={data.email}
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="input-group form-control border-primary w-50"
                      placeholder="Your City"
                      style={style3}
                      onChange={handleChange}
                      value={data.city}
                      name="city"
                      required
                    />
                    <input
                      type="text"
                      className="input-group form-control border-primary w-50"
                      placeholder="Mobile Number"
                      style={style3}
                      onChange={handleChange}
                      value={data.mobile}
                      name="mobile"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label
                      className="input-group form-control border-primary w-50"
                      for="dob"
                    >
                      {" "}
                      Date of Birth{" "}
                    </label>
                    <input
                      type="date"
                      className="input-group form-control border-primary w-50"
                      style={style2}
                      onChange={handleChange}
                      value={data.dateOfBirth}
                      name="dateOfBirth"
                      max={disableFutureDate()}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <select
                      className="form-select border-primary w-30"
                      style={style3}
                      onChange={handleDateChange}
                    >
                      <option disabled selected>
                        Appointment Date
                      </option>
                      {days.map((day) => (
                        <option key={day.index}>{day.date}</option>
                      ))}
                    </select>
                    <select
                      className="form-select border-primary w-40"
                      style={style3}
                      onChange={handleTimeChange}
                    >
                      <option disabled selected>
                        Appointment Time
                      </option>
                      {slots.map((s) => (
                        <option
                          key={s._id}
                          value={s.time}
                          disabled={s.slots === 0}
                        >
                          {s.time} - {s.slots} Slots
                        </option>
                      ))}
                    </select>
                    <button
                      className="btn btn-dark border-0 w-30"
                      style={style3}
                      onClick={handleSendEmail}
                    >
                      BOOK
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
}

export default Slots
