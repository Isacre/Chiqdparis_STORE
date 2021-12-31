import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GetProducts } from "../../services/dummyApi";
import { Spin } from "antd";
import ProdutoComponent from "./Produto";

const Background = styled.div`
  width: 100%;
  background-color: #fafafb;
`;
const Component = styled.div`
  margin: auto;
  width: 75%;

  @media (max-width: 1015px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding-top: 20px;

  @media (max-width: 1015px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 374px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Products() {
  const [Products, setProducts] = useState([]);

  function handleFetchItems() {
    GetProducts().then((res) => {
      setProducts(res);
    });
  }

  useEffect(() => {
    handleFetchItems();
  }, []);

  return (
    <Background>
      <Component>
        {Products.length === 0 ? (
          <Spin
            style={{
              position: "absolute",
              top: "50%",
              bottom: "50%",
              left: "0",
              right: "0",
            }}
          />
        ) : (
          <Content>
            {Products.map((produto, index) => (
              <ProdutoComponent
                produto={produto}
                index={index}
                key={produto.id}
              />
            ))}
          </Content>
        )}
      </Component>
    </Background>
  );
}
