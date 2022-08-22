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
      <Content>
        <div>
          <Logo src={logo} alt="schoolLogo" />
          <MainText>
            서울디지텍고등학교에
            <br />
            오신것을 환영합니다.
          </MainText>
          <SubText>신분확인을 위해 몇가지를 작성해주세요!!</SubText>
        </div>
        <Btn>
          <NextBtn onClick={handleLinkOnClick} onKeyDown={handleKeyDown} />
        </Btn>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  height: 100vh;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.img`
  width: 131px;
  margin-bottom: 32px;
`;

const MainText = styled.h1`
  font-size: 3em;
  font-weight: 600;
  padding-bottom: 18px;
`;

const SubText = styled.p`
  font-size: 1.4em;
  font-weight: 400;
`;

const Btn = styled.div`
  margin: 50px 0 50px 0;
  position: relative;
  left: 125px;
`;

export default IntroduceContainer;
