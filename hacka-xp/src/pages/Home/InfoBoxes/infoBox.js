import React from 'react';
import Graph from '../../../assets/img/home/desempenhoPorCarteira.svg';

import './infoBox.scss';

export default function Header() {
    return (
        <>
            {/* Aqui atráves de um calculo iriamos gerar um gráfico no qual mostrariam os meses em que tiveram maior
            e menor rendimento das carteiras dos clientes */}
            <div className='infoBox'>
                <div className='infoContainer'>
                    <p>Desempenho por cateiras</p>
                    <img src={Graph} alt='grafico desempenho'></img>
                </div>
            {/* Buscariamos atráves de uma api de geolocalização como a thinkData Novos clientes para o acessor 
             mostrando assim nesse campo seus clientes por geolocalização */}
                <div className='infoContainer'>
                    <p>Novos negócios</p>
                    <div className='businessContainer'>
                        <li className='newBusinessNum'>135</li> 
                        <li className='newBusinesText'>Clientes por geolocalização</li>
                    </div>
                </div>
            {/*  */}
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
