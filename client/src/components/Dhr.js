import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Book() {
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


    // 
    const [data, setData] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        city: "",
        mobile: ""
    });
    const [error, setError] = useState("");


    const handleChange = ({currentTarget: input})=>{
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url="http://localhost:8000/api/book";
            const {data: res} = await axios.post(url, data);
            console.log(data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        }
        catch(error){
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
    }

  return (
    <div>
      <div className="col-lg-6">
                    <div className="bg-white text-center rounded p-5">
                        <h1 className="mb-4">Book An Appointment</h1>
                        <form onSubmit = {handleSubmit}>
                            <div className="row g-3">
                                <div className="col-12 col-sm-12">
                                    {/* <Region data={this.state.regionName}/> */}
                                    <input type="text" className="form-control bg-light border-0" placeholder={regionName} style={style1}/>
                                </div>
                                <div className="col-12 col-sm-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Email " style={style1}/>
                                </div>
                                <div className="col-12 col-sm-12">
                                    <input type="text" className="form-control bg-light border-0" placeholder="Contact Number" style={style1}/>
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
  )
}

export default Book
