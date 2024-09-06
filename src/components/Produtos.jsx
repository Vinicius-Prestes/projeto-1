import React, { useEffect, useState } from 'react';
import '../css/produtos.css'
import dadosProdutos from '../data/dadosProdutos.json';


const Produtos=()=>{
    const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(dadosProdutos);
  }, []);

    return(
        <div className="lista-produtos">
        {produtos.map((produto, index) => (
          <div key={index} className="produto-card">
            <img src={`./imagens/${produto.imagem}`} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <span>{produto.preco}</span>
          </div>
        ))}
      </div>
    );
}
export default Produtos