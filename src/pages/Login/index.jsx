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

export default function LoginAndRegister() {
  const dispatch = useDispatch();
  //login
  const [userLogin, setuserLogin] = useState("");
  const [userPassword, setuserPassword] = useState("");

  //register

  const [Email, setEmail] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [CPF, setCPF] = useState("");
  const [CEP, setCEP] = useState("");

  function handleRegister() {
    ChiqRegisterUser();
  }

  function handleFacebookLogin() {
    console.log(userLogin);
  }

  function handleGoogleRegister() {
    console.log(userLogin);
  }

  function handleLogin(email, password) {
    ChiqLogin(email, password).then((usuario) => {
      dispatch(SaveUser(usuario));
    });
  }

  return (
    <Component>
      <Content>
        <Login>
          <h1>JÁ TENHO MEU CADASTRO</h1>
          <InputsDiv>
            <input
              placeholder="Email *"
              value={userLogin}
              onChange={(event) => setuserLogin(event.target.value)}
            />
            <input
              type="password"
              placeholder="Senha *"
              value={userPassword}
              onChange={(event) => setuserPassword(event.target.value)}
            />
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
            <input
              placeholder="CEP *"
              value={CEP}
              onChange={(event) => setCEP(event.target.value)}
            />
            <button onClick={handleRegister}>Cadastrar</button>
          </InputsDiv>
        </Register>
      </Content>
    </Component>
  );
}
