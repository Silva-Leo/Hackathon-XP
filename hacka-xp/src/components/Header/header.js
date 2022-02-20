import React from 'react';
import { Link } from "react-router-dom";
import HeaderLogo from '../../assets/img/HeaderLogo.svg';
import ClientAvatar from '../../assets/img/ClientAvatar.svg';
import WomanAvatar from '../../assets/img/WomanAvatar.jpg';

import './header.scss';

export default function Header() {
    return (
        <header>
            <div className='logoImg'>
                <img src={HeaderLogo} alt='Header Logo'></img>
            </div>

            <nav id='navBarLista'>
                <li className='follow'><Link to="/enriquecer">Enriquecer</Link></li>
                <li className='follow'><Link to="/descobrir">Descobrir</Link></li>
                <li className='follow'><Link to="/acompanhar">Acompanhar</Link><div className='arrow'></div> 
                </li>
                <li className='follow'><Link to="/historico">Histórico</Link></li>
                <li  className='avatar'>
                    <a href='#'>Laura Assis</a>
                    <img src={WomanAvatar} alt='avatar'></img> 
                    <div className='arrow'></div>
                </li>
            </nav>
        </header>
    )
}