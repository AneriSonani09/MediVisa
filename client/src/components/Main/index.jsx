import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Book from "../Book";
const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>fakebook</h1>
        <NavLink
          exact
		  to="routes/book"
		  onClick={click ? handleClick : null}
        >
          Form
        </NavLink>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};
export default Main;