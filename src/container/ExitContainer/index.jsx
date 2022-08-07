import React, { useState, useEffect, useRef } from "react";
import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import sendExitData from "../../api/sendExitData";
const ExitContainer = () => {
  const [cardId, setCardId] = useState(null);
  const navigate = useNavigate();
  const handleLinkOnClick = () => navigate("/exitcomplete");
  let ref = useRef();
  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    sendExitData,
    {
      onSuccess: () => {
        console.log("success");
        handleLinkOnClick();
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
        <QrReader
          ref={ref}
          delay={10000}
          facingMode={"user"}
          onScan={(result) => {
            if (result) {
              setCardId(result);
            }
          }}
          onError={(err) => console.log(err)}
        />
        <Title>QR 코드를 화면에 보여주세요</Title>
        {isLoading ? <WarinningText>요청중</WarinningText> : null}
        {isError ? <WarinningText>잘못된 QR코드입니다.</WarinningText> : null}
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  margin: 0 auto;
  width: 50vw;
  height: 50vh;
`;

const Title = styled.p`
  font-size: 24px;
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
