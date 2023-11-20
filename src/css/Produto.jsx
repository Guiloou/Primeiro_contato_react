import styled from "styled-components";

export const EstiloProduto = styled.section`

.produto{
  width:100%;
  height:600px;
  background:#fff;

}
.titProduto{
  text-align:center;
  color:#00001a;
  text-transform:uppercase;
  padding-top:100px;
  margin-bottom:100px;
  font-size:30px;
}
.tlink{
  text-transform:uppercase;
  margin-left:40%;
  border:2px solid black;
  color:aqua;
  text-decoration:none;
  background:#00001a;
}
.logout{
  margin-left:30px;
  color:red;
  background:#00001a;
}
.prod-table{
  margin-top:50px;
}
.table{
  border-collapse:collapse;
  border:2px solid black;
  margin:0 auto;
  & th{
    border:2px solid black;
    background:#00001a;
    color:aqua;
    text-align:center;
  }
}
`