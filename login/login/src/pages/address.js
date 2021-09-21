import React, { Component } from 'react';
import img from './img/logo.png';
import '../App.css';
import './address.css';

class address extends Component {
    constructor(params) {
        super(params)

        this.state = {
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

    render() {
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
                                    <line y1="3.00024" x2="362" y2="3.00024" stroke="white" stroke-opacity="0.2" stroke-width="6"/>
                                    <line y1="3" x2="291" y2="3" stroke="#01FFFF" stroke-width="6"/>
                                </svg>
                            </div>

                            <br />

                            <div className="titlle-address">
                            <h1>ENDEREÇO</h1>
                            </div>

                            <div className="margin-40">
                                <div className="input-fields-zip-code">
                                    <label class="text-margin-zip-code">CEP</label>
                                    <br />
                                    <input type="text"
                                        onChange={this.handleInputChange}
                                        placeholder="Digite o CEP"
                                        required />
                                </div>

                                <div className="">
                                    <label class="text-margin-city">Cidade</label>
                                    <br />
                                    <input type="text"
                                        onChange={this.handleInputChange}
                                        placeholder="Cidade"
                                        required />
                                </div>

                                <div className="div-street">
                                    <label class="text-label-street">Rua</label>
                                    <br />
                                    <input type="text" placeholder="Rua"
                                        onChange={this.handleInputChange}
                                        required />
                                </div>

                                <div className="div-number">
                                    <label class="text-label-number">N°</label>
                                    <br />
                                    <input type="text"
                                        onChange={this.handleInputChange}
                                        placeholder="N°"
                                        required />
                                </div>

                                <br/>

                                <div className="div-state">
                                    <label class="text-labbel-state">Estado</label>
                                    <br />
                                    <select className="select-state">
                                    <option>Selecione</option>
                                        <option>São Paulo</option>
                                    </select>
                                </div>

                                <div className="div-country">
                                    <label class="text-label-country">País</label>
                                    <br />
                                    <select className="select-country">
                                    <option>Selecione</option>
                                        <option>Brasil</option>
                                    </select>
                                </div>

                                <br/>

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
                                    <button type="submit">PRÓXIMA ETAPA</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default address