import React from 'react';
import classes from './Accounts.module.css';

class Accounts extends React.Component {

    state = {
        data: JSON.parse(localStorage.getItem('getData')).accountsPage,
        accName: '',
        accEmail:'',
        accPwd:'',
        accPhone:'',
        profPic:'',
        accRePwd:"",
        showAccount:"",
    }
    handleDropdownChange = (e) => {
        const user = e.target.value;
        this.setState({showAccount:user})
        if(user==="Admin"){
            this.setState({
                accName:this.state.data.Admin.name,
                accEmail:this.state.data.Admin.email,
                accPwd:this.state.data.Admin.password,
                accRePwd:this.state.data.Admin.password,
                accPhone:this.state.data.Admin.phone,
                profPic:this.state.data.Admin.profilePic,
            })
        }else if(user==="Customer"){
            this.setState({
                accName:this.state.data.Customer.name,
                accEmail:this.state.data.Customer.email,
                accPwd:this.state.data.Customer.password,
                accRePwd:this.state.data.Admin.password,
                accPhone:this.state.data.Customer.phone,
                profPic:this.state.data.Customer.profilePic,
            }) 
        }else if(user==="Editor"){
            this.setState({
                accName:this.state.data.Editor.name,
                accEmail:this.state.data.Editor.email,
                accPwd:this.state.data.Editor.password,
                accRePwd:this.state.data.Admin.password,
                accPhone:this.state.data.Editor.phone,
                profPic:this.state.data.Editor.profilePic,
            })
        }else if(user ==="Merchant"){
            this.setState({
                accName:this.state.data.Merchant.name,
                accEmail:this.state.data.Merchant.email,
                accPwd:this.state.data.Merchant.password,
                accRePwd:this.state.data.Admin.password,
                accPhone:this.state.data.Merchant.phone,
                profPic:this.state.data.Merchant.profilePic,
            })
        }
    }
    handelAccName=(e)=>{
           this.setState({accName:e.target.value})
    }
    handelAccEmail=(e)=>{
        this.setState({accEmail:e.target.value})
    }
    handelAccPwd=(e)=>{
        this.setState({accPwd:e.target.value})
    }
    handelAccPh=(e)=>{
        this.setState({accPhone:e.target.value})
    }
    handelAccRePwd=(e)=>{
        this.setState({accRePwd:e.target.value})
    }
    render() {
        return (
            <div>
                <div className={classes.listDiv}>
                    <h3>List Of Accounts</h3>
                    <p>Accounts</p>
                    <select className={classes.customselect} onChange={this.handleDropdownChange}>
                        <option value=''>Select account</option>
                        <option value='Admin'>Admin</option>
                        <option value='Editor'>Editor</option>
                        <option value='Merchant'>Merchant</option>
                        <option value='Customer'>Customer</option>
                    </select>
                </div>
                {
                    this.state.showAccount === '' ? null:
                    <div className={classes.gridWrapper}>
                    <div className={classes.avatarWrapper}>
                        <h3>Change Avatar</h3>
                        <div className={classes.avatarImg}  >
                            <img src={this.state.profPic}/>
                            <div className={classes.deleteIcon}>
                                <i class="far fa-trash-alt tm-product-delete-icon"></i>
                            </div>
                        </div>
                        <button><b>UPLOAD NEW PHOTO</b></button>
                    </div>

                    <div className={classes.accountSettings}>
                        <h3>Account Settings</h3>
                        <div className={classes.subflex}>
                            <div className={classes.subdivOne}>
                                <p>Account Name</p>
                                <input type="text" value={this.state.accName} onInput={this.handelAccName} ></input>
                                <p>Password</p>
                                <input type="text" value={this.state.accPwd} onInput={this.handelAccPwd}/>
                                <p>Phone</p>
                                <input type="text" value={this.state.accPhone} onInput={this.handelAccPh} />
                            </div>
                            <div className={classes.subdivTwo}>
                                <p>Account Email</p>
                                <input type="email" value={this.state.accEmail} onInput={this.handelAccEmail}/>
                                <p>Re-Enter Password</p>
                                <input type="password" value={this.state.accRePwd} onInput={this.handelAccRePwd} /><br />
                                <button><b>UPDATE YOUR PROFILE</b></button>
                            </div>
                        </div>
                        <div className={classes.btnWrapper}>
                            <button><b>DELETE YOUR ACCOUNT</b></button>
                        </div>
                    </div>
                </div>

                }
                
            </div>
        )
    }
}


export default Accounts;