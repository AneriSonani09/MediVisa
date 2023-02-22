import React from 'react'

function Search() {
    const style1 = {"maxWidth":"500px"}
    const style2 = {"width":"100%","maxWidth":"600px"}
    const style3 = {"height":"60px"}
    const style4 = {"marginTop":"0"}

  return (
    <div style={style4}>
      <div className="container-fluid bg-primary my-5 py-5">
        <div className="container py-5">
            <div className="text-center mx-auto mb-5" style={style1}>
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Find A Doctor</h5>
                <h1 className="display-4 mb-4">Find A Healthcare Professionals</h1>
                <h5 className="text-white fw-normal">Duo ipsum erat stet dolor sea ut nonumy tempor. Tempor duo lorem eos sit sed ipsum takimata ipsum sit est. Ipsum ea voluptua ipsum sit justo</h5>
            </div>
            <div className="mx-auto" style={style2}>
                <div className="input-group">
                    <select className="form-select border-primary w-25" style={style3}>
                        <option selected>Department</option>
                        <option value="1">Department 1</option>
                        <option value="2">Department 2</option>
                        <option value="3">Department 3</option>
                    </select>
                    <input type="text" className="form-control border-primary w-50" placeholder="Keyword" />
                    <button className="btn btn-dark border-0 w-25">Search</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Search
