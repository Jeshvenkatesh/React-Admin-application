import React from 'react';
import Axios from 'axios';
import Topbar from './Utils/Topbar';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Products from './Products/Products';
import Accounts from './Accounts/Accounts';
import Footer from './Footer/Footer';
import Loginpage from './Login/LoginPage';
import Newproduct from './Accounts/Newproduct';
import dataAPI from "./Utils/API";

class App extends React.Component {
  state = {
    data: [],
    userLoggedIn: false,
    selectedMenuItem: null,
  }
  onbackgroundChange=(pos)=>{
      this.setState({selectedMenuItem:pos})
  }
  onUserLoggedIn = () => {
        this.setState({userLoggedIn : !this.state.userLoggedIn})
  }
  componentDidMount() {
    Axios.get(dataAPI)
      .then((response) => {
        const data = JSON.stringify(response.data)
        localStorage.setItem("getData", data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <BrowserRouter>
        <section>
          <Topbar  loginStatus={this.state.userLoggedIn} onUserLoggedIn={this.onUserLoggedIn} selectedMenuItem={this.state.selectedMenuItem} onbackgroundChange={this.onbackgroundChange} />
          <Switch>
            <Route path={'/Products'} render={()=> this.state.userLoggedIn === true ? <Products/> : <Redirect to="/Login"/> } />
            <Route path={'/Accounts'} render={() => this.state.userLoggedIn === false ?  <Redirect to ='/Login'/> : <Accounts/>  } />
            <Route path={'/Newproduct'} component={Newproduct} />
            <Route path={'/Login'} render={()=> !this.state.userLoggedIn ? 
            <Loginpage onUserLoggedIn={this.onUserLoggedIn} loginStatus={this.state.userLoggedIn} onbackgroundChange={this.onbackgroundChange}  /> : <Redirect to ="/"/>} />
            <Route exact path={'/'} render={() => this.state.userLoggedIn ? <Dashboard/> : <Redirect to='/Login'/> } />
          </Switch>
          <Footer />
        </section>
      </BrowserRouter>
    );
  }
}
export default App;
