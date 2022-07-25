import "./NextBtn.css";
import Next from "../../assets/images/NextPage.png";
import { Link } from "react-router-dom";

function NextBtn(prop) {
  console.log(prop.link);

  return (
    <Link to={prop.link} style={{ textDecoration: "none" }}>
      <button type="submit" className="NextBtn">
        <span>다음</span>
        <img src={Next} className="BtnImg" alt="Next" />
      </button>
    </Link>
  );
}

export default NextBtn;
