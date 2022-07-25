import "./InputContainer.css";
import NextBtn from "../../components/NextButton";
import React from "react";
import { useForm } from "react-hook-form";

function InputContainer() {
  const { register, watch, formState: { errors }, handleSubmit } = useForm();
  // console.log(watch("visitorName"));

  const onSubmit = (data) => {
    console.log(data);
  }

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
                required: true
              })}
              {...errors.visitorName && errors.visitorName.type === "required" && <p>이름을 입력해주세요.</p>}
            />
          </label>
          <label>
            <p className="inputTitle">전화번호</p>
            <input
              type="number"
              name="visitorPhoneNumber"
              className="info"
              id="visitorPhoneNumber"
              placeholder="010-8888-8888"
              autoComplete="off"
              {...register("visitorPhoneNumber", {
                required: true,
                pattern: /^[0-9\b -]{0,13}$/
              })}
              {...errors.visitorPhoneNumber && errors.visitorPhoneNumber.type === "required" && <p>전화번호를 입력해주세요.</p>}
              {...errors.visitorPhoneNumber && errors.visitorPhoneNumber.type === "pattern" && <p>전화번호를 다시 입력해주세요.</p>}
            />
          </label>
          <label>
            <p className="inputTitle">소속</p>
            <input
              type="text"
              name="visitorDivision"
              className="info"
              id="visitorDivision"
              placeholder="서울디지텍고등학교"
              autoComplete="off"
              {...register("visitorDivision", {
                required: true,
              })}
              {...errors.visitorDivision && errors.visitorDivision.type === "required" && <p>소속을 입력해주세요.</p>}
            />
          </label>
          <label>
            <p className="inputTitle">방문사유</p>
            <input
              type="text"
              name="visitorPhoneNumber"
              className="info"
              id="visitorPhoneNumber"
              placeholder="강의진행"
              autoComplete="off"
              {...register("visitorDivision", {
                required: true,
              })}
              {...errors.visitorDivision && errors.visitorDivision.type === "required" && <p>방문사유를 입력해 주세요.</p>}
            />
          </label>
          <label>
            <p className="inputTitle">체온</p>
            <input
              type="number"
              name="temperature"
              className="info"
              id="temperature"
              placeholder="36.5"
              autoComplete="off"
              {...register("temperature", {
                required: true,
              })}
              {...errors.temperature && errors.temperature.type === "required" && <p>체온을 입력해 주세요.</p>}
            />
          </label>
          <label>
            <div className="privacyLabal">
              <input
                type="checkbox"
                name="checkBox"
                id="checkBox"
                className="checkBox"
              // {...register("checkBox", {
              //   required: true,
              // })}
              // {...errors.checkBox && errors.checkBox.type === "required" && <p>개인정보 수입에 동의해주세요.</p>}
              />
              <p className="privacy">개인정보수집에 동의합니다.</p>
            </div>
          </label>
          {/* <input type="submit" onClick={ } /> */}
          <NextBtn link={"/complete"} className="NextBtn Btn" />
        </form>
      </div>
    </>
  );
}

export default InputContainer;
