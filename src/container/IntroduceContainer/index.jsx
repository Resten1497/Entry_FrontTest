import logo from "../../assets/images/schoolLogo.png";
import NextBtn from "../../components/buttonComponent/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function IntroduceContainer() {
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/privacy"), [navigate]);
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
          <SubText>방문 등록을 위해 다음을 입력해주세요!!</SubText>
        </Content>
        <Link>
          <NextBtn onClick={handleLinkOnClick} onKeyDown={handleKeyDown} />
          <GoAdmin href="https://entry-list-pront.vercel.app/">관리자페이지</GoAdmin>
        </Link>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 310px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 32px;
  @media (max-width: 300px) {
    width: 80px;
  }
`;

const MainText = styled.h1`
  font-size: 2.3em;
  font-weight: 600;
  padding-bottom: 18px;
  @media (max-width: 300px) {
    font-size: 1.5em;
  }
`;

const SubText = styled.p`
  font-size: 1.2em;
  font-weight: 400;
  @media (max-width: 300px) {
    font-size: 0.9em;
  }
`;

const Link = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`

const GoAdmin = styled.a`
  padding: 5px;
  font-size: 14px;
  color: #8f8f8f;
  text-decoration: none;
`

const Btn = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 300px) {
    width: 250px;
  }
`;

export default IntroduceContainer;
