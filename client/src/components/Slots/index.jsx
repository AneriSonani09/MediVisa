import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from "./styles.module.css";

function Slots() {
    const [days, setDays] = useState([]);
    useEffect(() => {
        const today = new Date();
        const days = [];
        for (let i = 0; i < 7; i++) {
          const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
          days.push({ date: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }), index: i });
        }
        setDays(days);
      }, []);

      const style1 = {"maxWidth":"500px"}
    const style2 = {"width":"100%","maxWidth":"600px"}
    const style3 = {"height":"60px"}
    const style4 = {"marginTop":"0"}

  return (
    // <div className={styles.signup_container}>
    //     <div className={styles.signup_form_container}>
    //       <div className={styles.right}>
    //         <form className={styles.form_container} >
    //             <div className="days">
    //                 {days.map(day => (
    //                 <button className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2" key={day}>{day}</button>
    //                 ))}
    //             </div>
                    
    //     </form>
    //       </div>
    //     </div>
    // </div>
    <div style={style4}>
      <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={style1}>
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Hospital Name</h5>
                <h1 className="display-4 mb-4">Select Your Slot</h1>
                <h5 className="text-white fw-normal">You're booking a appointment for XXX Hospital.</h5>
            </div>
            <div className="mx-auto" style={style2}>
            <input type="text" className="input-group form-control border-primary w-50" placeholder="Number of persons" /> <br/>
                <div className="input-group">
                    <select className="form-select border-primary w-40" style={style3}>
                        <option selected>Date</option>
                        {days.map(day => (
                            <option key={day.index}>{day.date}</option>
                        ))}
                    </select>
                    <select className="form-select border-primary w-30" style={style3}>
                        <option selected>Date</option>
                        {days.map(day => (
                            <option key={day.index}>{day.date}</option>
                        ))}
                    </select>
                    <button className="btn btn-dark border-0 w-30">Search</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Slots
