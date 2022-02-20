import './App.css';
import Layout from './components/Layout/index.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";






import Descobrir from './pages/Descobrir';

import Home from './pages/Home'

import Enriquecer from './pages/Enriquecimento';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
  
            <Route path="/enriquecer" element={<Enriquecer />} />

            <Route path="/descobrir" element={<Descobrir />} />
           {/* <Route path="/acompanhar" element={<Acompanhar />} />

            <Route path="" element={<Home />} />
            {/* <Route path="/descobrir" element={<Descobrir />} />
            <Route path="/acompanhar" element={<Acompanhar />} />

            <Route path="/historico" element={<Historico />} />
             */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;