// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import axios from 'axios';
// function Form() {

// }

// export default Form;
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

export default function Form() {
  //   const AssignmentId = props.AssignmentId;

  const [file, fileChange] = useState();

  const navigate = useNavigate();
  var x = localStorage.getItem("loggedUser");
  console.log(x);
  x = JSON.parse(x);

  let uName = x.userName;
  console.log(uName);

  // form controller
  const formik = useFormik({
    // intial values
    initialValues: {
      User: uName,
      Attach: "",
    },
    onSubmit: async (values) => {
      //Request Body To Pass Api
      const formData = new FormData();
      console.log(file);
      formData.append("file", file);
      formData.append("upload_preset", "MediVisa_preset");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dukjva1sb/image/upload`,
        {
          method: "post",
          body: formData,
        }
      );

      let urlData = await response.json();
      urlData = urlData?.url;
      console.log("////");
      console.log(urlData);

      const date1 = new Date();
      console.log(date1);
      const isoDate = date1.toISOString();
      console.log(isoDate);

      const RequestBody = {
        User: uName,
        Attach: urlData,
      };
      console.log("RequestBody");
      console.log(RequestBody);
      try {
        // call to backend url
        const url = "http://localhost:8000/api/formUp";
        // console.log(file);
        const response = await axios.post(url, RequestBody);

        //  status of respose
        if (response.status === 200) {
          //   toast.success("Assigment Upload Successfully");
          console.log(response.data);
          // navigate('/');
        }
      } catch (err) {
        // toast.error(err.message);
        console.log(err.message);
      }
    },
  });

  return (
    <>
      <Box
        md={{ Width: "100%" }}
        sx={{ alignItems: "center", display: "flex" }}
      >
        <Container>
          {/* <form onSubmit={formik.handleSubmit} action="/uploadphoto" enctype="multipart/form-data" method="POST" > */}
          <form onSubmit={formik.handleSubmit}>
            {/* <Box sx={{ my: 3 }}>
                        <Typography color="textPrimary" variant="h4" > Assigment </Typography>
                    </Box> */}

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  value={formik.values.image}
                  onBlur={formik.handleBlur}
                  onChange={(e) => {
                    formik.handleChange(e);
                    fileChange(e.target.files[0]);
                  }}
                multiple />
              </Grid>
            </Grid>

            <Box sx={{ py: 2 }}>
              {/* Submit btn */}
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                size="large"
                sx={{ marginRight: "5px" }}
                type="submit"
                variant="contained"
              >
                Post
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
          
    </>
  );
}
