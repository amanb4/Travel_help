import './App.css'
import Homepage from "./components/auth/homepage/homepage"
import Login from "./components/auth/login/login"
import Travel from "./App2"
import Header from './components/auth/homepage/Header';
import Register from "./components/auth/register/register"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div>
    <Header />
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
