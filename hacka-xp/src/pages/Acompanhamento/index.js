import React from 'react';

import Boxes from '../../assets/img/Page-acompanhar/boxes.svg';
import Graph1 from '../../assets/img/Page-acompanhar/graph-1.svg';
import Graph2 from '../../assets/img/Page-acompanhar/graph-2.svg';
import Graph3 from '../../assets/img/Page-acompanhar/graph-3.svg';
import SearchResult from '../../assets/img/Page-acompanhar/search.svg';
import Navigation from '../../assets/img/Page-acompanhar/navigate.svg';


import './style.scss';

export default function Acompanhar() {
    return (
        <>
            {/* Atráves da Api de OpenBank iriamos compilar os dados do clientes do acessor
            e trazer para ele os resultados gerais de seus clientes, além de poder consultar individulmente
            o perfil do  cliente e seus resultados */}
            <main>
                <div className='title'>
                    <h1 id='titleText'>Acompanhamento de clientes</h1>
                    <div className='subtitle'>
                        <p>Acompanhe aqui os resultados dos seus clientes e estruture</p>
                        <p>melhores ativos com base na análise do perfil de consumo, renda e investimento</p>
                    </div>
                </div>
                <div className='box'>
                    <img src={Boxes} alt='boxes'></img>
                </div>
                <div className='graphs'>
                    <img src={Graph1} alt='grafico'></img>
                    <img src={Graph2} alt='grafico'></img>
                    <img src={Graph3} alt='grafico'></img>
                </div>

                <div className='searchContainer'>
                    <img className='search' src={SearchResult} alt='pesquisa'></img>
                    <img className='navigate' src={Navigation} alt='navigate'></img>
                </div>
            </main>
        </>
    );
}