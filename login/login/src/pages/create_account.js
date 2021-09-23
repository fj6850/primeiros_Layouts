import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './create_account.css'
import img from './img/logo.png';

import '../App.css';

import account_date from './account_date';

import { cpfMask } from './mask';


class cerate_account extends Component {
    constructor(user) {
        super(user)

        this.state = {
            username: '',
            userSurname: '',
            cpf: '',
            rg: '',
            nameMoon: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            userName: e.target.value,
            userSurname: e.target.value,
            cpf: (e.target.value),
            rg: e.target.value,
            nameMoon: e.target

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

                            <div className="contator">
                                <div className="number-contador-1 number-contador-1-create-account">
                                    <span>01</span>
                                </div>

                                <div className="number-contador-2 number-contador-2-create-account">
                                    <span>02</span>
                                </div>

                                <div className="number-contador-3 number-contador-3-create-account">
                                    <span>03</span>
                                </div>

                                <div className="number-contador-4 number-contador-4-create-account">
                                    <span>04</span>
                                </div>
                            </div>

                            <div>
                                <svg width="362" height="6" viewBox="0 0 362 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="3" x2="362" y2="3" stroke="white" stroke-opacity="0.2" stroke-width="6" />
                                    <line y1="3" x2="79" y2="3" stroke="#01FFFF" stroke-width="6" />
                                </svg>

                            </div>

                            <br />
                            <div className="margin-rigth-title">
                                <h1>DADOS PESSOAIS</h1>
                            </div>

                            <div className="margin-40">
                                <div className="input-fields">
                                    <label class="text-margin-name">Nome</label>
                                    <br />
                                    <input type="text"
                                        onChange={this.handleInputChange}
                                        placeholder="Digite seu Nome"
                                        required />
                                </div>

                                <div className="">
                                    <label class="text-margin-surname">Sobrenome</label>
                                    <br />
                                    <input type="text"
                                        onChange={this.handleInputChange}
                                        placeholder="Digite seu Sobrenome"
                                        required />
                                </div>

                                <div className="">
                                    <label class="text-margin-cpf">CPF</label>
                                    <br />
                                    <input type="text" placeholder="000.000.000-00"
                                        maxLength='14'
                                        name='cpf'
                                        value={this.cpf}
                                        onChange={this.handleInputChange}
                                        required />
                                </div>

                                <div className="">
                                    <label class="text-margin-rg">RG</label>
                                    <br />
                                    <input type="text"
                                        onChange={this.handleInputChange}
                                        placeholder="00.000.000-0"
                                        required />
                                </div>

                                <div className="">
                                    <label class="text-margin-name-mom">Nome da Mãe</label>
                                    <br />
                                    <input type="text"
                                        onChange={this.handleInputChange}
                                        placeholder="Digite o nome da sua mãe" />
                                </div>

                                <div className="inputEnter-next-create-account margin-30">
                                    <Link to='/account_date'>
                                        <button type="submit">PRÓXIMA ETAPA</button>
                                    </Link>
                                </div>

                                <div className="margin-30">
                                    <a>Já é registrado? Entre.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sp4ce-Future-create">
                        <label>© 2021 - Sp4ce Future Gaming. All rights reserved</label>
                    </div>
                </div>
            </div>

            <Switch>
                <Route path='/account_date' component={account_date} />
            </Switch>

            </>
        )
    }
}
export default cerate_account