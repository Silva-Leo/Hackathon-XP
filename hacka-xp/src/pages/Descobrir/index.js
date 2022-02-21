import React from 'react';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ButtonBasic from '../../components/Botao/botao';
import CardsDescobrir from '../../assets/img/Page-descobrir/Frame 53.png'
import ListaDescobrir from '../../assets/img/Page-descobrir/lista.png'
import mapaImg from '../../assets/img/Page-descobrir/mapa.png'
import './style.css'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export default function Descobrir() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            {/* Com a junção de dados da API thinkData e a de OpenBank podemos encontrar novos possiveis clientes para 
             o acessor podendo adicionar varios filtros para que encontre o cliente que encaixe no seu perfil */}
            <head className='container'>
                <p id='tituloDescobrir'>Descoberta de clientes</p>

                <p id='sub-tituloDescobrir'>Um universo de novas oportunidades que pode estar a poucos metros de você. Utilize a geolocalização e analise com o Open Finance para prospectar seus clientes e montar carteiras rentáveis</p>
                <p id='paragrafoDescobrir'>Utilize os filtros abaixo para realizar a prospecção de novos clientes</p>
            </head>
            <main className='main'>
                <section>
                    <div className='opcoes'>
                        <div>
                            <p><b>Estado</b></p>
                            <p>Selecione o estado do usuário</p>
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">SP</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}><MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>São Paulo</MenuItem>
                                    <MenuItem value={20}>Minas Gerais</MenuItem>
                                    <MenuItem value={30}>Rio de Janeiro</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='opcoes'>
                        <div>
                            <p><b>Cidade</b></p>
                            <p>Selecione a cidade do usuário</p>
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">São Paulo </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}><MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>São Paulo</MenuItem>
                                    <MenuItem value={20}>Minas Gerais</MenuItem>
                                    <MenuItem value={30}>Rio de Janeiro</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='opcoes'>
                        <div>
                            <p><b>Raio de busca</b></p>
                            <p>Selecione o raio de busca</p>
                        </div>
                        <div>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">15 KM </InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}><MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>5 KM</MenuItem>
                                    <MenuItem value={20}>15 KM</MenuItem>
                                    <MenuItem value={30}>30 KM</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='opcoes'>
                        <div>
                            <p><b>Investe em poupança</b></p>
                            <p>Filtre somente usuários que investem em poupança</p>
                        </div>
                        <div>
                            <Switch {...label} defaultChecked color='default' />
                        </div>
                    </div>
                    <div className='opcoes'>
                        <div>
                            <p><b>Investimento negativo nos últimos meses</b></p>
                            <p>Selecione o usuário que possui um Investimento negativo nos últimos 3 meses</p>
                        </div>
                        <div>
                            <Switch {...label} defaultChecked color='default' />
                        </div>
                    </div>
                    <div id='botaoBusca'
                    ><ButtonBasic className="outlined">Iniciar busca</ButtonBasic></div>
                </section>
                <section>
                    <img id='mapa'src={mapaImg}/>
                </section>
            </main>
            <div className='imagens'>
                    <img id='img1' src={CardsDescobrir}/>
                    <img id='img2' src={ListaDescobrir}/>
            </div>

        </>
    );
}
