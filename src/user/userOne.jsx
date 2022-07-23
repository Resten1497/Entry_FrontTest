import logo from '../images/schoolLogo.png';
import Next from '../images/Next page.png';
import './style/userOne.css';

function UserOne(){
    return(
        <div className="UserOne">
            <img src={logo} className="Logo" alt="schoolLogo"/>
            <h1 className="MianText">서울디지텍고등학교에<br/>오신것을 환영합니다.</h1>
            <p className="SubText">신분확인을 위해 몇가지를 작성해주세요!!</p>
            <button className="NextBtn">다음 <img src={ Next } alt="Next"/></button>
        </div>
    );
}

export default UserOne;