import React from 'react';
import Axios from 'axios';
import Topbar from './Topbar';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Products from './Products';
import Accounts from './Accounts';
import Footer from './Footer';
import Loginpage from './LoginPage';
import Newproduct from './Newproduct';

class App extends React.Component {
  state = {
    backgroundChangePos: 'null',
    data: [],
    userLoggedIn: false
  }
  onbackgroundChange = (pos) => {
    return (
        // this.state.userLoggedIn === false ? null : 
        this.setState({backgroundChangePos: pos})
    )
  }
  onUserLoggedIn = () => {
    return (
        this.setState({userLoggedIn : !this.state.userLoggedIn})
    )
  }
  componentDidMount() {
    Axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
      .then((response) => {
        console.log(response.data);
        const data = JSON.stringify(response.data)
        localStorage.setItem("getData", data);
      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
  //  console.log(this.state.userLoggedIn)
  console.log(this.state.backgroundChangePos)

    return (
      <BrowserRouter>
        <section>
          <Topbar  loginStatus={this.state.userLoggedIn} onUserLoggedIn={this.onUserLoggedIn} backgroundChangePos={this.state.backgroundChangePos} onbackgroundChange={this.onbackgroundChange} />
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
