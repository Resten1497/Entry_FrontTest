import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { sendExitData } from "../../api/sendExitData";
const ExitContainer = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleLinkOnClick = () => navigate("/complete");

  useEffect(() => {
    console.log(data);
    if (data) {
      sendExitData(data);

      //handleLinkOnClick(data);
    }
  }, [data]);
  return (
    <>
      <Wrap>
        <QrReader
          scanDelay={1000}
          constraints={{
            facingMode: "user",
          }}
          onResult={(result) => {
            if (result) {
              var url = Object.keys(result).map((v2) => {
                if (v2 === "text") return result[v2];
              });
              setData(url[0]);
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
export default ExitContainer;
