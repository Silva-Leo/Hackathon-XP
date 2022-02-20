import './App.css';
import Layout from './components/Layout/index.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/enriquecer" element={<Enriquecer />} />
            <Route path="/descobrir" element={<Descobrir />} />
            <Route path="/acompanhar" element={<Acompanhar />} />
            <Route path="/historico" element={<Historico />} />
            <Route path="" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;