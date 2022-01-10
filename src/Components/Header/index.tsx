import styled from "styled-components";
import { useState } from "react";
import horizontallogo from "../../assets/photos/defaultlogo.svg";
import { MdFavorite, MdShoppingCart, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
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
import { useDispatch } from "react-redux";
import { Logout, SaveUser } from "../../store/user";
import { useEffect } from "react";

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
  const dispatch = useDispatch();
  const [SideMenuOpen, setSideMenuOpen] = useState(false);
  const userdata = useAppSelector((state) => state.user.Userinfo);
  const localData = localStorage.getItem("user");
  const local = JSON.parse(localData!);
  console.log(userdata);

  useEffect(() => {
    dispatch(SaveUser(local));
    localStorage.setItem("user", JSON.stringify(userdata));
  }, [dispatch, local, userdata]);
  function handleLogout() {
    dispatch(Logout());
  }

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
          <HamburguerMenu>
            <MdMenu size={25} onClick={() => setSideMenuOpen(!SideMenuOpen)} />
          </HamburguerMenu>

          <WideMenu>
            <Register>
              <img
                src="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                alt="userpicture"
              />
              {userdata._id === undefined ? (
                <p>
                  Faça <Link to={"/login"}>login</Link> ou <br />{" "}
                  <Link to={"/login"}>cadastra-se</Link>
                </p>
              ) : (
                <LoggedUserArea>
                  <b>Bem vindo, {userdata?.firstname}</b>
                  <div>
                    <Link to={"/conta"}>
                      {" "}
                      <span>MINHA CONTA</span>{" "}
                    </Link>
                    <span onClick={handleLogout}>SAIR</span>
                  </div>
                </LoggedUserArea>
              )}
            </Register>
            <Link to={userdata._id === undefined ? "/login" : "/favoritos"}>
              <MdFavorite size={25} color="black" />
            </Link>
            <Link to="/carrinho">
              <ShoppingCart>
                <MdShoppingCart size={25} color="black" />
              </ShoppingCart>
            </Link>
          </WideMenu>
        </RightContainer>
      </HeaderContent>
    </HeaderBackground>
  );
}
