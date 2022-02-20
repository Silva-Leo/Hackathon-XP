import React from 'react';

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
                <li>Enriquecer</li>
                <li>Descobrir</li>
                <li className='follow'>
                    <a href='#'>Acompanhar</a>
                    <div className='arrow'></div> 
                </li>
                
                <li>Histórico</li>
                <li  className='avatar'>
                    <a href='#'>Laura Assis</a>
                    <img src={WomanAvatar} alt='avatar'></img> 
                    <div className='arrow'></div>
                </li>
            </nav>
        </header>
    )
}