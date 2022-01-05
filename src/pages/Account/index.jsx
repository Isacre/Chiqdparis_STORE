import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BsFillGearFill } from "react-icons/bs";

const Component = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: #fafafb;
`;
const Content = styled.div`
  width: 70vw;
  margin: auto;
`;
const FirstRow = styled.div`
  display: flex;
  padding: 3vh;
  justify-content: space-between;
`;
const Profile = styled.div`
  display: flex;
  padding: 20px;
  font-weight: 700;
  gap: 20px;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  width: 48%;
  justify-content: space-between;

  img {
    max-width: 80px;
    margin-bottom: 10px;
    border-radius: 55px;
  }
  p {
    line-height: 5px;
    font-size: 1.5rem;
  }
`;
const Credits = styled.div`
  background: #fff;
  width: 48%;
  padding: 20px;
  border-radius: 5px;
  color: rgba(104, 104, 104, 0.5);
  h1 {
    color: #ff66c4;
    font-size: 2rem;
  }
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LastPurchase = styled.div``;

export default function MyAccount() {
  const data = useSelector((state) => state.user.user);

  return (
    <Component>
      <Content>
        <FirstRow>
          <Profile>
            <UserInfo>
              <img
                src="https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
                alt="userpicture"
              />
              <div>
                <p>Bem vindo,</p>
                <p>
                  {data.firstname} {data.lastname}
                </p>
              </div>
            </UserInfo>
            <BsFillGearFill size={25} cursor={"pointer"} />
          </Profile>

          <Credits>
            <span>Crédito disponível</span>
            <h1>R$ 0,00</h1>
          </Credits>
        </FirstRow>
      </Content>
    </Component>
  );
}
