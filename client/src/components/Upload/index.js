import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Image } from "cloudinary-react";
import axios from "axios";
import "./upload.css";

const Upload = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  var x = localStorage.getItem("loggedUser");
  console.log(x);
  x = JSON.parse(x);

  let uName = x.userName;
  console.log(uName);

  const handlePdfFileChange = (event) => {
    const newPdfFiles = [];
    const files = event.target.files;
    for (let i = 0; i < 3; i++) {
      const file = files[i];
      const fileId = uuidv4();
      newPdfFiles.push({ file, fileId });
    }
    setPdfFiles([...pdfFiles, ...newPdfFiles]);
  };

  const handlePdfFileUpload = () => {
    pdfFiles.forEach(({ file, fileId }) => {
      const formData = new FormData();
      console.log(file);
      formData.append("file", file);
      formData.append("upload_preset", "MediVisa_preset");
      formData.append("folder", uName);

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
            User: uName,
            Attach: pdfUrl,
          };
          console.log(RequestBody);
          try {
            const url = "http://localhost:8000/api/formUp";
            const response = axios.post(url, RequestBody);
            if (response.status === 200) {
              console.log(response.data);
              // navigate('/');
            }
          } catch (err) {
            // toast.error(err.message);
            console.log(err.message);
          }
        })
        .catch((error) => console.error(error));
    });
  };

  return (
    <>
      <div className="upload-container">
        <h1>Hii</h1>
        <input
          type="file"
          multiple
          accept="application/pdf"
          className="btn btn-dark border-0 w-30"
          onChange={handlePdfFileChange}
        /><br></br>
        <button className="btn btn-dark border-0 w-30"onClick={handlePdfFileUpload} >Upload PDFs</button>
        {/* <button onClick={handlePdfFileUpload}>Upload PDFs</button> */}
        {pdfFiles.map(({ file, fileId }) => (
          <div key={fileId}>
            <Image publicId={fileId} cloudName="dukjva1sb" />
            <p>{file.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Upload;

