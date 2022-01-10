import styled from "styled-components";
import { MdInventory } from "react-icons/md";
import { useAppSelector } from "../../store/hooks";
const Component = styled.div`
  background-color: #f2f3f4;
  width: 100%;
  height: 86vh;
  padding-top: 15px;
`;

const Content = styled.div`
  background-color: #fff;
  margin: auto;
  border-radius: 5px;
  width: 70%;
`;

const Header = styled.div`
  padding: 10px 30px;
  h1 {
    display: flex;
    align-items: center;
    font-weight: 700;
    gap: 5px;
    width: fit-content;
  }
`;

const Orders = styled.div``;

export default function Profile() {
  const data = useAppSelector((state) => state.user.Userinfo);
  return (
    <Component>
      <Content>
        <Header>
          <h1>
            <MdInventory size={40} />
            SEUS PEDIDOS
          </h1>
        </Header>
        <Orders></Orders>
      </Content>
    </Component>
  );
}
