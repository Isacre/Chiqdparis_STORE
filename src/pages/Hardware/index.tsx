import { useEffect } from "react";
import styled from "styled-components";
import { fetchElectronics } from "../../services/chiqAPI";
import { Spin } from "antd";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { getProducts } from "../../store/products";
import { useAppSelector } from "../../store/hooks";

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
  @media (max-width: 390px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Products() {
  const Products = useAppSelector((state) => state.store.Products);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleFetchItems() {
      fetchElectronics().then((res: any) => {
        dispatch(getProducts(res));
      });
    }
    handleFetchItems();
  }, [dispatch]);

  return (
    <Component>
      {Products.length === 1 ? (
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
          {Products.map((Products, index) => (
            <Product Products={Products} index={index} key={Products._id} />
          ))}
        </Content>
      )}
    </Component>
  );
}
