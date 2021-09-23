import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import '../App.css'
import './finalization_registration.css'
import img from './img/logo.png';

import confirm_account from './confirm_account';


class finalization_registration extends Component {
    constructor(param) {
        super(param)
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
                        <h1>CADASTRE-SE GRÁTIS.</h1>
                        <span className="passos">Para se cadastrar na Sp4ce sigas todos os passos abaixo.</span>

                        <div className="input-fields">
                            <div className="margin-rigth-title">

                                <div className="contator">
                                    <div className="number-contador-1 number-contador-1-finalization-registration">
                                        <span>01</span>
                                    </div>

                                    <div className="number-contador-2 number-contador-2-finalization-registration">
                                        <span>02</span>
                                    </div>

                                    <div className="number-contador-3 number-contador-3-finalization-registration">
                                        <span>03</span>
                                    </div>

                                    <div className="number-contador-4 number-contador-4-finalization-registration">
                                        <span>04</span>
                                    </div>
                                </div>

                                <div>
                                    <svg width="362" height="6" viewBox="0 0 362 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="3" x2="362" y2="3" stroke="#01FFFF" stroke-width="6" />
                                    </svg>
                                </div>

                                <div className="warning">
                                    <label>ESTAMOS QUASE LÁ!</label>
                                </div>

                                <div className="Information">
                                    <label>
                                        Agora vem a última etapa e nao menos importante!
                                        <br />
                                        Concorde com os temos abaixo para que seja criada 
                                        <br />
                                        e sua conta Sp4ce Pague.
                                    </label>
                                </div>

                                <div className="terms">
                                    <input className="input-checkbox" type="checkbox" />Eu concordo com os <span>Termos de Uso da Sp4ce</span>
                                </div>

                                <div className="inputEnter-next margin-30">
                                    <a className="a-next">VOLTAR</a>
                                    <Link to="/confirm_account">
                                        <button type="submit">PRÓXIMA ETAPA</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sp4ce-Future-finalization">
                    <label>© 2021 - Sp4ce Future Gaming. All rights reserved</label>
                </div>
            </div>

            <Switch>
                <Route path='/confirm_account' component={confirm_account} />
            </Switch>

        
            </>
        )
    }
}
export default finalization_registration