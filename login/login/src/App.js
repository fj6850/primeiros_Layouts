import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import './App.css';


import Login from './pages/login'
import Home from './pages/home'
import RecoverPassword from './pages/RecoverPassword'
import create_account from './pages/create_account'
import account_date from './pages/account_date'
import address from './pages/address'
import finalization_registration from './pages/finalization_registration'
import confirm_account from './pages/confirm_account'
import welcome from './pages/welcome'
import ArrayState from './pages/ArrayState'
import perfil from './pages/perfil'


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
        <Route path='/address' component={address} />
        <Route path='/finalization_registration' component={finalization_registration} />
        <Route path='/confirm_account' component={confirm_account} />
        <Route path='/welcome' component={welcome} />
        <Route path='/ArrayState' component={ArrayState} />
        <Route path='/perfil' component={perfil} />
      </Switch>
    </main>
    </>
  );
}

export default App;

