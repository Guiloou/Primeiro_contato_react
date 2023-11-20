import { useState } from 'react';
import { ListaProdutos } from '../components/ListaProdutos';
import { useNavigate } from 'react-router-dom';
import { EstiloInserir } from '../css/Inserir';

function Inserir() {
//Hook useNavigate
  const navigate = useNavigate();
  //gerarador de um novo ID
  let novoID = ListaProdutos[ListaProdutos.length -1].id +1;

//Hook useState
const [produto, setProduto]=useState({
  id: novoID,
  nome:'',
  descricao:'',
  valor:'',
});

//funções
const handleChange =(e)=>{
  e.preventDefault();
  const {name, value} = e.target;
  setProduto({...produto,[name]:value});
  console.log(name)
}
const handleSubmit =(e)=>{
  e.preventDefault();
  ListaProdutos.push(produto);
  navigate('/produto')
}


  return (
    <EstiloInserir>
    <section className="inserir">
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldInserir">
          <legend>Inserir Produto</legend>
          <p>
            <label>Nome do Produto:</label>
            <input
              type="text"
              name="nome"
              id="idNome"
              value={produto.nome}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Descrição do Produto:</label>
            <input
              type="text"
              name="descricao"
              id="idDesc"
              value={produto.descricao}
              onChange={handleChange}
            />
          </p>
          <p>
            <label>Valor do Produto:</label>
            <input
              type="text"
              name="valor"
              id="idDesc"
              value={produto.valor}
              onChange={handleChange}
            />
          </p>
          <div>
            <button type="submit" className="btnInserir">Cadastrar</button>
            <button onClick={()=> navigate('/produto')} className="btnCancelar">Cancelar</button>
          </div>
        </fieldset>
      </form>
    </section>
    </EstiloInserir>
  );
}
export default Inserir;
