import Animation from "../../components/animation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";

function CompleteContainer() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/"), [navigate]);
  // const handleKeyDown = (e) => {
  //   if (e.keyCode === "13") {
  //     console.log("enter");
  //     handleLinkOnClick();
  //   }
  // };
  return (
    <Container>
      <Animation />

      <Title>
        {location.state}님
        <br /> 입장 절차가 완료되었어요!
      </Title>
      <Sub_Title>
        이 화면을 보여주시고
        <br />
        반드시 명찰을 받아 가세요!
        <br />
        퇴실 시 방문증을 반납주세요!
      </Sub_Title>
      {/* <Btn autoFocus onKeyDown={handleKeyDown}></Btn> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  max-height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
    @media (max-width: 300px) {
      font-size: 1.5rem;
  }
  font-weight: 400;
  font-size: 1.8rem;
  text-align: center;
  color: #52525c;
`;

const Sub_Title = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1rem;
  color: grey;
`;

const Btn = styled.button`
  opacity: 0;
`;

export default CompleteContainer;
