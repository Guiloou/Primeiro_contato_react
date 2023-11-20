import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ListaProdutos } from '../components/ListaProdutos'
import { EstiloExcluir } from '../css/Excluir';

function Excluir(){

const {id} = useParams();

const navigate= useNavigate();

const recuperaProd = ListaProdutos.filter((item)=> item.id == id);

const [produto]= useState({
  id:recuperaProd[0].id,
  nome:recuperaProd[0].nome,
  descricao:recuperaProd[0].descricao,
  valor:recuperaProd[0].valor,
});

const handleExcluir = (e)=>{
  e.preventDefault();
  let indice;
  ListaProdutos.forEach((item, index)=>{
    if(item.id == produto.id){
      indice = index;
    }
  })
  ListaProdutos.splice(indice, 1);
  navigate('/produto')
}


  return(
    <EstiloExcluir>
    <section className="excluir">
      <h2 className="titExcluir">Excluir Produto</h2>
      <div className="textExcluir">
        <p>Nome:{produto.nome}</p>
        <p>Descrição:{produto.descricao}</p>
        <p>Valor:{produto.valor}</p>
      </div>
      <button onClick={handleExcluir} className="btnExcluir">Excluir</button>
      <button onClick={()=> navigate('/produto')} className="btnCancelar">Cancelar</button>

    </section>
    </EstiloExcluir>
  )
}
export default  Excluir