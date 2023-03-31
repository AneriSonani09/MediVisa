import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Slots() {
    const [selectedDay, setSelectedDay] = useState(null);
    const [slots,setSlots] = useState(null);
    const [slist,setSlist] = useState(null);

    const slotTimings = ['9:00 to 12:00', '12:00 to 3:00', '3:00 to 6:00'];
    // get userinfo
    var y = localStorage.getItem("loggedUser");
    console.log(y);
    y = JSON.parse(y);
    y = y.userName;

    var bookedHos = localStorage.getItem("hospital");
    console.log(bookedHos);
    bookedHos = JSON.parse(bookedHos);
    // Display next 7 days
    const [days, setDays] = useState([]);
    useEffect(() => {
        const today = new Date();
        const days = [];
        for (let i = 1; i < 8; i++) {
            const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
            days.push({ date: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }), index: i });
        }
        setDays(days);
    }, []);

    // Get slots details for selected hospital
    const getHospital = () => {
        axios
          .post("http://localhost:8000/api/selectSlot",{ bookedHos })
          .then((response) => {
            let data = response.data;
            // console.log(data);
            console.log("Latest hospital data from slot module");
            // console.log(data.allHospitals[0].availableSlots);
            setSlots(data.allHospitals[0].availableSlots)
            console.log(slots)
            console.log(selectedDay)
            console.log(slots[selectedDay])
            setSlist(slots[selectedDay])
          })
          .catch((error) => {
            console.log(error);
          });
      };

    
    const selectDay = (idx) => {
        // console.log(idx.target.value);
        console.log("Select Day: " + idx.target.value);	
        const v = `day${idx.target.value}`;
        setSelectedDay(v)
        console.log(v)
        // getHospital();
        
    }

    useEffect(()=>{
        getHospital();
     },[selectedDay])
    const style1 = { "maxWidth": "500px" }
    const style2 = { "width": "100%", "maxWidth": "600px" }
    const style3 = { "height": "60px" }
    const style4 = { "marginTop": "0" }

    // object to add 
    const [data, setData] = useState({
        userName: y,
        name: "",
        email: "",
        dateOfBirth: "",
        city: "",
        hospitalName: bookedHos,
        mobile: "",
        date:"",
        timing:""
    });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const renderSlotOptions = () => {
        return Object.values(slist).map((slotValue, index) => (
          <option key={slotValue} value={slotValue}>
            {slotValue} ({slotTimings[index]})
          </option>
        ));
      };

      

    return (
        <div style={style4}>
            <div className="container-fluid bg-primary my-5 py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={style1}>
                        <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">{bookedHos}</h5>
                        <h1 className="display-4 mb-4">Select Your Timings</h1>
                        <h5 className="text-white fw-normal">You're booking a appointment for {bookedHos} Hospital.</h5>
                    </div>
                    <form>
                        <div className="mx-auto" style={style2}>
                            <div className="input-group">
                            <input type="text"
                                className="input-group form-control border-primary w-50"
                                placeholder="Full Name"
                                style={style3}
                                onChange={handleChange}
                                value={data.name}
                                name="name"
                                required />
                            <input type="text"
                                className="input-group form-control border-primary w-50"
                                placeholder="Email Address"
                                style={style3}
                                onChange={handleChange}
                                value={data.email}
                                name="email"
                                required />
                            </div>
                            <div className="input-group">
                            <input type="text"
                                className="input-group form-control border-primary w-50"
                                placeholder="Your City"
                                style={style3}
                                onChange={handleChange}
                                value={data.city}
                                name="city"
                                required />
                            <input type="text"
                                className="input-group form-control border-primary w-50"
                                placeholder="Mobile Number"
                                style={style3}
                                onChange={handleChange}
                                value={data.mobile}
                                name="mobile"
                                required />
                            </div>
                            <div className="input-group">
                            <label 
                                className="input-group form-control border-primary w-50"
                                for="dob">
                            Date of Birth
                            </label>
                            <input type="date"
                                className="input-group form-control border-primary w-50"
                                onChange={handleChange}
                                value={data.dateOfBirth}
                                name="dateOfBirth"
                                required />
                            </div>
                            <div className="input-group">
                                <select className="form-select border-primary w-30" style={style3} onChange={selectDay}>
                                    {/* <option selected>Appointment Date</option> */}
                                    {days.map(day => (
                                        <option key={day.index} value={day.index}>{day.date}</option>
                                    ))}
                                </select>
                                <select className="form-select border-primary w-40" style={style3}>
                                {renderSlotOptions()}
                                </select>
                                <button className="btn btn-dark border-0 w-30" style={style3}>BOOK</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Slots
