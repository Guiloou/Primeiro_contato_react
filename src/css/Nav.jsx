import styled from 'styled-components';

export const EstiloNav = styled.header`
  .menu {
    width: 100%;
    height: 80px;
    color: aqua;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 0;
    background: #00001a;
  }
  .menu h2 {
    font-size: 25px;
  }
  .navmenu ul {
    display: flex;
    gap: 20px;
    list-style:none;
  }
  .tlink{
    text-decoration:none;
    color:aqua;
    font-size:20px;
    text-transform:uppercase;
  }
  .tlink:hover{
    color:yellow;
  }
`;
