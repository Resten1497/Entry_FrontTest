import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import NextBtn from "../../components/buttonComponent/index";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import HeaderComponent from '../../components/headerComponent';
import FooterComponent from '../../components/footerComponent';

function Privacy() {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const ref = useRef();
  const handleLinkOnClick = useCallback(() => {
    if (ref.current.checked) {
      navigate("/regist");
    } else {
      setIsError(true);
    }
  }, [navigate]);
  const handleKeyDown = (e) => {
    if (e.keyCode === "13") {
      handleLinkOnClick();
    }
  };

  return (
    <Container>
      <Main>
        <HeaderComponent/>
        <Content>
          <MainText>개인정보 수집 동의 안내</MainText>
          <SubText>
            본교는 외부인 입실과 관련하여 아래와 같이 개인정보를 수집 및 제
            3자에게 제공하고자 합니다. 내용을 자세히 읽으신후, 동의 여부를
            선택해주세요
          </SubText>
        </Content>
        <TableContent>
          <TableBody>
            <TableTr>
              <TableTh>항목</TableTh>
              <TableTh>수집 이용 목적</TableTh>
              <TableTh>보유기간</TableTh>
            </TableTr>
            <TableTr>
              <TableTd>이름, 소속기관, 전화번호</TableTd>
              <TableTd>외부인에 대한 명단 관리 </TableTd>
              <TableTd>서비스의 사용이 종료될때 까지 보유 </TableTd>
            </TableTr>
          </TableBody>
        </TableContent>
        <OptionalLabel>
          귀하께서는 개인정보 수집에 동의하지 않을 권리가 있습니다. 하지만,
          동의하지 않을 경우 입실이 어려움을 알려드립니다.
        </OptionalLabel>
        <br />
        <OptionalLabel>동의하신 자료는 목적 이외의 용도로는 사용되지 않습니다.</OptionalLabel>
          <PrivacyLabal>
            <CheckBox type="checkbox" autoFocus name="privacyLabal" ref={ref} />
            <PrivacyText>개인정보수집에 동의합니다.</PrivacyText>
          </PrivacyLabal>
          {isError && <ErrorText>필수 항목입니다.</ErrorText>}
        <NextBtn onClick={handleLinkOnClick} onKeyDown={handleKeyDown} />
        <FooterComponent/>
      </Main>
    </Container>
  );
}

export default Privacy;

const TableBody = styled.tbody``;
const TableTr = styled.tr``;
const TableTh = styled.th`
  @media (min-width: 481px) {
    width: 170px;
  }
  background: #9b9b9b;
  padding: 3px;
  width: 120px;
  height: 30px;
  word-break: keep-all;
  font-weight: normal;
  color: white;
  font-family: normal;
`;
const TableTd = styled.td`
  border: 0.5px solid black;
  word-break: keep-all;
  text-align: center;
  padding: 5px;
  font-size: 0.9em;
  width: 120px;
  height: 100px;
  font-family: normal;
`;

const OptionalLabel = styled.p`
  font-size: 0.9em;
  width: 90vw;
  height: 40px;
  text-align: center;
  word-break: keep-all;
  @media (min-width: 481px) {
    width: 70vw;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  @media (min-width: 481px) {
    width: 100vw;
    height: 110vh;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 90vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  justify-content: center;
  @media (min-width: 481px){
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;
const TableContent = styled.div`
  display: flex;
  width: 90vw;
  height: 25vh;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 30px;
`;

const MainText = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
`;

const SubText = styled.p`
  padding: 0 0 20px 0;
  font-size: 0.9em;
  word-break: keep-all;
  @media (min-width: 481px) {
    width: 560px;
    margin: 0 auto;
  }
`;
const ErrorText = styled.p`
  font-size: 0.9em;
  word-break: keep-all;
  color: red;
  text-align: center;
`;
const SubTitle = styled.h2`
  font-size: 1.4em;
  font-weight: 600;
`;

const CheckBox = styled.input`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  background: #ffffff;

  @media (max-width: 300px) {
    width: 20px;
    height: 20px;
  }
`;

const PrivacyLabal = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 300px) {
    width: 200px;
    line-height: 25px;
  }
`;

const PrivacyText = styled.p`
  @media (max-width: 300px) {
      padding-bottom: 10px;
      font-size: 14px;
  }
  padding-bottom: 5px;
  font-style: normal;
  font-weight: 400;
  height: 15px;
  font-size: 15px;
`;
