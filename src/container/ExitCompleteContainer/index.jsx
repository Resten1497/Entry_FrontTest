import Animation from "../../components/animation";
import styled from "styled-components";

function ExitCompleteContainer() {
  return (
    <Container>
      <Animation />
      <Title>
        퇴실 절차가 완료되었습니다!
        <br />
        안녕히가세요 !
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

export default ExitCompleteContainer;
