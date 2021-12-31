import React, { useState } from "react";
import styled from "styled-components";
import horizontallogo from "../../assets/photos/defaultlogo.svg";
import { MdFavorite, MdShoppingCart, MdPerson, MdMenu } from "react-icons/md";
import SideMenuComponent from "./SideMenu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HeaderBackground = styled.div`
  width: 100vw;
  min-height: 12vh;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  position: relative;
  z-index: 1;
`;

const HeaderContent = styled.div`
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

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 0.5rem;
`;

const NavBar = styled.div`
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

const ImgContainer = styled.div``;

const RightContainer = styled.div`
  align-items: center;
  vertical-align: bottom;
`;

const WideMenu = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  align-items: baseline;

  @media (max-width: 900px) {
    display: none;
  }
`;

const ShoppingCart = styled.div`
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

const HamburguerMenu = styled.div`
  display: none;
  transition: all ease-in-out 300ms;
  transform: ${(props) => `rotate(${props.OpenMenu ? "90deg" : "-180deg"})`};
  margin-right: 10%;
  @media (max-width: 900px) {
    display: flex;
  }
`;

const Register = styled.div`
  display: flex;
  max-width: 300px;
  gap: 10px;

  height: fit-content;
  padding: 0px;
  img {
    max-width: 40px;
    height: 40px;
    border-radius: 20px;
  }
`;

export default function Header() {
  const [OpenHamburguerMenu, setOpenMenu] = useState(false);
  const userdata = useSelector((state) => state.user.user);
  console.log(userdata);

  return (
    <HeaderBackground>
      <HeaderContent>
        <LeftContainer>
          <ImgContainer>
            <Link to={"/"}>
              <img src={horizontallogo} alt="chiqdparishorizontallogo" />
            </Link>
          </ImgContainer>
          <NavBar>
            <p>Home</p>
            <p>Masculino</p>
            <p>Feminino</p>
            <p>Infantil</p>
          </NavBar>
        </LeftContainer>
        <RightContainer>
          <HamburguerMenu OpenMenu={OpenHamburguerMenu}>
            <MdMenu
              size={25}
              onClick={() => setOpenMenu(!OpenHamburguerMenu)}
            />
          </HamburguerMenu>

          <WideMenu>
            <Register>
              <img
                src="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                alt="userpicture"
              />
              <p>
                Faça <Link to={"/login"}>login</Link> ou <br />{" "}
                <Link to={"/login"}>cadastra-se</Link>
              </p>
            </Register>
            <Link to={userdata.id === null ? "/login" : "/cart"}>
              <MdFavorite size={25} />
            </Link>
            <MdPerson size={25} />
            <ShoppingCart>
              <MdShoppingCart size={25} />
              {userdata.shoppingCart.length > 0 && (
                <div>{userdata.shoppingCart.length}</div>
              )}
            </ShoppingCart>
          </WideMenu>

          <SideMenuComponent
            OpenMenu={OpenHamburguerMenu}
            setOpenMenu={setOpenMenu}
          />
        </RightContainer>
      </HeaderContent>
    </HeaderBackground>
  );
}
