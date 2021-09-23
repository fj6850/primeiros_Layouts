import React, { Component } from 'react';
import img from './img/logo.png';

import '../App.css'
import './confirm_account.css'


class welcome extends Component {
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
                            <h1>BEM VINDO A SP4CE P2P</h1>

                            <label className="verified-Account">Sua conta foi verificada com sucesso!</label>
                            
                            <div className="input-fields">
                                <div className="margin-rigth-title">
                                    <div className="inputEnter-next margin-15">
                                        <button type="submit">ACESSAR CONTA</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sp4ce-Future-welcome">
                        <label>© 2021 - Sp4ce Future Gaming. All rights reserved</label>
                    </div>
                </div>
            </>
        )
    }
}
export default welcome