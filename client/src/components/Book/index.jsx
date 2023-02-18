import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const Book = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        dateOfBirth: "",
        city: "",
        mobile: ""
    });
    const [error, setError] = useState("");
    //const navigate = useNavigate();
    const handleChange = ({currentTarget: input})=>{
        setData({...data, [input.name]: input.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const url="http://localhost:8000/api/book";
            const {data: res} = await axios.post(url, data);
            console.log(data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        }
        catch(error){
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
    };
    return (
        <div className = {styles.signup_container}>
            <div className= {styles.signup_form_container}>
                {/* <div className = {styles.left}>
                    <h1>Welcome Back!</h1>
                    <Link to="/login">
                        <button type='button' className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div> */}
                <div className = {styles.right}>
                    <form className={styles.form_container} onSubmit = {handleSubmit}>
                        <h1>Book an appointment</h1>
                        <input type="text"
                            placeholder='Name'
                            name='name'
                            onChange={handleChange}
                            value={data.name}
                            required
                            className={styles.input}
                        />
                        <input type="date"
                            placeholder='Date of Birth'
                            name='dateOfBirth'
                            onChange={handleChange}
                            value={data.dateOfBirth}
                            required
                            className={styles.input}
                        />
                        <input type="email"
                            placeholder='Email'
                            name='email'
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input type="text"
                            placeholder='City'
                            name='city'
                            onChange={handleChange}
                            value={data.city}
                            required
                            className={styles.input}
                        />
                        <input type="string"
                            placeholder='Phone number'
                            name='mobile'
                            onChange={handleChange}
                            value={data.mobile}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Book
                        </button>
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Book;