import logo from "../../assets/images/schoolLogo.png";
import "./IntroduceContainer.css";
import Next from "../../assets/images/NextPage.png";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function IntroduceContainer() {
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/camera"), [navigate]);
  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      handleLinkOnClick();
    }
  };
  return (
    <div className="introduceContainer">
      <div>
        <img src={logo} className="Logo" alt="schoolLogo" />
        <p className="MainText">
          서울디지텍고등학교에
          <br />
          오신것을 환영합니다.
        </p>
        <p className="SubText">신분확인을 위해 몇가지를 작성해주세요!!</p>
      </div>
      <div>
         <button 
          type="submit"
          id="NextBtn"
          autoFocus
          className="NextBtnOne"
          onClick={handleLinkOnClick}
          onKeyDown={handleKeyDown}
        >
        <span className="btnTitle">다음</span>
        <img src={Next} className="BtnImg" alt="Next" />
      </button>
      </div>
    </div>
  );
}

export default IntroduceContainer;
