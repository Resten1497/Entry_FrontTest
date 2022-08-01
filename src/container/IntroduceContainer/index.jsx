import logo from "../../assets/images/schoolLogo.png";
// import "./IntroduceContainer.css";
import Next from "../../assets/images/NextPage.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import styled from 'styled-components';

function IntroduceContainer() {
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/camera"), [navigate]);
  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      handleLinkOnClick();
    }
  };
  return (
    <Container>
      <div>
        <Logo src={logo} alt="schoolLogo"/>
        <MainText>
          서울디지텍고등학교에<br />오신것을 환영합니다.
        </MainText>
        <SubText>신분확인을 위해 몇가지를 작성해주세요!!</SubText>
      </div>
      <div>
        <Button type="submit" id="NextBtn" autoFocus onClick={handleLinkOnClick} onKeyDown={handleKeyDown}>
        <BtnTitle>다음</BtnTitle>
        <BtnImg src={Next} alt="Next" />
      </Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
    width: 600px;
    height: 100vh;
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

const Button =  styled.button`
  position: relative;
    top: 100px;
    left: 450px;
    border: none;
    width: 153px;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #5686E1;
    border-radius: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    &:button:focus{
      outline: none;
    }
`;

const BtnTitle = styled.span`
    font-style: normal;
    font-weight: 500;
    padding-left: 5px;
`;

const BtnImg = styled.img`
   padding: 0 0 0 5px;
`;

export default IntroduceContainer;
