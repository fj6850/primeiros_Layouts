import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import login from './login'

import './RecoverPassword.css';
import '../App.css';


import img from './img/logo.png';

class register extends Component {
    constructor(user) {
        super(user)

        this.state = {
            emailUser: '',
            passwordUser: '',
            confirmPassword: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            emailUser: e.target.value,
            passwordUser: e.target.value,
            confirmPassword: e.target.value
        })
    }
    render() {
        return (
            <>
                <div className="App">
                    <div className="img-logo">
                        <img src={img} />
                    </div>

                    <div className="margin">
                        <h1>RCUPERAR SENHA</h1>

                        <div className="container-form">
                            <form>
                                <div className="registerInput">
                                    <label className="registerInput-margin-120">E-mail</label>
                                    <br />
                                    <input type="email" onChange={this.handleInputChange} placeholder="Digite seu email" required />
                                </div>

                                <div className="registerInput">
                                    <label className="registerInput-margin-120">Senha</label>
                                    <br />
                                    <input type="password" onChange={this.handleInputChange} placeholder="Senha" required />
                                </div>

                                <div className="registerInput">
                                    <label className="registerInput-margin-50">Confirmação de senha</label>
                                    <br />
                                    <input type="password" onChange={this.handleInputChange} placeholder="Digite a senha novamente" required />
                                </div>

                                <div className="registerInput registerInput-width-checkbox">
                                    <input type="checkbox" required /> <label>Eu concordo com os</label> 
                                    <a><span>Termos de Uso da Sp4ce.</span></a>
                                </div>

                                <div className="inputEnter">
                                    <button type="submit">RECUPERAR SENHA</button>
                                </div>

                                <div className="registerInput-enter">
                                    <span>Já é registrado?</span> 
                                    <Link to='/login'>
                                        <a href="#">Entre.</a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Switch>
                    <Route path='/login' component={login} />
                </Switch>
            </>
        )
    }
}
export default register