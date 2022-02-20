import React from 'react';
import Graph from './GraphInvest/graph.js';
import InfoBoxes from './InfoBoxes/infoBox.js'
import Clients from './ListClients/listClient.js'
import './style.scss';

export default function Home() {
    return (
        <main className='container'>
            <InfoBoxes/>
            <Graph/>
            <Clients/>
        </main>
    );
}
