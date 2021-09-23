import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import '../App.css'
import img from './img/logo.png';

import './confirm_account.css'
import welcome from './welcome';


class confirm_account extends Component {
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
                        <div className="margin-top-100">

                            <h1>CONFIRMAÇAO DE CONTA</h1>
                            

                            <div className="input-fields">
                                <div className="margin-rigth-title">

                                    <div className="Information">
                                        <label>
                                            Enviamos um e-mail para você com um link de confirmaçao.
                                            <br />
                                            <br />
                                            Caso nao ache o e-mail verifique na sua caixa de SPAN ou
                                            <br />
                                            lixo eletrônico. Não se esqueça de adicionar nosso email
                                            <br/>
                                            como confiável para receber as próximas mensagens na sua
                                            <br />
                                            caixa de entrada.
                                        </label>
                                    </div>

                                    <div className="inputEnter-next margin-15">
                                        <Link to="/welcome">
                                             <button type="submit">FAZER LOG IN</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sp4ce-Future-confirm">
                    <label>© 2021 - Sp4ce Future Gaming. All rights reserved</label>
                </div>
                </div>

                <Switch>
                <Route path='/welcome' component={welcome} />
            </Switch>
            </>
        )
    }
}
export default confirm_account