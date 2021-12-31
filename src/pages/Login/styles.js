import styled from "styled-components";

export const Component = styled.div`
  background-color: #fafafb;
`;
export const Content = styled.div`
  margin: auto;
  max-width: 80vw;
  height: 100vh;
  padding: 5%;
  display: flex;
  justify-content: space-between;
`;

export const Login = styled.div`
  width: 50%;
  text-align: center;
`;
export const Register = styled.div`
  width: 50%;
  height: fit-content;
  text-align: center;
  border-left: 2px solid grey;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  gap: 10px;
  input {
    border-radius: 5px;
    line-height: 40px;
    padding-left: 10px;
    outline: none;
    border: 1px solid rgba(128, 128, 128, 0.5);
  }

  button {
    background: #b54e93;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    cursor: pointer;

    :hover {
      filter: brightness(110%);
    }
  }
`;

export const Remember = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  border-bottom: 2px solid rgba(128, 128, 128, 0.5);
  color: grey;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;

  p {
    cursor: pointer;
    :hover {
      color: black;
    }
  }
`;

export const LoginButton = styled.button`
  margin-bottom: 30px;
`;

export const SocialLogin = styled.div`
  button {
    padding: 5px 15px;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
  }
  div {
    display: flex;
    gap: 20px;
    width: 80%;
    margin: auto;
    justify-content: center;
  }

  img {
    margin-right: 5px;
  }
`;

export const FacebookButton = styled.button`
  color: blue;
  border: 1px solid blue;
`;
export const GoogleButton = styled.button`
  border: 1px solid red;
  color: red;
`;
