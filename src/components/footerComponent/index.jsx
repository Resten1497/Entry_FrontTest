import React from "react";
import styled from "styled-components";

function footerComponent() {
  return <Container>Seoul Digitech High School ⓒ</Container>;
}

export default footerComponent;

const Container = styled.div`
  margin-top: 10px;
  width: 100vw;
  height: 50px;
  color: #6d6d6d;
  text-align: center;
  font-size: 9px;
  line-height: 50px;
`;
