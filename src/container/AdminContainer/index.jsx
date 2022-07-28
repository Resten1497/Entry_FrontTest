import "./AdminContainer.css";
import logo from "../../assets/images/schoolLogo.png";
function AdminContainer() {
    return (
        <div className="container">
            <div className="content">
                <img src={logo} className="adminLogo" alt="adminLogo" />
                <h1 className="title">관리자 페이지</h1>
            </div>
            <form className="form"
            >
                <label className="lable">
                    <p className="pswTitle">비밀번호</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="password"
                        placeholder="비밀번호를 입력해주세요"
                        autoComplete="off"
                    />
                </label>
                <button className="NextLevel"><p className="levelTitle">다음</p></button>
            </form>
        </div>
    );
}

export default AdminContainer;