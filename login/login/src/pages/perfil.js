import React, { Component } from 'react';
import '../App.css';

import img from './img/logo.png';


class perfil extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
            <nav className="">
                <div className="imG-logo">
                    <img src={img} />
                </div>
            </nav>

            <div>
                <div>
                    teste
                </div>
            </div>

            </>
            
        )
    }
}
export default perfil