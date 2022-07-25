import "./InputContainer.css";
import NextBtn from "../../components/NextButton";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function InputContainer() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(
    () => navigate("/complete"),
    [navigate]
  );

  const onSubmit = (data) => {
    console.log(data);
    handleLinkOnClick();
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>
            <p className="inputTitle">이름</p>
            <input
              type="text"
              name="visitorName"
              className="info"
              id="visitorName"
              placeholder="홍길동 "
              autoComplete="off"
              {...register("visitorName", {
                required: true,
              })}
            />
            <p className="error">
              {errors.visitorName?.type === "required" &&
                "이름을 입력해주세요!"}
            </p>
          </label>

          <label>
            <p className="inputTitle">전화번호</p>
            <input
              type="text"
              name="visitorPhoneNumber"
              className="info"
              id="visitorPhoneNumber"
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
            <p className="error">
              {errors.visitorPhoneNumber?.type === "required" &&
                "전화번호를 입력해주세요!"}
              {errors.visitorPhoneNumber?.message}
            </p>
          </label>
          <label>
            <p className="inputTitle">소속</p>
            <input
              type="text"
              name="visitorDepartment"
              className="info"
              id="visitorDepartment"
              placeholder="서울디지텍고등학교"
              autoComplete="off"
              {...register("visitorDepartment", {
                required: true,
              })}
            />
            <p className="error">
              {errors.visitorDepartment?.type === "required" &&
                "소속을 입력해주세요!"}
            </p>
          </label>
          <label>
            <p className="inputTitle">방문사유</p>
            <input
              type="text"
              name="visitorReason"
              className="info"
              id="visitorReason"
              placeholder="강의진행"
              autoComplete="off"
              {...register("visitorReason", {
                required: true,
              })}
            />
            <p className="error">
              {errors.visitorReason?.type === "required" &&
                "방문사유를 입력해주세요!"}
            </p>
          </label>
          <label>
            <p className="inputTitle">체온</p>
            <input
              type="text"
              name="temperature"
              className="info"
              id="temperature"
              placeholder="36.5"
              autoComplete="off"
              {...register("temperature", {
                required: true,
              })}
            />
            <p className="error">
              {errors.temperature?.type === "required" &&
                "현재 온도를 입력해주세요!"}
            </p>
          </label>
          <label>
            <div className="privacyLabal">
              <input
                type="checkbox"
                name="privacyLabal"
                id="privacyLabal"
                className="checkBox"
                {...register("privacyLabal", {
                  required: true,
                })}
              />
              <p className="privacy">개인정보수집에 동의합니다.</p>
            </div>
            <p className="error">
              {errors.privacyLabal?.type === "required" &&
                "개인정보수집에 동의해주세요"}
            </p>
          </label>

          <NextBtn className="NextBtn Btn" onclick={null} />
        </form>
      </div>
    </>
  );
}

export default InputContainer;
