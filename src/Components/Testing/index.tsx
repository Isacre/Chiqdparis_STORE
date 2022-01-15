import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchQuery } from "../../services/chiqAPI";
import { Spin } from "antd";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { getProducts, refreshProducts } from "../../store/products";
import { useAppSelector } from "../../store/hooks";
import { useParams } from "react-router";

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

const LoadMoreButton = styled.div`
  width: 30%;
  margin-bottom: 10px;
  margin: auto;

  button {
    margin: auto;
    width: 100%;
    margin-bottom: 30px;
    color: white;
    background-color: #4b5776;
    border: none;
    padding: 15px 25px;
    border-radius: 5px;
  }
`;

interface FetchResponse {
  title?: String;
  price?: String;
  image?: String;
  rating?: {
    rate?: Number;
    count?: Number;
  };
  description?: String;
  categories?: Array<String>;
  quantity?: Number;
  _id?: String;
}

export default function Testing() {
  const [LoadProducts, setLoadProducts] = useState(8);
  const Products = useAppSelector((state) => state.store.Products).slice(
    0,
    LoadProducts
  );
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    function handleFetchItems() {
      dispatch(refreshProducts);
      fetchQuery(category!).then((res: FetchResponse) => {
        dispatch(getProducts(res));
      });
    }
    handleFetchItems();
  }, [dispatch, category]);

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
      {LoadProducts <= Products.length && (
        <LoadMoreButton onMouseEnter={() => setLoadProducts(LoadProducts + 8)}>
          <button>Carregar mais produtos</button>
        </LoadMoreButton>
      )}
    </Component>
  );
}
