import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40vh;
    align-items: center;
  }

  input {
    margin: 10px;
    border: 0.2px solid forestgreen;
  }

  button {
    border-radius: 20px;
    border: transparent;
    width: 5vw;
    background-color: #c6deb6;
  }
`

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <Container>
        <h1>Faça seu login aqui</h1>
          <form>
            <label htmlFor="username">Nome de usuário:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              name="senha"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />

            <button type="submit">Entrar</button>
          </form>
      </Container>
    </>
  );
}