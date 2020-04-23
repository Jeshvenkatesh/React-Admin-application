import React from 'react';
import classes from './Topbar.module.css';
import { Link } from 'react-router-dom';


class Topbar extends React.Component {

    state = {
        sidebar: false,
    }
    Data = [
        {
            id: '1',
            icon: 'fas fa-tachometer-alt',
            heading: 'Dashboard',
            link: '/'
        },
        {
            id: '2',
            icon: 'fas fa-shopping-cart',
            heading: 'Products',
            link: '/Products'
        },
        {
            id: '3',
            icon: 'far fa-user',
            heading: 'Accounts',
            link: '/Accounts'
        }
    ]
    handleSidebarOnClick = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }
    generateDivs = this.Data.map((item, pos) => {
        const colorArr = [classes.subdiv]
        // console.log(this.props.backgroundChangePos)  // not print the pos in console
        console.log(pos)
        const linkArr = [];
        if (pos === this.props.backgroundChangePos ) {
            colorArr.push(classes.addclass)
            linkArr.push(classes.linkclass)
        }
        return (
            <Link to={item.link} className={linkArr.join(' ')} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div style={{ textDecoration: 'none' }} key={pos} className={colorArr.join(' ')} onClick={() => this.props.onbackgroundChange(pos)} >
                    <i className={item.icon}></i>
                    <h4>{item.heading}</h4>
                </div>
            </Link>
        )
    })

    render() {
        return (
            <section >
                <div className={classes.mainflex}>
                    <div>
                        <h2>PRODUCT ADMIN</h2>
                    </div>
                    <div className={classes.maindiv}>
                        {this.generateDivs}
                    </div>
                    <div>
                        {this.props.loginStatus ? <h3 onClick={() => {
                            this.props.onUserLoggedIn();
                            this.props.onbackgroundChange('null')
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