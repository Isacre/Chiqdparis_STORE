import styled from "styled-components";
/* 
import { useAppSelector } from "../../store/hooks"; */

const Component = styled.div`
  display: flex;
  flex-direction: column;
`;

/* const EmptyCart = styled.div`
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
 */
export default function CartComponent() {
  /*   const data = useAppSelector((state) => state.user.Userinfo); */

  return (
    <Component>
      {/*   {data.shoppingCart.length === 0 ? (
        <EmptyCart>
          <b>O seu carrinho está vazio,</b>{" "}
          <p>deseja olhar outros items similares?</p>
          <button>
            <MdShoppingBag size={25} />
            CONTINUAR COMPRANDO
          </button>
        </EmptyCart>
      ) : (
        <>
          {data.shoppingCart.map((Item) => (
            <CartItem Item={Item} />
          ))}
        </>
      )} */}
    </Component>
  );
}
