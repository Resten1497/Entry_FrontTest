import logo from "../../assets/images/schoolLogo.png";
import NextBtn from "../../components/buttonComponent/index";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function IntroduceContainer() {
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/camera"), [navigate]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLinkOnClick();
    }
  };
  return (
    <Container>
      <div>
        <Logo src={logo} alt="schoolLogo" />
        <MainText>
          서울디지텍고등학교에
          <br />
          오신것을 환영합니다.
        </MainText>
        <SubText>신분확인을 위해 몇가지를 작성해주세요!!</SubText>
      </div>
      <div>
        <NextBtn onClick={handleLinkOnClick} onKeyDown={handleKeyDown} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Logo = styled.img`
  width: 131px;
  margin-bottom: 32px;
`;

const MainText = styled.p`
  font-size: 58px;
  font-weight: 600;
  padding-bottom: 18px;
`;

const SubText = styled.p`
  font-size: 28px;
  font-weight: 400;
`;

export default IntroduceContainer;
