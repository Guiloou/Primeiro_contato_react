import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos'

import { EstiloEditar } from '../css/Editar';


function Editar(){

  const navigate = useNavigate();
  const {id} =useParams();

  const recuperaProd = ListaProdutos.filter((item)=> item.id == id);


  const [produto,setProduto]= useState({
    id:recuperaProd[0].id,
    nome:recuperaProd[0].nome,
    descricao:recuperaProd[0].descricao,
    valor:recuperaProd[0].valor,
  });

const handleChange =(e)=>{
  const{ name, value}= e.target;
  setProduto({...produto,[name]:value});
}

const handleSubmit = (e)=>{
  e.preventDefault();
  let indice;
  ListaProdutos.forEach((item, index)=>{
    if(item.id == produto.id){
      indice= index;
    }
  });
  ListaProdutos.splice(indice,1,produto);
  navigate('/produto')
}


  return(
    <EstiloEditar>
    <section className="editar">
    <form onSubmit={handleSubmit} className="frmEditar">
      <fieldset>
        <legend>Editar Produto</legend>
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
          <button type="submit" className="btnEditar">Editar</button>
          <button onClick={()=> navigate('/produto')} className="btnCancelar">Cancelar</button>
        </div>


      </fieldset>
    </form>
  </section>
  </EstiloEditar>
  )
}
export default  Editar