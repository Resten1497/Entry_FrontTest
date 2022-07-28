import logo from "../../assets/images/schoolLogo.png";
import "./IntroduceContainer.css";
import NextBtn from "../../components/NextButton";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";


function IntroduceContainer() {
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/regist"), [navigate]);
  // const hi = e => {
  //   if (e.keyCode === 13) {
  //     alert('Enter');
  //   }
  // }
  const handleKeyDown = event => {
    console.log('User pressed: ', event.key);
  };
  return (
    <div className="container">
      <div>
        <img src={logo} className="Logo" alt="schoolLogo" />
        <p className="MainText">
          서울디지텍고등학교에
          <br />
          오신것을 환영합니다.
        </p>
        <p className="SubText">신분확인을 위해 몇가지를 작성해주세요!!</p>
      </div>
      <NextBtn onclick={handleLinkOnClick} onKeyDown={handleKeyDown} tabIndex={0} className="NextBtn" id="NextBtn" />
    </div>
  );
}



export default IntroduceContainer;
