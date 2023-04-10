import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Image } from "cloudinary-react";
import axios from "axios";

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
    for (let i = 0; i < files.length; i++) {
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
      <input
        type="file"
        multiple
        accept="application/pdf"
        onChange={handlePdfFileChange}
      />
      <button onClick={handlePdfFileUpload}>Upload PDFs</button>
      {pdfFiles.map(({ file, fileId }) => (
        <div key={fileId}>
          <Image publicId={fileId} cloudName="dukjva1sb" />
          <p>{file.name}</p>
        </div>
      ))}
    </>
  );
};

export default Upload;

// import React, { useState } from 'react';
// import { Image, Transformation } from 'cloudinary-react';

// const Upload = () => {
//   const [pdfUrls, setPdfUrls] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileSelection = (event) => {
//     const file = event.target.files[0];
//     setSelectedFile(file);
//   };

//   const handleFileUpload = () => {
//     const formData = new FormData();

//     formData.append('file', selectedFile);
//     formData.append('upload_preset', 'MediVisa_preset');
//     formData.append('folder', 'manav');
//     formData.append('tags', 'manavt');
//     formData.append('resource_type', 'auto');
//     formData.append('allowed_formats', 'pdf');

//     fetch(`https://api.cloudinary.com/v1_1/dukjva1sb/upload`, {
//       method: 'POST',
//       body: formData
//     })
//     .then(res => res.json())
//     .then(data => {
//       const pdfUrl = data.secure_url;
//       setPdfUrls([...pdfUrls, pdfUrl]);
//     })
//     .catch(err => console.log(err));

//     setSelectedFile(null);
//   };

//   return (
//     <div>
//       <input type="file" accept="application/pdf" onChange={handleFileSelection} />
//       <button onClick={handleFileUpload} disabled={!selectedFile}>
//         Upload PDF
//       </button>
//       <div>
//         {pdfUrls.map((url, index) => (
//           <div key={index}>
//             <a href={url} target="_blank" rel="noopener noreferrer">
//               <Image cloudName="dukjva1sb" publicId={url}>
//                 <Transformation width="150" crop="scale" />
//               </Image>
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Upload;

// import React, { useState } from 'react';
// import { Image } from 'cloudinary-react';

// const Upload = () => {
//   const [images, setImages] = useState([]);

//   const handleUpload = (e) => {
//     const files = e.target.files;
//     const formData = new FormData();

//     for (let i = 0; i < files.length; i++) {
//       formData.append('file', files[i]);
//       formData.append('upload_preset', 'MediVisa_preset');
//       formData.append('folder', 'pcr');
//       formData.append('tags', 'pcrTag');
//     }

//     fetch(`https://api.cloudinary.com/v1_1/dukjva1sb/image/upload`, {
//       method: 'POST',
//       body: formData
//     })
//     .then(res => res.json())
//     .then(data => {
//       setImages([...images, data.secure_url]);
//     })
//     .catch(err => console.log(err));
//   };

//   const handleButtonClick = () => {
//     document.getElementById('fileInput').click();
//   };

//   return (
//     <div>
//       <input id="fileInput" type="file" onChange={handleUpload} multiple style={{display: 'none'}} />
//       <button onClick={handleButtonClick}>Upload Images</button>
//       {images.map((image, index) => (
//         <Image key={index} cloudName="your_cloud_name" publicId={image} />
//       ))}
//     </div>
//   );
// };

// export default Upload;

// import React, { useState } from 'react';
// import { ImageUploader } from 'cloudinary-react';

// const FileUpload = () => {
//   const [imageUrl, setImageUrl] = useState('');

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'your_upload_preset');

//     fetch(`https://api.cloudinary.com/v1_1/dukjva1sb/image/upload`, {
//       method: 'POST',
//       body: formData,
//       headers: { 'X-Requested-With': 'XMLHttpRequest' },
//     })
//       .then((response) => response.json())
//       .then((data) => setImageUrl(data.secure_url))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div>
//       <ImageUploader
//         name="image"
//         buttonText="Choose image"
//         folder="your_folder_name"
//         cloudName="your_cloud_name"
//         uploadPreset="your_upload_preset"
//         onChange={handleImageUpload}
//       />
//       {imageUrl && <img src={imageUrl} alt="Uploaded image" />}
//     </div>
//   );
// };

// export default FileUpload;

// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';

// const Upload = () => {
//   const [selectedFiles, setSelectedFiles] = useState();

//   const handleFileChange = (event, index) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(prevState => {
//       const newState = [...prevState];
//       newState[index] = files[0];
//       return newState;
//     });
//   };

//   const handleFormSubmit = async event => {
//     event.preventDefault();

//     const formData = new FormData();
//     selectedFiles.forEach(file => {
//       console.log(file);
//       formData.append('file', file);
//       formData.append("upload_preset", "MediVisa_preset");
//     });

//     const response = await fetch(`https://api.cloudinary.com/v1_1/dukjva1sb/upload`, {
//       method: 'POST',
//       body: formData,
//     });

//     const result = await response.json();
//     console.log(result);
//   };

//   return (
//     <CloudinaryContext cloudName="<your_cloud_name>">
//       <Form onSubmit={handleFormSubmit}>
//         <Form.Group controlId="file1">
//           <Form.Label>Select file 1 to upload</Form.Label>
//           <Form.Control type="file" onChange={event => handleFileChange(event, 0)} />
//         </Form.Group>

//         <Form.Group controlId="file2">
//           <Form.Label>Select file 2 to upload</Form.Label>
//           <Form.Control type="file" onChange={event => handleFileChange(event, 1)} />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Upload
//         </Button>
//       </Form>

//     </CloudinaryContext>
//   );
// };

// export default Upload;

// import React, { useState } from 'react';
// import { ImageUploader } from 'cloudinary-react';

// const Upload = () => {
//   const [uploadedImages, setUploadedImages] = useState([]);

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     setUploadedImages([...uploadedImages, file]);
//   };

//   const handleUploadImages = () => {
//     const formData = new FormData();
//     uploadedImages.forEach((image) => {
//       console.log(image);
//       formData.append('file', image);
//     });

//     fetch(`https://api.cloudinary.com/v1_1/dukjva1sb/image/upload`, {
//       method: 'POST',
//       body: formData,
//       headers: { 'X-Requested-With': 'XMLHttpRequest' },
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error(error));
//   };

//   return (
//     <div>
//       <input type="file" name="image1" onChange={handleFileUpload} />
//       <input type="file" name="image2" onChange={handleFileUpload} />
//       <input type="file" name="image3" onChange={handleFileUpload} />
//       <button onClick={handleUploadImages}>Upload Images</button>
//     </div>
//   );
// };

//   export default Upload;
