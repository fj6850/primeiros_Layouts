import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';


import Login from './pages/login'
import Home from './pages/home'
import RecoverPassword from './pages/RecoverPassword'
import create_account from './pages/create_account'
import account_date from './pages/account_date'

function App() {
  return (  
    <>
    <div>
      
    </div>
    <main>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/RecoverPassword' component={RecoverPassword} />
        <Route path='/create_account' component={create_account} />
        <Route path='/account_date' component={account_date} />
      </Switch>
    </main>
    </>
  );
}

export default App;

