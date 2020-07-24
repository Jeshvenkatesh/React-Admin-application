import React from 'react';
import Axios from 'axios';
import classes from './login.module.css';
import loginPostApi from "../Utils/API";

class Loginpage extends React.Component {

    state={
        validEmail:true,
        validPwd:true,
    }

    handleEmailField = (e) => {
        var fieldEmail = e.target.value;
        var validEmailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        var email = fieldEmail.match(validEmailPattern);
        if (email === null) {
            this.setState({ validEmail: false })
        } else {
            this.setState({ validEmail: true })
        }
    }
    handlePwdField = (e) => {
        var fieldPwd = e.target.value;
        var validPwdPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        var pwd = fieldPwd.match(validPwdPattern);
        if (pwd === null) {
            this.setState({ validPwd: false })
        } else {
            this.setState({ validPwd: true })
        }
    }

    onSubmitClick = (e) => {
        e.preventDefault();
           this.props.onUserLoggedIn()
        const data = {
            username: e.target.email.value,
            password: e.target.password.value
        }
        Axios.post(loginPostApi,data)
        .then((response)=>{
            this.onbackgroundChange(0);
        })
        .catch((err)=>{
        })
    }

   render() {
       return(
           <div>
                <form onSubmit={this.onSubmitClick}>
                    <div className={classes.loginwrapper}>
                        <h3>Welcome to Dashboard Login</h3>
                        <p>Email</p>
                        <input type="text" required name="email" onInput={this.handleEmailField} />
                        {
                            this.state.validEmail === true  ? null :
                            <p style={{color:'red', textAlign:'center'}}>Please enter valid email</p>
                        }
                        <p>Password</p>
                        <input type="password" required name="password" onInput={this.handlePwdField} />
                        {
                            this.state.validPwd === true ? null :
                            <p style={{color:'red', textAlign:'center',marginBottom:'0px'}}>Minimum eight characters, at least one letter, one number and one special character</p>
                        }
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>

       )
   }
  
}

export default Loginpage;