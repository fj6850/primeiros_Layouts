import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import './account_date.css'
import '../App.css'
import img from './img/logo.png';

import address from './address';


class account_date extends Component {
    constructor(param) {
        super(param)

        this.state = {
            userEmail: '',
            password: '',
            confirmPassword: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }
    handleInputChange(e) {
        this.setState({
            userEmail: e.target.value,
            password: e.target.value,
            confirmPassword: e.target.value

        })
    }
    render() {
        return (
            <>
            <div className="App">
                <div className="nav">
                    <div className="logo">
                        <img src={img} />
                    </div>
                </div>


                <div>
                    <div className="info">
                        <h1>CADASTRE-SE GRÁTIS</h1>
                        <span className="passos">Para se cadastrar na Sp4ce sigas todos os passos abaixo.</span>

                        <div className="input-fields">
                            <div className="margin-rigth-title">

                                <div className="contator">
                                    <div className="number-contador-1 number-contador-1-accoun-date">
                                        <span>01</span>
                                    </div>

                                    <div className="number-contador-2  number-contador-2-accoun-date">
                                        <span>02</span>
                                    </div>

                                    <div className="number-contador-3  number-contador-3-accoun-date">
                                        <span>03</span>
                                    </div>

                                    <div className="number-contador-4 number-contador-4-accoun-date">
                                        <span>04</span>
                                    </div>
                                </div>

                                <div>
                                    <svg width="362" height="6" viewBox="0 0 362 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="3" x2="362" y2="3" stroke="white" stroke-opacity="0.2" stroke-width="6" />
                                        <line y1="3" x2="183" y2="3" stroke="#01FFFF" stroke-width="6" />
                                    </svg>
                                </div>

                                <br />

                                <h1>DADOS DA CONTA</h1>

                            </div>

                            <div className="margin-40">
                                <div className="input-fields">
                                    <label class="text-margin-name">Email</label>
                                    <br />
                                    <input type="email"
                                        onChange={this.handleInputChange}
                                        placeholder="Digite seu E-mail"
                                        required />
                                </div>

                                <div className="input-fields">
                                    <label class="text-margin-name">Senha</label>
                                    <br />
                                    <input type="password"
                                        onChange={this.handleInputChange}
                                        placeholder="Digite uma senha"
                                        required />
                                </div>

                                <div className="input-fields">
                                    <label class="text-margin-password">Confirmar Senha</label>
                                    <br />
                                    <input type="password"
                                        onChange={this.handleInputChange}
                                        placeholder="Digite a senha novamente"
                                        required />
                                </div>

                                <div className="inputEnter-next margin-30">
                                    <a className="a-next">VOLTAR</a>
                                    <Link to='/address'>
                                        <button type="submit">PRÓXIMA ETAPA</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sp4ce-Future-create">
                    <label>© 2021 - Sp4ce Future Gaming. All rights reserved</label>
                </div>
            </div>

            <Switch>
                <Route path='/address' component={address} />
            </Switch>
            </>
        )
    }
}
export default account_date