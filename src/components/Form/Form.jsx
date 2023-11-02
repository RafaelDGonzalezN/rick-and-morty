import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";

const Form = (props) =>{
    const {login} = props;

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) =>{
        setErrors(validation({...userData, [e.target.name]: e.target.value}))
        setUserData({...userData, [e.target.name]: e.target.value})
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    return(
        <div className={styles.fondo}>
        <div className={styles.container} onSubmit={handleSubmit}>
            <form >
                <label>Email
                    <input 
                        name="email"
                        type="text"
                        placeholder="Email..."
                        value={userData.email}
                        onChange={handleChange}
                        />
                        {errors.email && <span>{errors.email}</span>}
                </label>
                <label>Password
                    <input 
                        name="password"
                        type="password" 
                        placeholder="Password..."
                        value={userData.password}
                        onChange={handleChange}
                        />
                        {errors.password && <span>{errors.password}</span>}
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}
export default Form;
