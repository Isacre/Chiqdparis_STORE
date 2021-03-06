import { useState } from "react";
import { useDispatch } from "react-redux";
import { ChiqLogin, ChiqRegisterUser } from "../../services/chiqAPI";
import {
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
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

const WrongCredentialsWarning = styled.span`
  color: red;
`;
export default function LoginAndRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} />;
  //login
  const [userLogin, setuserLogin] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [registerloading, setRegisterloading] = useState(false);
  const [WrongCredentials, setWrongCredentials] = useState(false);
  const [Warning, setWarning] = useState(
    "Credenciais Incorretas!, verifique seu login e senha"
  );

  //register

  const [Email, setEmail] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [CPF, setCPF] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [RegisterWarning, setRegisterWarning] = useState(
    "Por favor preencha todos os campos"
  );
  const [WrongInfo, setWrongInfo] = useState(false);

  function handleRegister() {
    setRegisterloading(true);
    if (FirstName && LastName && Email && RegisterPassword && CPF !== "") {
      ChiqRegisterUser(FirstName, LastName, Email, RegisterPassword, CPF)
        .then((user) => {
          ChiqLogin(user.email, RegisterPassword);
          dispatch(SaveUser(user));
          setFirstName("");
          setEmail("");
          setRegisterPassword("");
          setCPF("");
          setRegisterloading(false);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setRegisterloading(false);
        });
    } else {
      setWrongInfo(true);
      setRegisterWarning("Por favor preencha todos os campos");
      setRegisterloading(false);
    }
  }

  function handleFacebookLogin() {
    console.log(userLogin);
  }

  function handleGoogleRegister() {
    console.log(userLogin);
  }

  function handleLogin() {
    setLoading(true);
    if (userLogin && userPassword !== "") {
      ChiqLogin(userLogin, userPassword)
        .then((usuario) => {
          const acessToken = usuario.acessToken;
          localStorage.setItem("accesstoken", acessToken);
          localStorage.setItem("user", JSON.stringify(usuario));
          dispatch(SaveUser(usuario));
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          setWarning("Credenciais Incorretas!, verifique seu login e senha");
          setWrongCredentials(true);
          setLoading(false);
          console.log(err);
        });
    } else {
      setWarning("Por favor, preencha todos os campos");
      setLoading(false);
      setWrongCredentials(true);
    }
  }

  return (
    <Content>
      <Login>
        <h1>J?? TENHO MEU CADASTRO</h1>
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

          {WrongCredentials && (
            <WrongCredentialsWarning>{Warning}</WrongCredentialsWarning>
          )}

          <Remember>
            <p>
              ESQUECEU SEU <a href="/">LOGIN</a> OU <a href="/">SENHA</a>?
            </p>
          </Remember>
          <LoginButton onClick={handleLogin}>
            {loading ? <Spin indicator={antIcon} /> : "ENTRAR"}
          </LoginButton>
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
          <div className="nameAndSurName">
            <input
              placeholder="Nome *"
              value={FirstName}
              className={WrongInfo && FirstName === "" ? "unfilled" : "filled"}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <input
              placeholder="Sobre Nome *"
              value={LastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

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
          {WrongInfo && (
            <WrongCredentialsWarning>{RegisterWarning}</WrongCredentialsWarning>
          )}

          <button onClick={handleRegister}>
            {registerloading ? <Spin indicator={antIcon} /> : "CADASTRAR"}
          </button>
        </InputsDiv>
      </Register>
    </Content>
  );
}
