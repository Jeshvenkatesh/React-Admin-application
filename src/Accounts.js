import React from 'react';
import classes from './Accounts.module.css';

class Accounts extends React.Component {


    state = {

        data: JSON.parse(localStorage.getItem('getData')).accountsPage,
        currentSelectedItem: 'none'

    }
    handleDropdownChange = (e) => {

        this.setState({ currentSelectedItem: e.target.value  })

        return
    }
    getDetails(info) {
        return (
            <div className={classes.gridWrapper}>
                <div className={classes.avatarWrapper}>
                    <h3>Change Avatar</h3>
                    <div className={classes.avatarImg}  >
                        <img src={info.profilePic} />
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
                            <input type="text" placeholder={info.name}></input>
                            <p>Password</p>
                            <input type="text" placeholder={info.password} />
                            <p>Phone</p>
                            <input type="text" placeholder={info.phone} />
                        </div>
                        <div className={classes.subdivTwo}>
                            <p>Account Email</p>
                            <input type="email" placeholder={info.email} />
                            <p>Re-Enter Password</p>
                            <input type="password" placeholder={info.password} /><br />
                            <button><b>UPDATE YOUR PROFILE</b></button>
                        </div>
                    </div>
                    <div className={classes.btnWrapper}>
                        <button><b>DELETE YOUR ACCOUNT</b></button>
                    </div>
                </div>
            </div>
        )
    }
    editorDetails() {
        const info = this.state.data ? (this.state.data.Editor !== undefined ? this.state.data.Editor
            : '') : '';
        return (
            this.getDetails(info)
        )
    }
    adminDetails() {
        const info = this.state.data ? (this.state.data.Admin !== undefined ? this.state.data.Admin
            : '') : '';
        return (
            this.getDetails(info)
        )
    }
    customerDetails() {
        const info = this.state.data ? (this.state.data.Customer !== undefined ? this.state.data.Customer
            : '') : '';
        return (
            this.getDetails(info)
        )
    }
    merchantDetails() {
        const info = this.state.data ? (this.state.data.Merchant !== undefined ? this.state.data.Merchant
            : '') : '';
        return (
            this.getDetails(info)
        )
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
                { this.state.currentSelectedItem === 'Editor' ? this.editorDetails() : '' }
                { this.state.currentSelectedItem === 'Admin' ? this.adminDetails() : ''  }
                { this.state.currentSelectedItem === 'Customer' ? this.customerDetails() : '' }
                { this.state.currentSelectedItem === 'Merchant' ? this.merchantDetails() : '' }
            </div>
        )
    }
}
export default Accounts;
