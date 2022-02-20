import React from 'react';
import Client from '../../../assets/img/home/listaClientes.svg';
import './listClient.scss'

export default function ListClient () {
    return (
        <>
            <div className='clientsContainer'>
                <img src={Client} alt='listaClientes'></img>
            </div>
        </>
    )
}