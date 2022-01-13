import styled from "styled-components";
import { Rate } from "antd";
import { MdShoppingCart } from "react-icons/md";

import "antd/dist/antd.min.css";

import { Link } from "react-router-dom";

const Container = styled.div`
  margin: auto;
  margin-bottom: 5vh;
  width: calc(65vw / 4);
  height: 48vh;
  padding: 2%;
  border-radius: 5px;
  background-color: white;
  box-sizing: content-box;

  cursor: pointer;

  @media (max-width: 1015px) {
    width: calc(75vw / 3);
  }

  @media (max-width: 700px) {
    width: calc(85vw / 2);
    height: 58vh;
  }

  @media (max-width: 390px) {
    width: 65vw;
  }
`;

const ImageContainer = styled.div`
  padding: 25px;
  max-width: 80%;
  height: 50%;
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    height: 45%;
  }
`;

const ProductImage = styled.img`
  max-width: 70%;
  object-fit: cover;
`;
const ProductName = styled.div`
  text-align: center;
  margin: auto;
  width: 80%;
  height: 10%;
  margin-bottom: 10px;
`;
export const BuyButton = styled.div`
  text-align: center;
  min-height: 10%;
  width: 80%;
  margin: auto;

  button {
    background-color: #002290d1;

    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    color: #fff;
    cursor: pointer;
    font-weight: 700;

    :hover {
      filter: saturate(200%);
    }
  }
`;

const ProductRatings = styled.div`
  width: 80%;
  margin: auto;
`;
const ProductPrice = styled.div`
  width: 80%;
  margin: auto;
  color: #e62837;
  font-size: 1.5rem;
`;

const CustomP = styled.p`
  width: 80%;
  margin: auto;
  margin-bottom: 5px;
  color: rgba(0, 0, 0, 0.7);
`;

export interface ProductsType {
  title: String;
  price: String;
  image: String;
  rating: {
    rate: number;
    count: number;
  };
  description: String;
  categories: Array<String>;
  quantity: Number;
  _id: String;
}

export default function ProdutoComponent(props: any) {
  const Products: ProductsType = props.Products;
  const ProductNames = Products.title;
  const urlName = ProductNames.toLowerCase().replace(/\s+/g, "-");
  function FilterTitles(data: String) {
    const filtereddata = data.slice(0, 30);
    const newtitle = filtereddata + "...";
    if (data.length > 30) return newtitle;
    if (data.length < 30) return filtereddata;
  }

  return (
    <>
      <Container>
        <Link to={`/produto/${Products._id}/${urlName}`}>
          <ImageContainer>
            <ProductImage src={`${Products.image}`} />
          </ImageContainer>
          <ProductName>{FilterTitles(Products.title)}</ProductName>
          <ProductRatings>
            <Rate disabled defaultValue={Products.rating.rate} allowHalf />
            <span>({Products.rating.count})</span>
          </ProductRatings>

          <ProductPrice>R${Products.price}</ProductPrice>
          <CustomP>À vista no PIX </CustomP>
        </Link>
        <BuyButton>
          <button disabled={Products.quantity <= 0 ? true : false}>
            <MdShoppingCart
              size={20}
              style={{
                textAlign: "center",
                verticalAlign: "sub",
              }}
            />
            {Products.quantity > 0 ? "Comprar" : "Esgotado"}
          </button>
        </BuyButton>
      </Container>
    </>
  );
}
