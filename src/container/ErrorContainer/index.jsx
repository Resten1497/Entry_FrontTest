import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function Error(){
    const navigate = useNavigate();
    const handleLinkOnClick = useCallback(() => navigate("/main"), [navigate]);
    const handleKeyDown = (e) => {
      if (e.keyCode === "13") {
        console.log('enter');
        handleLinkOnClick();
      }
    };
    return(
        <Container onClick={handleLinkOnClick} >
            <div >
                <Text>에러가 발생했습니다.</Text>
                <Text>관리자에게 요청하세요.</Text>
            </div>
            <Btn autoFocus onKeyDown={handleKeyDown}></Btn>
        </Container>
    )
}

export default Error;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: rgba(0, 0, 0, 0.25);
`;

const Btn = styled.button`
  opacity: 0;
`;