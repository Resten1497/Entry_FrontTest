import './style/NextBtn.css';
import Next from '../images/Next page.png';

function NextBtn(){
    return(
        <button className="NextBtn">다음 <img src={ Next } className="BtnImg" alt="Next"/></button>
    );
}

export default NextBtn;