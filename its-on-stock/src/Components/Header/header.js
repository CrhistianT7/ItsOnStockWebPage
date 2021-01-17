import React, {Component} from 'react';
import './header.css';
import '../../../src/css/normalize.css';

class Header extends Component{
    render(){
        return(
            <nav id="nav">
                <div id="logo">
                </div>
                <div id="search">
                    <form>
                        <div>
                            <input placeholder="Que quieres buscar hoy?"/>
                            <span></span>
                        </div>
                    </form>
                </div>
                <div id="sesion">
                    <button id="buttonregister">Registrate</button>
                    <button id="buttonLogin">Inicia Sesión</button>
                </div>
            </nav>
        );
    }
}

export default Header;
