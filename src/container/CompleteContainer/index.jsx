import "./CompleteContainer.css";
import checkAnimation from "../../assets/images/checkAnimation.gif";

function CompleteContainer() {
  return (
    <>
      <div className="container">
        <img src={checkAnimation} width="150px" alt="checkAnimation" />
        <p className="finishTItle">
          입장 절차가 완료되었습니다!
          <br />
          퇴실할때 QR코드를 다시 찍어주세요!
        </p>
      </div>
    </>
  );
}

export default CompleteContainer;
