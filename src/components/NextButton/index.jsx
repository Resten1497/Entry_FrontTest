import "./NextBtn.css";
import Next from "../../assets/images/NextPage.png";

function NextBtn() {
  return (
    <button className="NextBtn">
      <span>다음</span>
      <img src={Next} className="BtnImg" alt="Next" />
    </button>
  );
}

export default NextBtn;
