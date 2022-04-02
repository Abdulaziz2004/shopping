import styled from "styled-components";
import watch from "../assets/watch2.png";
import Flip from 'react-reveal/Flip';

const Bag = () => {
  const bagElements = JSON.parse(localStorage.getItem("bag"));
  return (
    <Wrapper>
      <Flip top>
      <h1>Check your Bag Items</h1>
      {bagElements.map((bagElements) => (
        <div className="bag__items__container">
          <div className="bag__items__img">
            <img src={`http://142.93.229.148/${bagElements.image}`} alt="" />
          </div>
          <div className="bag__items__info">
            <div className="bag__items__info__title">{bagElements.title}</div>
            <div className="bag__items__info__model">{bagElements.model}</div>
            <div className="bag__items__info__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
              nobis alias quis illo iste.
            </div>
            <div className="bag__items__info__stars">{bagElements.stars}</div>
            <div className="bag__items__info__price">$ {bagElements.price}</div>
          </div>
        </div>
      ))}
      </Flip>
    </Wrapper>
  );
};

export default Bag;

const Wrapper = styled.div`
  padding: 15px 18px 0 52px;
  overflow-y: auto;

  h1 {
    font-weight: 400;
    font-size: 48.83px;
    line-height: 59px;
    color: #1a1f16;
    margin-bottom: 34px;
  }

  .bag__items__container {
    background-color: white;
    display: flex;
    align-items: center;
    gap: 32px;
    border-radius: 21px;
    padding: 24px 24px 24px 24px;
    margin: 24px 0;

    .bag__items__img {
      width: 203px;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .bag__items__info__title {
      font-style: normal;
      font-weight: 400;
      font-size: 31.25px;
      line-height: 38px;
      color: #1a1f16;
      margin-bottom: 8px;
    }

    .bag__items__info__model {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #60695c;
      margin-bottom: 16px;
    }

    .bag__items__info__description {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.02em;
      color: #1a1f16;
      margin-bottom: 25px;
    }

    .bag__items__info__price {
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #1a1f16;
      margin-top: 38px;
    }
  }
`;
