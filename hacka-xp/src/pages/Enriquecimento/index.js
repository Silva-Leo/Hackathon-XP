import React from 'react';
import './style.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonBasic from '../../components/Botao/botao';
import Cards from '../../assets/img/Page-enriquecer/Frame 53.png'
import Tabela from '../../assets/img/Page-enriquecer/Frame 81.png'

export default function Enriquecimento() {
    return (

        <main className='container'>
            <p id='titulo'>Enriquecimento de dados</p>
            <p id='sub-titulo'>Cadastre um novo cliente ou uma nova lista de contatos e ofereça as melhores soluções em Open Finance</p>
            <p id='paragrafo'>Escolha como você deseja enriquecer seus dados</p>
            <div className='botoes'>
                <Stack direction="row">
                    <Button className='contained' variant="contained">por CFP</Button>
                    <Button className='contained' variant="contained">por CNPJ</Button>
                    <Button className='contained' variant="contained">por Arquivo</Button>
                </Stack>
            </div>

            <input type="text" name="name" id="name" class="form-control" placeholder="Escreva aqui"required/>
           
            <ButtonBasic className="outlined">Enriqueça seus dados</ButtonBasic>
            <hr/>
            <img src={Cards}/>
            <img src={Tabela}/>
        </main>
    )
}