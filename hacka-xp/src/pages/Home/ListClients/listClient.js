import React from 'react';
import Client from '../../../assets/img/home/listaClientes.svg';
import './listClient.scss'

export default function ListClient () {
    return (
        <>
            {/* Farimos analises dos dados recebidos da api para traçar o perfil dos clientes e o desenmpenho dele
            dentro do tempo de análise */}
            <div className='clientsContainer'>
                <img src={Client} alt='listaClientes'></img>
            </div>
        </>
    )
}