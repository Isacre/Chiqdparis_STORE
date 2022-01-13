import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Menu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: inline;
  text-align: center;
  width: 100vw;
  height: 100vmax;
  background-color: #f2f3f4;
  line-height: 5vh;

  h2 {
    line-height: 8vh;
  }
`;

const Welcome = styled.div`
  display: flex;
  padding: 10px;

  margin: auto;
  height: 13vh;
  width: 90%;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  h1 {
    margin-top: 8px;
    color: white;
    font-size: 2rem;
  }
`;
const Container = styled.div`
  background-color: #2e49a4;
  height: 13vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export default function MobileMenu(props: any) {
  const navigate = useNavigate();
  const { setSideMenuOpen, handleLogout } = props;
  const userdata = props.userdata;
  return (
    <Menu>
      <Container>
        <Welcome>
          {userdata.firstname === undefined ? (
            <Link to="login" onClick={() => setSideMenuOpen(false)}>
              <h1>Fazer Login</h1>
            </Link>
          ) : (
            <div
              style={{
                display: "flex",
                gap: 5,
                color: "white",
                lineHeight: 1,
              }}
            >
              <h1>Bem vindo, {userdata.firstname}</h1>
            </div>
          )}
          <MdClose
            size={30}
            style={{ color: "#FFF", float: "right" }}
            onClick={() => setSideMenuOpen(false)}
          />
        </Welcome>
      </Container>
      <Link to="home" onClick={() => setSideMenuOpen(false)}>
        <h2>Home</h2>
      </Link>
      <Link to="masculinos" onClick={() => setSideMenuOpen(false)}>
        <h2>Masculino</h2>
      </Link>
      <Link to="femininos" onClick={() => setSideMenuOpen(false)}>
        <h2>Feminino</h2>
      </Link>
      <Link to="joias" onClick={() => setSideMenuOpen(false)}>
        <h2>Joias</h2>
      </Link>
      <Link to="tecnologia" onClick={() => setSideMenuOpen(false)}>
        <h2>Tecnologia</h2>
      </Link>
      {userdata.firstname !== undefined && (
        <>
          <Link to="conta" onClick={() => setSideMenuOpen(false)}>
            <h2>Minha conta</h2>
          </Link>
          <h2
            onClick={() => {
              handleLogout();
              setSideMenuOpen(false);
              navigate("/");
            }}
          >
            Sair
          </h2>
        </>
      )}
    </Menu>
  );
}
