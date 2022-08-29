import logo from "../../assets/images/schoolLogo.png";
import NextBtn from "../../components/buttonComponent/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function IntroduceContainer() {
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
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  @media (max-width: 310px) {
    width: 300px;
    height: 100vh;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #000;
`;

const Content =styled.div`
  margin-left: 10px;
  width: 100%;
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
  font-size: 2em;
  font-weight: 600;
  padding-bottom: 18px;
`;

const SubText = styled.p`
  font-size: 1em;
  font-weight: 400;
`;

const Btn = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
`;

export default IntroduceContainer;
