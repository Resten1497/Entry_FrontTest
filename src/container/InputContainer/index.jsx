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
    document.body.style.zoom = "100%";
  });
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
      <Center>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Lable>
            <Title>카드번호</Title>
            <StyledInput
              type="text"
              name="pinNumber"
              placeholder="방문증 카드 번호 입력"
              autoComplete="off"
              {...register("pinNumber", {
                required: true,
              })}
            />
            <Error>
              {errors.pinNumber?.type === "required" &&
                "카드번호를 입력해주세요!"}
            </Error>
          </Lable>
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
            <Title>방문사유 / 담당 선생님 성함</Title>
            <StyledInput
              type="text"
              name="visitorReason"
              placeholder="강의, 미팅 / 담당 선생님 성함"
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
              placeholder="36.5 / 경비실에서 확인"
              autoComplete="off"
              {...register("temperature", {
                required: true,
              })}
            />
            <Error>
              {errors.temperature?.type === "required" &&
                "현재 온도를 입력해주세요!"}
            </Error>
            <Caution>코로나 방역 기준에 맞지 않으면 출입이 불가할 수 있습니다</Caution>
          </Lable>
          {/* <Lable>
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
        </Lable> */}
          <NextLable>
            <NextBtn onKeyDown={handleKeyDown} />
          </NextLable>
        </Form>
      </Center>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Center = styled.div`
  @media (max-width: 450px) {
    width: 100vw;
    height: 100vh;
  }
  width: 100vw;
  height: 100vh;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Lable = styled.label`
  height: 130px;
`;

const NextLable = styled.label`
  height: 130px;
  margin-top: 30px;
`;

const Title = styled.p`
  padding-top: 15px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 20px;
  color: #52525c;
  @media (max-width: 300px) {
    width: 200px;
    font-size: 17px;
  }
`;

const Caution = styled.p`
    @media (max-width: 300px) {
    width: 200px;
  }
  padding: 5px 0 5px 0;
  width: 280px;
  color: #52525c;
  font-size: 14px;
`;

const StyledInput = styled.input`
  @media (max-width: 300px) {
    width: 200px;
    &::placeholder {
      font-size: 20px;
    }
  }
  width: 280px;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  background: #ffffff;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  padding-left: 10px;
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

// const CheckBox = styled.input`
//   margin-right: 15px;
//   width: 25px;
//   height: 25px;
//   background: #ffffff;
//   &:focus {
//     outline: none;
//   }
//   @media (max-width: 300px) {
//     width: 20px;
//     height: 20px;
//   }
// `;

// const PrivacyLabal = styled.div`
//   width: 300px;
//   margin-top: 33px;
//   display: flex;
//   align-items: center;
//   @media (max-width: 300px) {
//     width: 200px;
//     line-height: 25px;
//   }
// `;

// const Privacy = styled.p`
//   font-style: normal;
//   font-weight: 400;
//   height: 26px;
//   font-size: 20px;
//   @media (max-width: 300px) {
//     font-size: 14px;
//   }
// `;

// const Btn = styled.div`
//   width: 300px;
//   display: flex;
//   justify-content: flex-end;
// `;

const Error = styled.p`
    @media (max-width: 300px) {
    width: 200px;
    font-size: 14px;
  }
  color: #ff6464;
  padding: 5px 0 0 5px;
`;

export default InputContainer;
