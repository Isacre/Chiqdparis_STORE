import styled from "styled-components";

export const HeaderBackground = styled.div`
  width: 100vw;
  min-height: 12vh;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  position: relative;
  z-index: 1;
`;

export const HeaderContent = styled.div`
  margin: auto;
  justify-content: space-between;
  width: 70%;
  min-height: 100%;
  display: flex;
  align-items: center;
  img {
    max-width: 120px;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 0.5rem;
`;

export const NavBar = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  gap: 20px;
  transition: ease-in-out 200;

  p {
    cursor: pointer;
    :hover {
      color: #ff66c4;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ImgContainer = styled.div``;

export const RightContainer = styled.div`
  align-items: center;
  vertical-align: bottom;
`;

export const WideMenu = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  align-items: baseline;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ShoppingCart = styled.div`
  display: flex;
  div {
    position: relative;
    right: 10px;
    top: -10px;
    background-color: #ff66c4;
    border-radius: 25px;
    color: #fff;
    text-align: center;
    width: 20px;
    height: 20px;
  }
`;

export const HamburguerMenu = styled.div`
  display: none;
  transition: all ease-in-out 300ms;
  transform: ${(props) => `rotate(${props.OpenMenu ? "90deg" : "-180deg"})`};
  margin-right: 10%;
  @media (max-width: 900px) {
    display: flex;
  }
`;

export const Register = styled.div`
  display: flex;
  max-width: 300px;
  gap: 10px;
  img {
    max-width: 45px;
    height: 45px;
    border-radius: 20px;
  }
`;
