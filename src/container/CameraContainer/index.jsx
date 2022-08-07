import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import sendCardData from "../../api/sendCardData";
const CameraContainer = () => {
  const [cardId, setCardId] = useState(null);
  const navigate = useNavigate();
  const handleLinkOnClick = (cardId) => navigate("/regist", { state: cardId });

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    sendCardData,
    {
      onSuccess: () => {
        handleLinkOnClick(cardId);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return (
    <>
      <Wrap>
        <QrReader
          scanDelay={2000}
          constraints={{
            facingMode: "user",
          }}
          onResult={(result) => {
            if (result) {
              var cardId = Object.keys(result).map((v2) => {
                if (v2 === "text") return result[v2];
              });
              setCardId(cardId[0]);
              mutate({ cardId: cardId[0] });
            }
          }}
        />
        <Title>QR 코드를 화면에 보여주세요</Title>
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
export default CameraContainer;
