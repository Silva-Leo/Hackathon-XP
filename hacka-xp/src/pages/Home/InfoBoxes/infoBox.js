import React from 'react';
import Graph from '../../../assets/img/home/desempenhoPorCarteira.svg';

import './infoBox.scss';

export default function Header() {
    return (
        <>
            <div className='infoBox'>
                <div className='infoContainer'>
                    <p>Desempenho por cateiras</p>
                    <img src={Graph} alt='grafico desempenho'></img>
                </div>
                <div className='infoContainer'>
                    <p>Novos negócios</p>
                    <div className='businessContainer'>
                        <li className='newBusinessNum'>135</li> 
                        <li className='newBusinesText'>Clientes por geolocalização</li>
                    </div>
                </div>
                <div className='infoContainer'>
                    <p>Faturamento líquido</p>
                    <div className='businessContainer'>
                    <li className='revenueNum'>R$ 2.245.127,00</li>
                    </div>
                </div>
            </div>
        </>
        );
 }
