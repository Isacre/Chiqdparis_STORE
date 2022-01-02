import React, { useState } from "react";
import {
  HeaderBackground,
  HeaderContent,
  LeftContainer,
  NavBar,
  ImgContainer,
  RightContainer,
  WideMenu,
  ShoppingCart,
  HamburguerMenu,
  Register,
} from "./styles";
import horizontallogo from "../../assets/photos/defaultlogo.svg";
import { MdFavorite, MdShoppingCart, MdPerson, MdMenu } from "react-icons/md";
import SideMenuComponent from "./SideMenu";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoggedUserArea = styled.div`
  div {
    display: flex;
    gap: 10px;
  }

  b {
    font-size: 1rem;
  }

  span {
    font-size: 0.8rem;
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
              {userdata.id === null ? (
                <p>
                  Faça <Link to={"/login"}>login</Link> ou <br />{" "}
                  <Link to={"/login"}>cadastra-se</Link>
                </p>
              ) : (
                <LoggedUserArea>
                  <b>Bem vindo {userdata.username}</b>
                  <div>
                    <span>MINHA CONTA</span>
                    <span>SAIR</span>
                  </div>
                </LoggedUserArea>
              )}
            </Register>
            <Link to={userdata.id === null ? "/login" : "/carrinho"}>
              <MdFavorite size={25} color="black" />
            </Link>

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
