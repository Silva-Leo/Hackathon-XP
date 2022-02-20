import React from 'react';

import HeaderLogo from '../../assets/img/HeaderLogo.svg';

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
                <li>Acompanhar</li>
                <li>Histórico</li>
                <div>
                    <img src=''></img> Nome Acessor
                </div>
            </nav>
        </header>
    )
}