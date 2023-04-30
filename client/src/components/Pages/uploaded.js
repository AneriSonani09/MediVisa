import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Pagenotfound/pagenotfound.css";
function Index() {
  const nav = useNavigate();
  return (
    <>
      <div class="page-content">
        <div class="container">
          <div class="tr-found section">
            <div class="row">
              <h2>You have already uploaded your docs!</h2>
            </div>
          </div>
          <button class="btn btn-dark border-0 w-30" onClick={() => nav("/")}>
            Back to home
          </button>
        </div>
      </div>
    </>
  );
}

export default Index;
