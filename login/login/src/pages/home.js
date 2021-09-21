import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import img from './img/logo.png';
import './home.css';
import '../App.css';
import login from './login'
import create_account from './create_account'


class home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="home-img"
                style={
                    {
                        position: 'fixed',
                        width: '100%',
                        height: '100%',
                    }
                }>
                <div className="App">
                    <div className="logo">
                        <img src={img} />
                    </div>

                    <div className="title">
                        <span>VENDA </span>
                        <label>SEUS </label>
                        <span>SLPS </span>
                        <label>FACILMENTE E </label>
                        <br />
                        <span>RECEBA </span>
                        <label>SEU PIX </label>
                        <span>AGORA</span>
                        <label>!</label>
                    </div>

                    <div className="buttons">
                        <Link to='/login'>
                            <button className="btn-enter">ENTRAR</button>
                        </Link>

                        <Link to='/create_account'>
                            <button className="btn-create">CRIAR CONTA</button>
                        </Link>
                    </div>
                </div>

                <main>
                    <Switch>
                        <Route path='/login' component={login} />
                        <Route path='/create_account' component={create_account} />
                    </Switch>
                </main>
            </div>
        )
    }
}
export default home