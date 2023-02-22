import React from 'react'

function Info(props) {
    const style1 = {"height":"55px"};
  return (
    <div>
        <div className="col-12 col-sm-6">
            <input type="text" className="form-control bg-light border-0" placeholder="Your Name" style={style1}/>
        </div>

        <div className="col-12 col-sm-6">
            <input type="date" className="form-control bg-light border-0" placeholder="Date of Birth" style={style1}/>
        </div>
    </div>
  )
}

export default Info
