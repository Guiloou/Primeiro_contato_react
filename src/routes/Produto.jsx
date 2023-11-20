import {} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';
import { GrFormEdit as Editar } from 'react-icons/gr';
import { RiDeleteBin2Fill as Excluir } from 'react-icons/ri';
import { EstiloProduto } from '../css/Produto';

function Produtos() {
  //utilizando o hook useNavigate para redirecionar
  const navigate = useNavigate();

  //função logout
  const handleLogout = async () => {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('senha');
    alert('Saindo da Sessão');
    navigate('/');
  };
  return (
    <EstiloProduto>
    <section className="produto">
      <h1 className="titProduto">Produtos</h1>
      <Link to="/inserir/produto" className="tlink">Cadastrar Produto</Link>
      <button onClick={handleLogout} className="logout">Logout</button>
      <div className="prod-table">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>VALOR</th>
              <th>EDITAR / EXLUIR</th>
            </tr>
          </thead>
          <tbody>
            {ListaProdutos.map((item, indice) => (
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.descricao}</td>
                <td>{item.valor}</td>
                <td>
                  <Link to={`/editar/produto/${item.id}`}>
                    <Editar />
                  </Link>
                  |
                  <Link to={`/excluir/produto/${item.id}`}>
                    <Excluir />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </EstiloProduto>
  );
}
export default Produtos;
