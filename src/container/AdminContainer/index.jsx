import logo from "../../assets/images/schoolLogo.png";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRef, useCallback } from "react";
import sendPassword from "../../api/sendPassword";

function AdminContainer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleLinkOnClick = (status) => navigate("/inquiry", { state: status });

  const onSubmit = async (data) => {
    console.log(data);
    let sendResult = await sendPassword(data);
    console.log(sendResult);
    if (sendResult.data == true) {
      handleLinkOnClick(true);
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === "13") {
      handleLinkOnClick();
    }
  };
  let ref = useRef();
  return (
    <Container>
      <Content>
        <div>
          <Logo src={logo} alt="Logo" />
          <Title>관리자 페이지</Title>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <PswTitle>비밀번호</PswTitle>
            <Password
              // ref={ref}
              type="password"
              name="adminKey"
              placeholder="비밀번호를 입력해주세요"
              autoComplete="off"
              {...register("adminKey", {
                required: true,
              })}
            />
            <Error>
              {errors.adminKey?.type === "required" &&
                "비밀번호를 입력해주세요!"}
            </Error>
          </label>
          <NextBtn onKeyDown={handleKeyDown}>다음</NextBtn>
        </Form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 300px) {
    width: 300px;
    height: 100vh;
  }
`;

const Content = styled.div`
  width: 500px;
  height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Logo = styled.img`
  margin-bottom: 32px;
  width: 100px;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 3.5rem;
  color: #000000;
  @media (max-width: 300px) {
  font-size: 3rem;
  }
`;

const PswTitle = styled.p`
  padding-bottom: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  color: #52525c;
  @media (max-width: 300px) {
  font-size: 1.5rem;
  }
`;

const Password = styled.input`
  width: 300px;
  height: 50px;
  background: #ffffff;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  padding-left: 16px;
  font-size: 26px;
  &:focus {
    outline: 2px solid #5686e1;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 26px;
    color: #52525c;
    opacity: 0.5;
    @media (max-width: 300px) {
      font-size: 20px;
  }
  }
  @media (max-width: 300px) {
    width: 250px;
  }
`;

const NextBtn = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 50px;
  background: #5686e1;
  border: none;
  border-radius: 30px;
  font-weight: 500;
  font-size: 26px;
  color: #ffffff;
`;

const Error = styled.p`
  color: #ff6464;
  padding: 10px;
`;

export default AdminContainer;
