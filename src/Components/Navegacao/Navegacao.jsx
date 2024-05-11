import DestinoCerto from "../../assets/DestinoCerto.png"
import styled from "styled-components"
import Inicio from "../Inicio/Inicio"
import Ajuda from "../Ajuda/Ajuda"
import MinhasViagens from "../MinhasViagens/MinhasViagens"
import Login from "../Login/Login"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #002800;
  height: 15vh;

  img {
    height: 30vh;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 30vw;
  align-items: center;
  list-style: none;
  
  a{
    color: #197f10;
    text-decoration: none;
    font-size: 1.5rem;
  }

  a:hover{
    color: #b3ff9c;
  }
`

export default function Navegacao() {
  return (
    <header>
      <BrowserRouter>
        <Nav>
          <img src={DestinoCerto} alt="Logotipo do site" />
            <List>
              <li> <Link to="/"> Inicio </Link> </li>
              <li> <Link to="/Ajuda"> Ajuda </Link> </li>
              <li> <Link to="MinhasViagens">Minhas Viagens</Link> </li>
              <li> <Link to="Login">Login</Link> </li>
          </List>
        </Nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Ajuda" element={<Ajuda />} />
          <Route path="/MinhasViagens" element={<MinhasViagens />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </header>
  )
}