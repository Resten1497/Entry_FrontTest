import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import ReturnBtn from '../../components/ReturnComponent';
// 토큰
// 토큰
// 토큰
// 토큰
// 토큰
// 토큰
// 토큰
// 토큰


function CardInquiryContainer(){
    const navigate = useNavigate();
    const handleLinkOnClick = useCallback(() => navigate("/inquiry"), [navigate]);
    return(
        <Container>
            <Content>
                <Header>
                    <Card>월간 조회</Card>
                    <NextBtn onClick={handleLinkOnClick}>카드 조회</NextBtn>
                </Header>
                <Table>
                    <Thead>
                        <Tr>
                            <Number>번호</Number>
                            <Id>카드ID</Id>
                            <Wearing>착용여부</Wearing>
                            <Lost>분실여부</Lost>
                            <Final>최종착용날짜</Final>
                            <Return>반납여부</Return>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Number>1</Number>
                            <Id>sdhs001</Id>
                            <Wearing>-</Wearing>
                            <Lost>o</Lost>
                            <Final>2022-08-06</Final> 
                            <Return><ReturnBtn/></Return>
                        </Tr>
                        <Tr>
                            <Number>2</Number>
                            <Id>sdhs002</Id>
                            <Wearing>o</Wearing>
                            <Lost>-</Lost>
                            <Final>2022-08-06</Final> 
                            <Return>-</Return>
                        </Tr>
                        <Tr>
                            <Number>3</Number>
                            <Id>sdhs003</Id>
                            <Wearing>-</Wearing>
                            <Lost>o</Lost>
                            <Final>2022-08-06</Final> 
                            <Return>-</Return>
                        </Tr>
                    </Tbody>
                </Table>
            </Content>
        </Container>
    )
}

export default CardInquiryContainer;

const Container = styled.div`
    width: 1400px;
    height: 100vh;
    margin: 0 auto;
    position: relative;
`;

const Content = styled.div`
    width: 100%;
    position: absolute;
    top: 50px;
`;

const Header = styled.div`
    margin-bottom: 50px;
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
`;

const Card = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
    line-height: 60px;
    color: #000000;
`;

const NextBtn = styled.button`
  margin-left: 20px;
  width: 200px;
  height: 70px;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  color: #FFFFFF;
  background: #389DF9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  border: none;
`;

const Table = styled.table`
  width: 1400px;
  height: 60px;
  border-collapse: collapse;
`;

const Thead = styled.thead`
    width: 100%;
    height: 60px;
    background: #F3F3F3;
    border-radius: 3px;
`;

const Tbody = styled.thead`
    width: 100%;
    height: 60px;
`;

const Tr = styled.tr`
    width: 100%;
    height: 60px;
`;

const Number = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
`;

const Id = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
`;

const Wearing = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
`;

const Lost = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
`;

const Final = styled.td`
    width: 250px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
`;

const Return = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
`;