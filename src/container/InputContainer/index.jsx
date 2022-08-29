import NextBtn from "../../components/buttonComponent/index";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import sendVisitorData from "../../api/sendVisitorData";
function InputContainer() {
  const [phoneValue, setPhoneValue] = useState();

  const [visitorPhoneNumber, setVisitorPhoneNumber] = useState("");

  const handleNumber = (e) => {
    const { value } = e.target;
    setVisitorPhoneNumber(value);
  };

  useEffect(() => {
    if (visitorPhoneNumber.length == 11) {
      setVisitorPhoneNumber(
        visitorPhoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    } else if (visitorPhoneNumber.length === 13) {
      setVisitorPhoneNumber(
        visitorPhoneNumber
          .replace(/-/g, "")
          .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")
      );
    }
  }, [visitorPhoneNumber]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleLinkOnClick = async (data) => {
    let sendResult = await sendVisitorData({ ...data });
    console.log(sendResult);
    if (sendResult.status == 200) {
      navigate("/complete", { state: data.visitorName });
    }
  };

  const onSubmit = (data) => {
    handleLinkOnClick(data);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === "13") {
      handleLinkOnClick();
    }
  };

  return (
    <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Lable>
            <Title>이름</Title>
            <StyledInput
              type="text"
              name="visitorName"
              placeholder="홍길동 "
              autoComplete="off"
              {...register("visitorName", {
                required: true,
              })}
            />
            <Error>
              {errors.visitorName?.type === "required" &&
                "이름을 입력해주세요!"}
            </Error>
          </Lable>
          <Lable>
            <Title>전화번호</Title>
            <StyledInput
              type="text"
              name="visitorPhoneNumber"
              placeholder="010-8888-8888"
              value={visitorPhoneNumber}
              autoComplete="off"
              {...register("visitorPhoneNumber", {
                required: true,
                onChange: (e) => {
                  handleNumber(e);
                },
              })}
            />
            <Error>
              {errors.visitorPhoneNumber?.type === "required" &&
                "전화번호를 입력해주세요!"}
              {errors.visitorPhoneNumber?.message}
            </Error>
          </Lable>
          <Lable>
            <Title>소속</Title>
            <StyledInput
              type="text"
              name="visitorDivision"
              placeholder="회사명"
              autoComplete="off"
              {...register("visitorDivision", {
                required: true,
              })}
            />
            <Error>
              {errors.visitorDivision?.type === "required" &&
                "소속을 입력해주세요!"}
            </Error>
          </Lable>
          <Lable>
            <Title>방문사유</Title>
            <StyledInput
              type="text"
              name="visitorReason"
              placeholder="강의, 미팅"
              autoComplete="off"
              {...register("visitorReason", {
                required: true,
              })}
            />
            <Error>
              {errors.visitorReason?.type === "required" &&
                "방문사유를 입력해주세요!"}
            </Error>
          </Lable>
          <Lable>
            <Title>체온</Title>
            <StyledInput
              type="number"
              name="temperature"
              placeholder="36.5"
              autoComplete="off"
              {...register("temperature", {
                required: true,
              })}
            />
            <Error>
              {errors.temperature?.type === "required" &&
                "현재 온도를 입력해주세요!"}
            </Error>
          </Lable>
          <Lable>
            <PrivacyLabal>
              <CheckBox
                type="checkbox"
                autoFocus
                name="privacyLabal"
                {...register("privacyLabal", {
                  required: true,
                })}
              />
              <Privacy>개인정보수집에 동의합니다.</Privacy>
            </PrivacyLabal>
            <Error>
              {errors.privacyLabal?.type === "required" &&
                "개인정보수집에 동의해주세요"}
            </Error>
          </Lable>
          <Lable>
            <Btn>
              <NextBtn onKeyDown={handleKeyDown} />
            </Btn>
          </Lable>
        </Form>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  @media (max-width: 310px) {
    width: 300px;
    height: 150vh;
  }
`;

const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`;

const Lable = styled.label`
  height: 125px;
`;

const Title = styled.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 400;
  font-size: 24px;
  color: #52525c;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  background: #ffffff;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  padding-left: 20px;
  &:focus {
    outline: 2px solid #5686e1;
  }
  &::placeholder {
    font-weight: 400;
    font-size: 20px;
    color: #52525c;
    opacity: 0.5;
  }
`;

const CheckBox = styled.input`
  margin-right: 15px;
  width: 26px;
  height: 26px;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;

const PrivacyLabal = styled.div`
  width: 300px;
  margin-top: 33px;
  display: flex;
  align-items: center;
`;

const Privacy = styled.p`
  font-style: normal;
  font-weight: 400;
  height: 26px;
  font-size: 20px;
`;

const Btn = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;
`;

const Error = styled.p`
  color: #ff6464;
  padding: 5px 0 0 5px;
`;

export default InputContainer;
