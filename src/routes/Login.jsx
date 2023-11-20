import { useRef } from 'react';
import Produto from './Produto';
import { EstiloLogin } from '../css/Login';

function Login() {
  /* Hook- useRef ele retorna uma referencia a um elemento ou componentsem tem que ter que ser
  renderizado novamente*/
  const usuario = useRef();
  const senha = useRef();

  /*pegando os dados de usuario e senha e gravando na sessão */
  const getUsuario = sessionStorage.getItem('usuario');
  const getSenha = sessionStorage.getItem('senha');

  const handleSubmit = () => {
    if (usuario.current.value == 'Admin' && senha.current.value == '12345') {
      //criando um token de autenticação
      let token =
        Math.random().toString(16).substring(2) +
        Math.random().toString(16).substring(2);

      sessionStorage.setItem('usuario', 'Admin');
      sessionStorage.setItem('senha', token);
    } else {
      alert('Usuario e senha Inválidos !!!');
    }
  };

  return (
    <EstiloLogin>
    <section className="login">
      {/*condição ternária */}
      {getUsuario && getSenha ? (
        <Produto />
      ) : (
        <form onSubmit={handleSubmit} className="frmLogin">
          <p>
            USUÁRIO:
            <input type="text" placeholder="Digite seu Usuário" ref={usuario} className="usuario" />
          </p>
          <p>
            SENHA:
            <input type="password" placeholder="Digite sua senha" ref={senha} className="senha" />
          </p>
          <button type="submit" className="btnEntrar">ENTRAR</button>
        </form>
      )}
    </section>
    </EstiloLogin>
  );
}
export default Login;
