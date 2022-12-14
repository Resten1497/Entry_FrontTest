import React, { useState, useEffect, useRef } from "react";
//import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import sendExitData from "../../api/sendExitData";
const ExitContainer = () => {
  const [cardId, setCardId] = useState(null);
  const navigate = useNavigate();
  const handleLinkOnClick = (data) =>
    navigate("/exitcomplete", { state: data });
  let ref = useRef();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    sendExitData,
    {
      onSuccess: (data) => {
        console.log("success");
        handleLinkOnClick(data.data);
        ref.current.stopCamera();
      },
    }
  );
  useEffect(() => {
    if (cardId) {
      mutate({ cardId: cardId });
      setCardId(null);
    }
  }, [cardId]);

  return (
    <>
      <Wrap>
        {/* <QrReader
          ref={ref}
          delay={1000}
          facingMode={"user"}
          onScan={(result) => {
            if (result) {
              //console.log(result);
              setCardId(result);
            }
          }}
          className="QrReader"
          onError={(err) => console.log(err)}
        /> */}
        <Title>방문증에 있는 QR 코드를 화면에 보여주세요</Title>
        {isLoading ? <WarinningText>요청중</WarinningText> : null}
        {isError ? <WarinningText>오류가 발생했습니다.</WarinningText> : null}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 40vw;
  height: 40vh;
  & .QrReader > section > div {
    display: none;
  }
`;

const Title = styled.p`
  font-size: 24px;
  margin-top: 50px;
  font-weight: 600;
  text-align: center;
`;
const WarinningText = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin-top: 10px;
  color: red;
  text-align: center;
`;
export default ExitContainer;
