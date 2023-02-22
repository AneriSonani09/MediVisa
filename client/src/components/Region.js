import React from 'react'
import { useState, useEffect } from "react";

function Region(props) {
    const style1 = {"height":"55px"};
    const region = props.data;
    const [selected, setSelected] = useState(region);
    
    useEffect(() => {
      setSelected(props);
    }, [...props])

    const gujarat = [ "Ahmedabad" , "Gandhinagar" ], maha = ["Mumbai", "Pune"];
    let type = null, options = null;
    if (selected === "Gujarat") {
        type = gujarat;
    } else if(selected = "Maharashtra"){
      type = maha;
    }
    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }
  return (
    <div>
       {/* <h1>{selected} </h1> */}
        {/* <input type="text" className="form-control bg-light border-0" placeholder={selected} style={style1}/> */}
      <select className="form-select bg-light border-0" style={style1}>
        {options}
      </select>
    </div>
  )
}

export default Region
