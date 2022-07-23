import logo from '../images/schoolLogo.png';
import Next from '../images/Next page.png';
import './style/userOne.css';

function UserOne(){
    return(
        <div className="UserOne">
            <div className="container">
                <div>
                    <img src={logo} className="Logo" alt="schoolLogo"/>
                    <p className="MianText">서울디지텍고등학교에<br/>오신것을 환영합니다.</p>
                    <p className="SubText">신분확인을 위해 몇가지를 작성해주세요!!</p>
                </div>
                <button className="NextBtn">다음 <img src={ Next } className="BtnImg" alt="Next"/></button>
            </div>
        </div>
    );
}

export default UserOne;