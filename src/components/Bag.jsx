import React from "react";
import styled from "styled-components";
import Slide from 'react-reveal/Slide';

const Bag = ({ elements }) => {
  return (
    <Wrapper>
      <Slide top>
      <h2>Bag</h2>
      {elements?.map(({ image }) => {
        return (
          <Bagitem>
            <img src={`http://142.93.229.148/${image}`} alt="" />
          </Bagitem>
        );
      })}
      </Slide>
    </Wrapper>
  );
};

export default Bag;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: 80px;
  gap: 16px;
  position: relative;
  padding-top: 110px;

  h2 {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50px);
  }
`;
const Bagitem = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 80px;
  height: 80px;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
