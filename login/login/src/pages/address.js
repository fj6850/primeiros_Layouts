import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import img from './img/logo.png';
import '../App.css';
import './address.css';
import finalization_registration from './finalization_registration';

class address extends Component {
    constructor(params) {
        super(params)

        this.state = {
            mystate: [
                'AC - Acre',
                'AL - Alagoas',
                'AP - Amapá',
                'AM - Amazonas',
                'BA - Bahia',
                'CE - Ceará',
                'DF - Distrito Federal',
                'ES - Espírito Santo',
                'GO - Goías',
                'MA - Maranhão',
                'MT - Mato Grosso',
                'MS - Mato Grosso do Sul',
                'MG - Minas Gerais',
                'PA - Pará',
                'PB - Paraíba',
                'PR - Paraná',
                'PE - Pernambuco',
                'PI - Piauí',
                'RJ - Rio de Janeiro',
                'RN - Rio Grande do Norte',
                'RS - Rio Grande do Sul',
                'RO - Rondônia',
                'RR - Roraíma',
                'SC - Santa Catarina',
                'SP - São Paulo',
                'SE - Sergipe',
                'TO - Tocantins'
            ]
        };

        this.address = {
            zip_code: '',
            city: '',
            street_name: '',
            number: '',
            district: '',
            state: '',
            country: '',
            complement: '',
            aditional_notes: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.setState({
            zip_code: e.target.value,
            city: e.target.value,
            street_name: e.target.value,
            number: e.target.value,
            district: e.target.value,
            state: e.target.value,
            country: e.target.value,
            complement: e.target.value,
            aditional_notes: e.target.value
        })
    }


    render(setFieldValue) {

        function onBlurCep(event, setFieldValue) {
            const { value } = event.target;

            const cep = value?.replace(/[^0-9]/g, '');

            if (cep?.length !== 8) {
                return;
            }

            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then((res) => res.json())
                .then((data) => {
                    setFieldValue('logradouro', data.logradouro);
                    setFieldValue('bairro', data.bairro);
                    setFieldValue('cidade', data.localidade);
                    setFieldValue('estado', data.uf);
                });
        }

        return (
            <>
                <div className="App">
                    <div className="nav">
                        <div className="img-logo">
                            <img src={img} />
                        </div>
                    </div>

                    <h1>CADASTRE-SE GRÁTIS</h1>

                    <span className="passos">Para se cadastrar na Sp4ce sigas todos os passos abaixo.</span>

                    <div className="input-fields">
                        <div className="margin-rigth-title">

                            <div className="contator">
                                <div className="number-contador-1 number-contador-1-address">
                                    <span>01</span>
                                </div>

                                <div className="number-contador-2 number-contador-2-address">
                                    <span>02</span>
                                </div>

                                <div className="number-contador-3 number-contador-3-address">
                                    <span>03</span>
                                </div>

                                <div className="number-contador-4 number-contador-4-address">
                                    <span>04</span>
                                </div>
                            </div>

                            <div>
                                <svg width="362" height="6" viewBox="0 0 362 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="3.00024" x2="362" y2="3.00024" stroke="white" stroke-opacity="0.2" stroke-width="6" />
                                    <line y1="3" x2="291" y2="3" stroke="#01FFFF" stroke-width="6" />
                                </svg>
                            </div>

                            <br />

                            <div className="titlle-address">
                                <h1>ENDEREÇO</h1>
                            </div>
                            <form method="post" value="">
                                <div className="margin-40">
                                    <div className="input-fields-zip-code">
                                        <label class="text-margin-zip-code">CEP</label>
                                        <br />
                                        <input type="text"
                                            name="cep"
                                            onChange={this.handleInputChange}
                                            placeholder="Digite o CEP"
                                            onBlur={(event) => onBlurCep(event, setFieldValue)}
                                            required />
                                    </div>

                                    <div className="">
                                        <label class="text-margin-city">Cidade</label>
                                        <br />
                                        <input type="text"
                                            name="cidade"
                                            onChange={this.handleInputChange}
                                            placeholder="Cidade"
                                            required />
                                    </div>

                                    <div className="div-street">
                                        <label class="text-label-street">Rua</label>
                                        <br />
                                        <input type="text" placeholder="Rua"
                                            name="logradouro"
                                            onChange={this.handleInputChange}
                                            required />
                                    </div>

                                    <div className="div-number">
                                        <label class="text-label-number">N°</label>
                                        <br />
                                        <input type="text"
                                            name="number"
                                            onChange={this.handleInputChange}
                                            placeholder="N°"
                                            required />
                                    </div>

                                    <div className="">
                                        <label class="text-margin-city">Bairro</label>
                                        <br />
                                        <input type="text"
                                            name="bairro"
                                            onChange={this.handleInputChange}
                                            placeholder="Bairro"
                                            required />
                                    </div>

                                    <div className="div-state">
                                        <label class="text-labbel-state">Estado</label>
                                        <br />
                                        <select className="select-state" name="estado">
                                            <option>Selecione</option>
                                            {this.state.mystate.map(data => (
                                                <option>{data}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="div-country">
                                        <label class="text-label-country">País</label>
                                        <br />
                                        <select className="select-country" name="couuntry">
                                            <option>Selecione</option>
                                            <option>Brasil</option>
                                        </select>
                                    </div>

                                    <br />

                                    <div className="div-complement">
                                        <label class="text-label-complement">Complemento</label>
                                        <br />
                                        <input type="text"
                                            onChange={this.handleInputChange}
                                            placeholder="Complemento"
                                            required />
                                    </div>

                                    <div className="inputEnter-next margin-30">
                                        <a className="a-next">VOLTAR</a>
                                        <Link to="/finalization_registration">
                                            <button type="submit">PRÓXIMA ETAPA</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="sp4ce-Future-create">
                        <label>© 2021 - Sp4ce Future Gaming. All rights reserved</label>
                    </div>
                </div>

                <Switch>
                    <Route path='/finalization_registration' component={finalization_registration} />
                </Switch>
            </>
        )
    }
}
export default address