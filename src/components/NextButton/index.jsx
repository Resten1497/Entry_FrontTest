import "./NextBtn.css";
import Next from "../../assets/images/NextPage.png";

function NextBtn(prop) {
  return (
    <button type="submit" className="NextBtn" onClick={prop.onclick}>
      <span>다음</span>
      <img src={Next} className="BtnImg" alt="Next" />
    </button>
  );
}

export default NextBtn;
