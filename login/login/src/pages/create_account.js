import React, { Component } from 'react';
import './create_account.css'
import img from './img/logo.png';

import '../App.css';

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
                                        placeholder="Digite o nome da sua mãe"/>
                                </div>

                                <div className="inputEnter-next margin-30">
                                    <button type="submit">PRÓXIMA ETAPA</button>
                                </div>

                                <div className="margin-15">
                                    <a>Já é registrado? Entre.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default cerate_account