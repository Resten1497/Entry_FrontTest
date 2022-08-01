import React, { useState, useEffect, useCallback } from "react";
import { QrReader } from "react-qr-reader";
import "./CameraContainer.css";
import { useNavigate } from "react-router-dom";

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
      <div className="wrap">
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
      </div>
    </>
  );
};
export default CameraContainer;
