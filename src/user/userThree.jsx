import './style/userThree.css';
import checkAnimation from '../images/checkAnimation.gif';

function UserThree(){
    return(
        <div className="UserThree">
            <div className="container">
                <img src={checkAnimation} width="150px" alt="checkAnimation"/>
                <p className="finishTItle">입장 정차가 완료되었습니다!<br/>퇴실할때 QR코드를 다시 찍어주세요!</p>
            </div>
        </div>
    );
}

export default UserThree;