import logo from "../../assets/images/schoolLogo.png";
import styled from 'styled-components';
function AdminContainer() {
  return (
    <Container>
      <Content>
        <div>
          <Logo src={logo} alt="Logo" />
          <Title>관리자 페이지</Title>
        </div>
        <Form>
          <label>
            <PswTitle>비밀번호</PswTitle>
            <Password type="password" name="password" placeholder="비밀번호를 입력해주세요" autoComplete="off" />
          </label>
          <NextBtn><BtnTitie>다음</BtnTitie></NextBtn>
        </Form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
    width: 500px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    margin-bottom: 32px;
    width: 131px;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 4rem;
    color: #000000;
`;

const PswTitle = styled.p`
    padding-bottom: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    color: #52525C;
`;

const Password = styled.input`
    margin-bottom: 28px;
    width: 365px;
    height: 70px;
    background: #FFFFFF;
    border: 2px solid #D9D9D9;
    border-radius: 8px;
    padding-left: 16px;
    font-size: 26px;
    &:focus{
      outline: 2px solid #5686e1;
    }
    &::placeholder{
      font-weight: 400;
      font-size: 26px;
      color: #52525c;
      opacity: 0.5;
    }
`;

const NextBtn = styled.button`
    width: 313px;
    height: 62px;
    background: #5686E1;
    border: none;
    border-radius: 30px;
`;

const BtnTitie = styled.p`
    font-weight: 500;
    font-size: 26px;
    color: #FFFFFF;
`;

export default AdminContainer;
