import React from 'react';
import './style.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ButtonBasic from '../../components/Botao/botao';
import Cards from '../../assets/img/Page-enriquecer/Frame 53.png'
import Tabela from '../../assets/img/Page-enriquecer/Frame 81.png'

export default function Enriquecimento() {
    return (

        <main className='container'>
            <p id='titulo'>Enriquecimento de dados</p>
            <p id='sub-titulo'>Cadastre um novo cliente ou uma nova lista de contatos e ofereça as melhores soluções em Open Finance</p>
            <p id='paragrafo'>Escolha como você deseja enriquecer seus dados</p>
            <div>
                <Stack direction="row">
                    <Button variant="contained">por CFP</Button>
                    <Button variant="contained">por CNPJ</Button>
                    <Button variant="contained">por ..</Button>
                </Stack>
            </div>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Escreva aqui seus dados" variant="outlined" />
            </Box>
            <ButtonBasic>Enriqueça seus dados</ButtonBasic>
            <hr/>
            <img src={Cards}/>
            <img src={Tabela}/>
        </main>
    )
}