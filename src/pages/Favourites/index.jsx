import React from "react";
import styled from "styled-components";
import { MdShoppingBag } from "react-icons/md";
import { useSelector } from "react-redux";
import Favourite from "./Favourite";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fafafb;
  height: 100vh;
`;

const EmptyCart = styled.div`
  position: relative;
  text-align: center;
  top: 15%;
  font-size: 1.2rem;

  button {
    margin-top: 30px;
    background-color: #002290d1;
    border: none;
    padding: 15px 25px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: 700;

    :hover {
      filter: saturate(200%);
    }
  }
`;

export default function CartComponent() {
  const data = useSelector((state) => state.user.user);
  console.log(data);
  return (
    <Component>
      {data.favourites.length === 0 ? (
        <EmptyCart>
          <b>Você ainda não tem nenhum item favorito,</b>{" "}
          <p>verifique nossas ofertas </p>
          <button>VOLTAR PARA A HOME</button>
        </EmptyCart>
      ) : (
        <>
          {data.favourites.map((favorito) => (
            <Favourite favouriteItem={favorito} />
          ))}
        </>
      )}
    </Component>
  );
}
