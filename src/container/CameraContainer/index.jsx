import React, { useState, useEffect} from "react";
import { QrReader } from "react-qr-reader";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
const CameraContainer = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const handleLinkOnClick = (cardId) => navigate("/regist", { state: cardId });

  useEffect(() => {
    console.log(data);
    if (data) {
      handleLinkOnClick(data);
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
export default CameraContainer;
