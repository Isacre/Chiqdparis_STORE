import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const SideMenu = styled.div`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 0;
  background-color: #fff;
  height: 100%;
  transition: all ease-in-out 500ms;
  display: inline;
  width: ${(props) => (props.OpenMenu ? "100%" : "0px")};
  text-align: center;
  overflow: hidden;
`;

const SideMenuItem = styled.div`
  padding-top: 15px;
  :last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }
`;

const SideMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2e48fe;
  color: white;
  padding: 10px 25px;
  margin: auto;

  h1 {
    color: white;
    font-weight: 700;
  }
`;

export default function SideMenuComponent({ OpenMenu, setOpenMenu }) {
  return (
    <SideMenu OpenMenu={OpenMenu}>
      <SideMenuHeader>
        <h1>Faça Login</h1>
        <MdClose size={25} onClick={() => setOpenMenu(false)} />
      </SideMenuHeader>
      <SideMenuItem>
        <p>HOME</p>
      </SideMenuItem>
      <SideMenuItem>
        <p>MASCULINO</p>
      </SideMenuItem>
      <SideMenuItem>
        <p>FEMININO</p>
      </SideMenuItem>
      <SideMenuItem>
        <p>INFANTIL</p>
      </SideMenuItem>
      <SideMenuItem>
        <p>CALÇADOS</p>
      </SideMenuItem>
      <SideMenuItem>
        <p>CARRINHO</p>
      </SideMenuItem>
      <SideMenuItem>
        <p>CALÇADOS</p>
      </SideMenuItem>
    </SideMenu>
  );
}
