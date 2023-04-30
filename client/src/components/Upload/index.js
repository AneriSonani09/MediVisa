import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Image } from "cloudinary-react";
import axios from "axios";
import "./upload.css";
import { useNavigate } from "react-router-dom";
import upload from "./upload.png";


const Upload = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  var x = localStorage.getItem("loggedUser");
  console.log(x);
  x = JSON.parse(x);

  let uName = x.userName;
  console.log(uName);

  var slotUser = localStorage.getItem("slotUser");
  
  const navigate = useNavigate();
  const handlePdfFileChange = (event) => {
    const newPdfFiles = [];
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileId = uuidv4();
      newPdfFiles.push({ file, fileId });
    }
    setPdfFiles([...pdfFiles, ...newPdfFiles]);
  };

  const handlePdfFileUpload = () => {
 
    var fName = uName + "." + slotUser;
    console.log(fName);
    localStorage.setItem("fName", fName);
    pdfFiles.forEach(({ file, fileId }) => {
      const formData = new FormData();
      console.log(file);
      formData.append("file", file);
      formData.append("upload_preset", "MediVisa_preset");
      formData.append("folder", fName);

      const res = fetch("https://api.cloudinary.com/v1_1/dukjva1sb/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("////");
          console.log(data);
          const url = data;
          console.log(url);
          const pdfUrl = data.url;
          console.log(`PDF ${fileId} URL:`, pdfUrl);
          console.log("/***/");

          const RequestBody = {
            User: fName,
            Attach: pdfUrl,
          };
          
          console.log(RequestBody);
          try {
            const url = "http://localhost:8000/api/uploadDoc";
            const response = axios.post(url, RequestBody);
            if (response.status === 200) {
              console.log(response.data);
            }
          } catch (err) {
            console.log(err.message);
          }
        })
        .catch((error) => console.error(error));

        window.location.href = "http://localhost:3000/";
    });


  };

  return (
    <>
      <div className="upload-container">
        <div className="card">
          <div className="header"></div>
          <div className="container">
            <img className="imageHere" style={{marginTop:"-80px"}} src={upload} alt="Upload Profile"/>
            <br />
            <input
              type="file"
              multiple
              accept="application/pdf"
              className="btn btn-dark border-0 w-30"
              onChange={handlePdfFileChange}
              style={{marginTop:"-20px"}}
            />
            <p></p>
            {/* <button onClick={handlePdfFileUpload}>Upload PDFs</button> */}
            {pdfFiles.map(({ file, fileId }) => (
              <div key={fileId}>
                {/* <Image publicId={fileId} cloudName="dukjva1sb" /> */}
                <p>{file.name}</p>
              </div>
            ))}
            <button
              className="btn btn-dark border-0 w-30"
              onClick={handlePdfFileUpload} 
            >
              Upload PDFs
            </button>
          </div>
        </div>

        <br></br>

        {/* <button className="btn btn-dark border-0 w-30" onClick={getSlotUser} >click me</button> */}
      </div>
    </>
  );
};

export default Upload;

