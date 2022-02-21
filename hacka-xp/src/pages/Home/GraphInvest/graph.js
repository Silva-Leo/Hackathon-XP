import React from 'react';

import Dots from '../../../assets/img/home/dots.png';
import Graphic from '../../../assets/img/home/graphLines.png'

import './graph.scss'
export default function Graph() {
    return (
        <>
            <div className='graphContainer'>
                <div className='legendaContainer'>
                    <p>Saldo por Investimento</p>
                    <div className='legendaLine'>
                        <div className='lineInv'></div> 
                        <div className='lineTextInv'>Fundo de Invenstimento</div>

                        <div className='lineVar'></div> 
                        <div className='lineTextVar'>Renda variavel</div>

                        <div className='lineFixa'></div> 
                        <div className='lineTextFixa'>Renda fixa</div>

                        <div className='calendarioContainer'>
                            <div className='dateText'>2022</div>
                            <img className='calendarioIcon' alt='calendarioIcone' src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-calendar-wedding-dreamstale-lineal-dreamstale-2.png"/>
                        </div>

                        <div className='pointContainer'>
                            <img src={Dots}></img>
                        </div>
                    </div>
                </div>

                <div className='graph'>
                    <img src={Graphic}></img>
                </div>
            </div>
        </>
    )
}