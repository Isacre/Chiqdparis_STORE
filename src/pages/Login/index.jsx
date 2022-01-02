import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ChiqLogin, ChiqRegisterUser } from "../../services/chiqdparisAPI";
import {
  Component,
  Content,
  Login,
  Register,
  InputsDiv,
  Remember,
  LoginButton,
  SocialLogin,
  FacebookButton,
  GoogleButton,
} from "./styles";
import facelogo from "../../assets/photos/facebook.png";
import googlelogo from "../../assets/photos/pesquisa.png";
import { SaveUser } from "../../store/user/index";
import { useNavigate } from "react-router";

export default function LoginAndRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //login
  const [userLogin, setuserLogin] = useState("");
  const [userPassword, setuserPassword] = useState("");

  //register

  const [Email, setEmail] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [CPF, setCPF] = useState("");
  const [FullName, setFullName] = useState("");
  const [WrongCredentials, setWrongCredentials] = useState(false);

  function handleRegister() {
    ChiqRegisterUser(FullName, Email, RegisterPassword, CPF)
      .then((user) => {
        ChiqLogin(Email, RegisterPassword);
        setFullName("");
        setEmail("");
        setRegisterPassword("");
        setCPF("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleFacebookLogin() {
    console.log(userLogin);
  }

  function handleGoogleRegister() {
    console.log(userLogin);
  }

  function handleLogin() {
    if (userLogin && userPassword !== "")
      ChiqLogin(userLogin, userPassword)
        .then((usuario) => {
          dispatch(SaveUser(usuario));
        })
        .catch((err) => {
          setWrongCredentials(true);
          setTimeout(() => {
            setWrongCredentials(false);
          }, 3500);
        });
    else {
      console.log("aaa");
    }
  }

  return (
    <Component>
      <Content>
        <Login>
          <h1>JÁ TENHO MEU CADASTRO</h1>
          <InputsDiv>
            <input
              className="logininput"
              placeholder={
                WrongCredentials ? "Credenciais incorretas" : "Email *"
              }
              style={
                WrongCredentials
                  ? { border: "1px solid red" }
                  : { border: "1px solid rgba(128, 128, 128, 0.5)" }
              }
              value={userLogin}
              onChange={(event) => {
                setuserLogin(event.target.value);
                setWrongCredentials(false);
              }}
            />
            <input
              style={
                WrongCredentials
                  ? { border: "1px solid red" }
                  : { border: "1px solid rgba(128, 128, 128, 0.5)" }
              }
              className="logininput"
              type="password"
              placeholder={
                WrongCredentials ? "Credenciais incorretas" : "Senha *"
              }
              value={userPassword}
              onChange={(event) => {
                setuserPassword(event.target.value);
                setWrongCredentials(false);
              }}
            />

            {WrongCredentials && <span>Usuário ou senha incorreta!</span>}

            <Remember>
              <p>ESQUECI MEU LOGIN</p>
              <p>ESQUECI MINHA SENHA</p>
            </Remember>
            <LoginButton onClick={handleLogin}>Entrar</LoginButton>
          </InputsDiv>
          <SocialLogin>
            <h3>QUERO ACESSAR COM MINHAS REDES SOCIAIS</h3>
            <div>
              <FacebookButton onClick={handleFacebookLogin}>
                {" "}
                <img src={facelogo} width={25} alt="facebookLogo" />
                Entrar com o Facebook
              </FacebookButton>
              <GoogleButton onClick={handleGoogleRegister}>
                <img src={googlelogo} width={25} alt="Googlelogo" />
                Entrar com o Google
              </GoogleButton>
            </div>
          </SocialLogin>
        </Login>
        <Register>
          <h1>QUERO ME CADASTRAR</h1>
          <InputsDiv>
            <input
              placeholder="Nome Completo *"
              value={FullName}
              onChange={(event) => setFullName(event.target.value)}
            />
            <input
              placeholder="Email *"
              value={Email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              placeholder="Crie sua senha *"
              value={RegisterPassword}
              onChange={(event) => setRegisterPassword(event.target.value)}
            />
            <input
              type="password"
              placeholder="Confirme a senha *"
              value={confirmPassword}
              onChange={(event) => setconfirmPassword(event.target.value)}
            />
            <input
              placeholder="CPF ou CNPJ *"
              value={CPF}
              onChange={(event) => setCPF(event.target.value)}
            />

            <button onClick={handleRegister}>Cadastrar</button>
          </InputsDiv>
        </Register>
      </Content>
    </Component>
  );
}
