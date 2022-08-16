import Animation from "../../components/animation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function ExitCompleteContainer() {

  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/main"), [navigate]);
  const handleKeyDown = (e) => {
    if (e.keyCode === "13") {
      console.log('enter');
      handleLinkOnClick();
    }
  };

  return (
    <Container onClick={handleLinkOnClick} >
      <Animation />
      <Title>
        퇴실 절차가 완료되었습니다!
        <br />
        안녕히가세요 !
      </Title>
      <Btn autoFocus onKeyDown={handleKeyDown}></Btn>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  color: #52525c;
`;

const Btn = styled.button`
  opacity: 0;
`;

export default ExitCompleteContainer;
