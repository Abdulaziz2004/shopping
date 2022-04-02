import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import corzinka from "../assets/add-to-bag.svg";
import Reveal from 'react-reveal/Reveal';
import Slide from 'react-reveal/Slide';

const Discription = () => {
  const { id } = useParams();
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    axios.get(`http://142.93.229.148/products/${id}`)
      .then((res) => setProductId(res.data));
  }, []);

  return (
    <Wrapper>
      <Reveal top cascade>
      <Link to="/">&#10094; Back</Link>

      <div className="watch-grid">
        <div className="watch-flex">
          <div>
            <div className="watch-column">
              <img src={`http://142.93.229.148/${productId.image}`} alt="" />
            </div>
            <div className="watch-column">
              <img src={`http://142.93.229.148/${productId.image}`} alt="" />
            </div>
            <div className="watch-column">
              <img src={`http://142.93.229.148/${productId.image}`} alt="" />
            </div>
          </div>

          <div className="big-watch">
            <img src={`http://142.93.229.148/${productId.image}`} alt="" />
          </div>
        </div>

        <div className="watch-info">
          <div className="watch__title">{productId.title}</div>
          <div className="watch__model">{productId.model}</div>
          <div className="watch__stars">{productId.stars} / 5</div>
          <div className="watch__price">$ {productId.price}</div>
          <div className="watch__desscription">{productId.description}</div>

          <button>
            <img src={corzinka} alt="" /> Add to Bag
          </button>
        </div>
      </div>
      </Reveal>
    </Wrapper>
  );
};

export default Discription;

const Wrapper = styled.div`
  padding: 30px 60px 0 36px;
  overflow-y: auto;

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #1a1f16;
  }
  .watch-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 32px;

    .watch-flex {
      display: flex;
      gap: 16px;

      .big-watch {
        background-color: white;
        padding: 8px;
        border-radius: 13px;
        width: 258px;
        height: 318px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      .watch-column {
        background-color: white;
        width: 49px;
        height: 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 13px;
        margin: 0 0 16px 0;
        padding: 8px;

        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }

    .watch-info {
      .watch__title {
        font-weight: 700;
        font-size: 61.04px;
        line-height: 74px;
        color: #1a1f16;
        margin-bottom: 8px;
      }

      .watch__model {
        font-weight: 500;
        font-size: 31.25px;
        line-height: 38px;
        color: rgba(26, 31, 22, 0.5);
        margin-bottom: 25px;
      }

      .watch__stars {
        font-size: 25px;
        color: red;
      }

      .watch__price {
        font-weight: 500;
        font-size: 31.25px;
        line-height: 38px;
        color: #1a1f16;
        margin-bottom: 8px;
      }
      .watch__desscription {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #1a1f16;
      }

      button {
        width: 174px;
        height: 40px;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-radius: 14px;
        background-color: #1a1f16;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
        margin-top: 16px;
        margin-left: auto;
        cursor: pointer;
      }
    }
  }
`;
