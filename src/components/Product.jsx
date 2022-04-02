import { Link } from "react-router-dom";
import styled from "styled-components";
import AddtoBag from '../assets/AddToBag.svg'
import Slide from 'react-reveal/Slide';

const Product = ({data, addtobag}) => {

  const bagElements = JSON.parse(localStorage.getItem("bag"))?.map(({id}) => id)

  return (

    
    <Wrapper type={data.type}>
      <Slide bottom cascade>
      <Link to={`/disscription/${data.id}`}>
        <div className="product__imgage-container">
          <img className="product__image" src={`http://142.93.229.148/${data.image}`} alt="" />
        </div>
      </Link>
      <div className="product__info-container">
        <span className="product__info__title">{data.title}</span>
        <span className="product__info__model">{data.model}</span>
        <span className="product__info__price">$ {data.price}</span>

        <img 
          onClick={() => addtobag(data)} 
          className="product__info__atb" 
          src={AddtoBag} 
          alt="" 
          style={{display: bagElements?.includes(data.id) ? "none" : "innline-block"}}
        />
      </div>
      </Slide>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  padding: 16px;
  grid-column: span ${({type}) => type === "laptop" ? "2" : "1"};

  .product__imgage-container {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 22px;
    padding: inherit;
    height: 232px;

    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
  .product__info-container {
    padding: 8px; 
    margin-top: 8px;
    position: relative;
    * {
       display: block;
    }
}

  .product__info__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #1a1f16;
  }

  .product__info__model {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #60695c;
    margin: 8px 0;
  }

  .product__info__price {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #1a1f16;
  }

  .product__info__atb{
    position: absolute;
    right: 8px;
    bottom: 8px;
  }
`;
