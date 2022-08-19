import "./App.css";
import styled from "styled-components";
import cardImageDk from "./images/image-product-desktop.jpg";
import cardImageMb from "./images/image-product-mobile.jpg";
import cartLogo from "./images/icon-cart.svg";
import { useViewport } from "use-viewport";

const Card = styled.div`
  max-width: 600px;
  width: 100%;
  @media (max-width: 768px) {
    max-width: 350px;
  }
`;
const CardContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CardImage = styled.img`
  max-width: 50%;
  object-fit: cover;
  border-radius: 15px 0 0 15px;
  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: 15px 15px 0 0;
  }
`;
const CardInfo = styled.div`
  padding: 1rem;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: hsl(0, 0%, 100%);
  border-radius: 0 12px 12px 0;
  @media (max-width: 768px) {
    border-radius: 0 0 15px 15px;
    max-width: 100%;
  }
`;
const CardTag = styled.p`
  color: hsl(228, 12%, 48%);
  text-transform: uppercase;
`;
const CardTitle = styled.h1`
  color: hsl(212, 21%, 14%);
  font-family: "Fraunces", serif;
`;
const CardDescription = styled.p`
  color: hsl(228, 12%, 48%);
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NewPrice = styled.h1`
  color: hsl(158, 36%, 37%);
  font-family: "Fraunces", serif;
`;
const OldPrice = styled.p`
  font-weight: 500;
  text-decoration: line-through;
`;
const CardButton = styled.button`
  cursor: pointer;
  font-family: inherit;
  background: hsl(158, 36%, 37%);
  border: none;
  border-radius: 5px;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  img {
    margin-right: 0.5rem;
  }
`;

function App() {
  const { below } = useViewport();

  return (
    <div className="App">
      <Card>
        <CardContainer>
          <CardImage src={below("medium") ? cardImageMb : cardImageDk} />
          <CardInfo>
            <CardTag>perfume</CardTag>
            <CardTitle>
              Gabrielle <br /> Essence Eau De Parfum
            </CardTitle>
            <CardDescription>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </CardDescription>
            <Price>
              <NewPrice>$149.99</NewPrice>
              <OldPrice>$169.99</OldPrice>
            </Price>
            <CardButton>
              <img src={cartLogo} alt="cart-logo" />
              Add to Cart
            </CardButton>
          </CardInfo>
        </CardContainer>
      </Card>
    </div>
  );
}

export default App;
