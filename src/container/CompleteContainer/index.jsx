import Animation from "../../components/animation";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
function CompleteContainer() {
  const location = useLocation();

  return (
    <Container>
      <Animation />
      <Title>
        입장 절차가 완료되었습니다!
        <br />
        {location.state}님 안녕하세요!
      </Title>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
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

export default CompleteContainer;
