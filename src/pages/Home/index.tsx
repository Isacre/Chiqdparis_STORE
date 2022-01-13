import { Carousel } from "antd";
import styled from "styled-components";
import Products from "../../Components/Products";
import photo1 from "../../assets/photos/01.jpg";
import photo2 from "../../assets/photos/02.jpg";
import photo3 from "../../assets/photos/05.jpg";
import photo4 from "../../assets/photos/04.jpg";

const Component = styled.div``;
const CarouselImagesContainer = styled.div`
  img {
    width: 100vw;
    object-fit: cover;
    height: 65vh;
    object-position: center;
    @media (max-width: 1000px) {
      height: 50vh;
    }
    @media (max-width: 700px) {
      height: 30vh;
    }
  }
`;
const NewProducts = styled.h1`
  margin: auto;
  width: 74%;
  padding-top: 1rem;

  @media (max-width: 1015px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export default function Homepage() {
  return (
    <Component>
      <Carousel autoplay>
        <CarouselImagesContainer>
          <img style={{ objectPosition: "top" }} src={photo1} alt="img1" />
        </CarouselImagesContainer>
        <CarouselImagesContainer>
          <img src={photo2} alt="img2" />
        </CarouselImagesContainer>
        <CarouselImagesContainer>
          <img src={photo3} alt="img3" />
        </CarouselImagesContainer>
        <CarouselImagesContainer>
          <img src={photo4} alt="img4" />
        </CarouselImagesContainer>
      </Carousel>
      <NewProducts>LANÇAMENTOS</NewProducts>
      <Products />
    </Component>
  );
}
