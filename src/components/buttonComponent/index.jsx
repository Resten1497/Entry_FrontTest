import React from "react";
import styled from "styled-components";
import Next from "../../assets/images/NextPage.svg";

function Button(props) {
  return (
    <NextBtn
      type="submit"
      autoFocus
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
    >
      <Title>다음</Title>
    </NextBtn>
  );
}

const NextBtn = styled.button`
  margin-top: 20px;
  margin-right: 10px;
  border: none;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #5686e1;
  border-radius: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  &:focus {
    outline: none;
  }
  @media (max-width: 300px) {
    width: 100px;
  }
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  padding-left: 5px;
  @media (max-width: 300px) {
    font-size: 20px;
  }
`;

const Img = styled.img`
  width: 40px;
  padding: 0 0 0 5px;
  @media (max-width: 300px) {
    width: 30px;
  }
`;

export default Button;
