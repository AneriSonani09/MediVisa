import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Region from './Region';
import Info from './Info';
function Keyur() {
    const [regionName,setregionName]=useState();
    const [newperson,setaddPerson]=useState({person:"",dob:""});
    const style1 = {"height":"55px"};
    const getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
            setregionName(data.region);
            this.setState({
                regionName: data.region,
            });
        }).catch((error) => {
            console.log(error);
        });
    };
    const addperson=()=>{
        
    }
    useEffect(()=>{
        getGeoInfo();
    },[])
  return (
    <div>
    <div>
      <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
            <div className="row gx-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Appointment</h5>
                        <h1 className="display-4">Make An Appointment For Your Family</h1>
                    </div>
                    <p className="text-white mb-5">Book your all appointments from the one place. We are usinf a free API for tracking user's location so it may or may not give accurate result.</p>
                    <a className="btn btn-dark rounded-pill py-3 px-5 me-3" href="">Find Doctor</a>
                    <a className="btn btn-outline-dark rounded-pill py-3 px-5" href="">Read More</a>
                </div>

                <div className="col-lg-6">
                    <div className="bg-white text-center rounded p-5">
                        <h1 className="mb-4">Book An Appointment</h1>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-12">
                                    {/* <Region data={this.state.regionName}/> */}
                                    <input type="text" className="form-control bg-light border-0" placeholder={regionName} style={style1}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" name = "person" className="form-control bg-light border-0" placeholder="Name of Patient" style={style1}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="date" name = "dob" className="form-control bg-light border-0" placeholder="Date of Birth" style={style1}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={addperson}>Add New</button>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Make An Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Keyur
