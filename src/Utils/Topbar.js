import React from 'react';
import classes from './Topbar.module.css';
import { Link } from 'react-router-dom';


class Topbar extends React.Component {

    state = {
        sidebar: false,
    }
    handleSidebarOnClick = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }
    render() {
        return (
            <section >
                <div className={classes.mainflex}>
                    <div>
                        <h2>PRODUCT ADMIN</h2>
                    </div>
                    <div className={classes.maindiv}>
                        {
                            this.props.selectedMenuItem === 0 ?
                                <Link to={'/'} className={[classes.subdiv, classes.addclass].join(' ')} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <div style={{ textDecoration: 'none' }} onClick={() => this.props.onbackgroundChange(0)}  >
                                        <i className='fas fa-tachometer-alt'></i>
                                        <h4>Dashboard</h4>
                                    </div>
                                </Link>
                                :
                                <Link to={'/'} className={classes.subdiv} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <div style={{ textDecoration: 'none' }} onClick={() => this.props.onbackgroundChange(0)} >
                                        <i className='fas fa-tachometer-alt'></i>
                                        <h4>Dashboard</h4>
                                    </div>
                                </Link>
                        }
                        {
                            this.props.selectedMenuItem === 1 ?
                                <Link to={'/Products'} className={[classes.subdiv, classes.addclass].join(' ')} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <div style={{ textDecoration: 'none' }} onClick={() => this.props.onbackgroundChange(1)} >
                                        <i className='fas fa-shopping-cart'></i>
                                        <h4>Products</h4>
                                    </div>
                                </Link>
                                :
                                <Link to={'/Products'} className={classes.subdiv} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <div style={{ textDecoration: 'none' }} onClick={() => this.props.onbackgroundChange(1)} >
                                        <i className='fas fa-shopping-cart'></i>
                                        <h4>Products</h4>
                                    </div>
                                </Link>

                        }
                        {
                            this.props.selectedMenuItem === 2 ?
                                <Link to={'/Accounts'} className={[classes.subdiv, classes.addclass].join(' ')} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <div style={{ textDecoration: 'none' }} onClick={() => this.props.onbackgroundChange(2)} >
                                        <i className='far fa-user'></i>
                                        <h4>Accounts</h4>
                                    </div>
                                </Link>
                                :
                                <Link to={'/Accounts'} className={classes.subdiv} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                    <div style={{ textDecoration: 'none' }} onClick={() => this.props.onbackgroundChange(2)}  >
                                        <i className='far fa-user'></i>
                                        <h4>Accounts</h4>
                                    </div>
                                </Link>
                        }
                    </div>
                    <div>
                        {this.props.loginStatus ? <h3 onClick={() => {
                            this.props.onUserLoggedIn();
                            this.props.onbackgroundChange(null)
                        }} >Logout</h3> : <h3>Login</h3>}
                    </div>
                </div>
                <div className={classes.sidebar}>
                    <div className={classes.sidebarMainDiv}>
                        <h4>PRODUCT ADMIN</h4>
                        <div onClick={this.handleSidebarOnClick}>
                            <i class="fa">&#xf0c9;</i>
                        </div>
                    </div>
                    {
                        this.state.sidebar ?
                            <div>
                                <div className={classes.sidebarSubDiv} >
                                    <Link to={'/'} className={classes.linkWrapper} onClick={this.handleSidebarOnClick} ><b>Dashboard</b></Link>
                                    <Link to={'/Products'} className={classes.linkWrapper} onClick={this.handleSidebarOnClick} ><b>Products</b></Link>
                                    <Link to={'/Accounts'} className={classes.linkWrapper} onClick={this.handleSidebarOnClick}  ><b>Accounts</b></Link>
                                    {
                                        this.props.loginStatus ?
                                            <Link to={'/Login'} className={classes.linkWrapper} onClick={() => {
                                                this.props.onUserLoggedIn();
                                                this.props.onbackgroundChange(0);
                                                this.handleSidebarOnClick()
                                            }} ><b>Logout</b></Link>
                                            :
                                            null
                                    }
                                </div>
                                <div className={classes.sidebarWrapper}></div>
                            </div>
                            :
                            null
                    }
                </div>
            </section>
        );

    }

}
export default Topbar;