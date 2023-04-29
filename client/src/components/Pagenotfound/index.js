import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import img404 from "./404.png";
import "./pagenotfound.css"
function Index() {
  const nav=useNavigate()
  return (
    <>
    <div class="page-content">
      <div class="container">
        <div class="tr-found section">
          <div class="row">
            <div class="col-md-4">
              <div class="found-image">
                <img
                  src={img404}
                  alt="Image"
                  class="img-fluid"
                />
              </div>
            </div>
            <div class="col-md-8">
              <div class="found-info">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>We can't seem to find the page you're looking for.</p>
               {/* <button class="btn btn-dark border-0 w-30" onClick={()=> nav("/")}>
                  Back to home
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Index;