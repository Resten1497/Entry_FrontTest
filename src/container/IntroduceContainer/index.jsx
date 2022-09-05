import logo from "../../assets/images/schoolLogo.png";
import NextBtn from "../../components/buttonComponent/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";

function IntroduceContainer() {
  useEffect(() => {
    document.body.style.zoom = "100%";
  });
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/regist"), [navigate]);
  const handleKeyDown = (e) => {
    if (e.keyCode === "13") {
      handleLinkOnClick();
    }
  };
  return (
    <Container>
      <Main>
        <Content>
          <Logo src={logo} alt="schoolLogo" />
          <MainText>
            서울디지텍고등학교에
            <br />
            오신것을 환영합니다.
          </MainText>
          <SubText>신분확인을 위해 몇가지를 작성해주세요!!</SubText>
        </Content>
        <Btn>
          <NextBtn onClick={handleLinkOnClick} onKeyDown={handleKeyDown} />
        </Btn>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  @media (max-width: 310px) {
    width: 300px;
    height: 150vh;
  }
`;

const Main = styled.div`
  width: 500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Content = styled.div`
  // width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 32px;
`;

const MainText = styled.h1`
  font-size: 2.5em;
  font-weight: 600;
  padding-bottom: 18px;
`;

const SubText = styled.p`
  font-size: 1.2em;
  font-weight: 400;
`;

const Btn = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-end;
`;

export default IntroduceContainer;
