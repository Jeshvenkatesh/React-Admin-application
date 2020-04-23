import React from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import classes from './login.module.css';



const Loginpage = (props) => {
    const onSubmitClick = (e) => {
        e.preventDefault();
            props.onUserLoggedIn()
            props.onbackgroundChange(0)
            // alert('2');
        const data = {
            username: e.target.username.value,
            password: e.target.password.value
        }
        console.log(data);
        Axios.post("https://5e0a2be192b6410014c29fb3.mockapi.io/userdata",data)
        .then((response)=>{
            // props.onUserLoggedIn()
            // props.onbackgroundChange(0)
            // alert('Login Successful')
        })
        .catch((err)=>{
            console.log(err)
            alert('Login Failed')
        })
    }
    return (
        <div>
            <form onSubmit={onSubmitClick}>
                <div className={classes.loginwrapper}>
                    <h3>Welcome to Dashboard Login</h3>
                    <p>UserName</p>
                    <input type="text" required name="username" />
                    <p>Password</p>
                    <input type="password" required name="password" />
                    <br />
                    <br />
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Loginpage;