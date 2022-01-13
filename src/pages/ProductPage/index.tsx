import { useEffect, useState } from "react";
import { fetchSingleProduct } from "../../services/chiqAPI";
import styled from "styled-components";
import { useParams } from "react-router";
import { Rate, Spin } from "antd";
import { MdFavorite, MdFavoriteBorder, MdDescription } from "react-icons/md";
import "antd/dist/antd.min.css";
import { useAppSelector } from "../../store/hooks";

const Component = styled.div`
  padding-top: 15px;
`;
// PRODUCT MAIN CONTAINER (PRICE, IMAGE)
const MainContainer = styled.div`
  width: 70%;
  background: white;
  border-radius: 5px;
  margin: auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;
const LeftContainer = styled.div`
  width: 50%;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  img {
    min-height: 300px;
    max-height: 370px;
    max-width: 300px;
    padding: 10px;
    object-fit: scale-down;
  }
`;
const RightContainer = styled.div`
  width: 50%;
`;
const ProductTitle = styled.h1`
  line-height: 35px;
`;

const ProductRatings = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  background-color: ${(props) => (props.disabled ? "grey" : "#002290d1")};
  border: none;
  padding: 5px 15px;
  border-radius: 5px 0px 0px 5px;
  width: 100%;
  height: 100%;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  :hover {
    filter: saturate(200%);
  }
`;

const FavoriteButton = styled.button`
  background-color: ${(props) => (props.disabled ? "grey" : "#002290d1")};
  border: none;
  padding: 5px 15px;
  border-radius: 0px 5px 5px 0px;
  width: 100%;
  height: 100%;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    filter: saturate(200%);
  }
`;

const ProductPrice = styled.div`
  h1 {
    font-size: 3rem;
    line-height: 25px;
    color: #2e49a4;
  }
  .instock {
    color: green;
  }
  .notinstock {
    color: red;
  }

  b {
    color: #2e49a4;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-gap: 2px;
`;

const ItemDescription = styled.div`
  width: 70%;
  background: white;
  border-radius: 5px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;

  h1 {
    font-weight: 700;
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }

  p {
    padding: 5px;
    font-size: 1rem;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export default function ProductPage() {
  const { id } = useParams();
  const [Product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
    description: "",
    categories: [],
    quantity: 0,
    _id: "",
  });
  const calcdiscount = (Product.price * 15) / 100;
  const finalPrice = (Product.price - calcdiscount).toFixed(2);
  const data = useAppSelector((state) => state.user.Userinfo);

  useEffect(() => {
    function getProduct() {
      fetchSingleProduct(id!)
        .then((product) => {
          setProduct(product);
        })
        .catch((err) => {
          window.alert(err);
        });
    }
    getProduct();
  }, [id]);

  return (
    <Component>
      {Product._id === "" ? (
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
        <>
          <MainContainer>
            <LeftContainer>
              <ImageContainer>
                <img src={Product.image} alt={Product.title} />
              </ImageContainer>
            </LeftContainer>
            <RightContainer>
              <ProductTitle>{Product.title}</ProductTitle>
              <ProductRatings>
                <Rate defaultValue={Product.rating.rate} allowHalf disabled />(
                {Product.rating.count})
              </ProductRatings>
              <ProductPrice>
                <p>
                  Vendido e entregue por <b>ChiqD'Paris</b> |
                  <b
                    className={Product.quantity > 0 ? "instock" : "notinstock"}
                  >
                    {Product.quantity > 0 ? " Em estoque" : " Esgotado"}
                  </b>
                </p>
                <div style={{ display: "flex", gap: 5 }}>
                  <p>De:</p>
                  <p style={{ textDecoration: "line-through" }}>
                    R${Product.price}
                  </p>
                </div>
                <h1>R${finalPrice}</h1>
                <p>
                  À vista no PIX com até <b>15% OFF</b>
                </p>
                <b>R${Product.price}</b>
                <p>
                  Em até <b>12x</b> de{" "}
                  <b>R${(Product.price / 12).toFixed(2)}</b> sem juros no cartão
                </p>
                <p>
                  Ou em 1x no cartão com até <b>10% OFF</b>
                </p>
                <Buttons>
                  <BuyButton disabled={Product.quantity === 0 ? true : false}>
                    Comprar
                  </BuyButton>{" "}
                  <FavoriteButton>
                    {data.favourites.indexOf(Product._id) ? (
                      <MdFavoriteBorder size={20} />
                    ) : (
                      <MdFavorite size={20} />
                    )}
                  </FavoriteButton>
                </Buttons>
              </ProductPrice>
            </RightContainer>
          </MainContainer>
          <ItemDescription>
            <h1>
              <MdDescription
                size={35}
                color={"#2E49A4"}
                style={{ marginTop: "1px" }}
              />
              SOBRE O PRODUTO
            </h1>
            <p>{Product.description}</p>
          </ItemDescription>
        </>
      )}
    </Component>
  );
}
