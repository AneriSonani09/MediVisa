import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Book from "./components/Book";
import Home from "./components/Home";
import Hospitals from "./components/Hospitals";
import Admin from "./components/Admin";
import Userpro from "./components/Userpro"



function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{/* {user && <Route path="/" exact element={<Home />} />} */}
			<Route path="/" exact element={<Home />} />
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/book" exact element={<Book />} />
			<Route path="/hospitals" exact element={<Hospitals />}/>
			<Route path="/Userpro" exact element={<Userpro />} />
			<Route path="/admin" exact element={<Admin />}/>
			{/* <Route path="/" element={<Navigate replace to="/login" />} />
			 */}
			 {!user && <Route path="/book" element={<Navigate replace to="/login" />} />}
			 {!user && <Route path="/appointment" element={<Navigate replace to="/login" />} />}
		</Routes>
	);
}

export default App;