import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Pages/Home";
import Hospitals from "./components/Hospitals";
import Admin from "./components/Admin";
import Userpro from "./components/Userpro";
import Slots from "./components/Slots";
import NavBar from "./components/Pages/NavBar";
import SendMail from "./components/SendMail/SendMail";
import Upload from "./components/Upload";
import Rules from "./components/Rules/Rules";
import PageNotFound from "./components/Pagenotfound";
import Uploaded from "./components/Pages/uploaded";

function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/hospitals" exact element={<Hospitals />} />
        <Route path="/Userpro" exact element={<Userpro />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/book/:id" element={<Slots />} />
        <Route path="/rules" exact element={<Rules />} />
        <Route path="/upload" exact element={<Upload />} />
        <Route path="/uploaded" exact element={< Uploaded />} />
        {/* {!user && (<Route path="/upload" element={<Navigate replace to="/login" />} />)} */}

        <Route path="/sendmail" exact element={<SendMail />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} />
         */}
        {!user && (
          <Route path="/book" element={<Navigate replace to="/login" />} />
        )}
        {!user && (
          <Route
            path="/appointment"
            element={<Navigate replace to="/login" />}
          />
        )}
      </Routes>
    </>
  );
}

export default App;
