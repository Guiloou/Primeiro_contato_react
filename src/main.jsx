import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Produto from './routes/Produto.jsx'
import Login from './routes/Login.jsx'
import Exemplo1 from './routes/Exemplo1.jsx'
import Conteudo from './components/Conteudo.jsx'
import Inserir from './routes/Inserir.jsx'
import Editar from './routes/Editar.jsx'
import Excluir from './routes/Excluir.jsx'
import StyleGlobal from './css/StyleGeral.jsx'

const router = createBrowserRouter([
  {
    path:'/', element:<App />,
    errorElement:<Error/>,

    children:[
      {path:'/', element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/produto', element:<Produto/>},
      {path:'/exemplo1', element:<Exemplo1/>},
      {path:'/conteudo', element:<Conteudo/>},
      {path:'/inserir/produto', element:<Inserir/>},
      {path:'/editar/produto/:id', element:<Editar/>},
      {path:'/excluir/produto/:id', element:<Excluir/>},
      

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <StyleGlobal/>
  </React.StrictMode>,
)
