import React from 'react';
import Layout from './components/Layout';
/*import Home from './components/Home.jsx'
import Sobre from './components/Sobre.jsx'
import Produtos from './components/Produtos.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import Error from './components/Error.jsx'
import './css/global.css'
import './css/estilo.css'*/

const Home = () => {
  return (
    <div>
      <h2>Bem-vindo à SportMax!</h2>
      {/* Conteúdo da página inicial */}
    </div>
  );
}

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App
