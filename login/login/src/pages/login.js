import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import img from './img/logo.png';
import './login.css';
import '../App.css';
import home from './home'
import RecoverPassword from './RecoverPassword'

class login extends Component {
    constructor(user) {
        super(user)

        this.state = {
            userName: '',
            passWord: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            userName: e.target.value,
            passWord: e.target.value
        })
    }

    render() {
        const { userName } = this.state
        return (
            <>
                <div className="App">
                    <div className="nav">
                        <div className="img-logo">
                            <img src={img} />
                        </div>
                    </div>

                    <div className="margin">
                        <h1>LOG IN</h1>
                        <div className="welcome">
                            <span>Bem vindo de volta! Faça login com seu e-mail.</span>
                        </div>

                        <form>
                            <div className="loginInputEmail">
                                <label for="nomeCompleto" class="label-info">E-mail</label>
                                <br />
                                <input type="email" 
                                onChange={this.handleInputChange} 
                                placeholder="Digite seu email" 
                                required/>
                            </div>

                            <div className="loginInputPassword">
                                <label for="nomeCompleto" class="label-info">Senha</label>
                                <br />
                                <input type="password"
                                 onChange={this.handleInputChange} 
                                 placeholder="Digite sua senha"
                                 required/>
                            </div>

                            <div className="inputEnter">
                                <button type="submit">ENTRAR</button>
                            </div>

                            <div className="forgotPassword">
                                <Link to='/RecoverPassword'>
                                    <a src="#">Esqueceu sua senha?</a>
                                </Link>
                            </div>


                            <div className="registerNow">
                                <label>Não tem uma conta? <a src="#">Registre-se agora</a></label>
                            </div>
                        </form>
                    </div>
                </div>
                <Switch>
                    <Route path='/home' component={home} />
                    <Route path='/RecoverPassword' component={RecoverPassword} />
                </Switch>
            </>
        )
    }
}
export default login