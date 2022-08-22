import NextBtn from "../../components/buttonComponent/index";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import sendVisitorData from "../../api/sendVisitorData";
import styled from "styled-components";

function InputContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleLinkOnClick = (data) => navigate("/camera", { state: data });

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
      <Content>
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
              autoComplete="off"
              {...register("visitorPhoneNumber", {
                required: true,
                // pattern: /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/,
                pattern: {
                  value: /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/,
                  message: "전화번호 입력을 다시 확인해주세요",
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
              type="text"
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

          <Btn>
            <NextBtn onKeyDown={handleKeyDown} />
          </Btn>
        </Form>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  /* height: 110vh; */
  height: 1000px;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Lable = styled.label`
  height: 150px;
`;

const Title = styled.p`
  padding-top: 30px;
  padding-bottom: 12px;
  font-weight: 400;
  font-size: 26px;
  color: #52525c;
`;

const StyledInput = styled.input`
  width: 405px;
  height: 53px;
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
  margin-right: 14px;
  width: 26px;
  height: 26px;
  background: #ffffff;
  &:focus {
    outline: none;
  }
`;

const PrivacyLabal = styled.div`
  position: relative;
  right: 70px;
  margin-top: 33px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Privacy = styled.p`
  font-style: normal;
  font-weight: 400;
  height: 26px;
  font-size: 20px;
`;

const Btn = styled.div`
  margin: 0 50px 50px 0;
  position: relative;
  left: 220px;
`;

const Error = styled.p`
  color: #ff6464;
  padding: 5px 0 0 5px;
`;

export default InputContainer;
