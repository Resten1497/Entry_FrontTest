import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "../../assets/images/Calendar.png";
import qs from "qs";
import { useLocation, useNavigate } from "react-router-dom";

function InquiryContainer() {
  const location = useLocation();
  const navigate = useNavigate();
  //const handleLinkOnClick = useCallback(() => navigate("/card"), [navigate]);

  const { data, refetch, isSuccess, isError } = useQuery(["data"], async () => {
    let year = searchDate.split("-")[0];
    let month = searchDate.split("-")[1];
    // console.log(year, month);

    const { data } = await axios.post(
      "http://sdhsentrylist.cafe24app.com/admin",
      qs.stringify({ lookupYear: year, lookupMonth: month }),
      {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      }
    );
    return data;
  });

  const day = new Date();
  const year = String(day.getFullYear());
  let first = String(day.getMonth() + 1).split("");
  if (first.length === 1) {
    first.unshift("0");
  }
  const month = [first].join().replace(/,/g, "");
  const dateValue = year + "-" + month;

  const [searchDate, setSearchDate] = useState(dateValue);

  useEffect(() => {
    if (location.state == null) {
      alert("로그인이 필요합니다.");
      navigate("/admin");
    }
  }, []);
  useEffect(() => {
    refetch();
  }, [searchDate]);

  return (
    <Container>
      <Content>
        <Header>
          <Day
            type="month"
            name="day"
            defaultValue={dateValue}
            onChange={(e) => {
              setSearchDate(e.target.value);
            }}
          />
          {/* <NextBtn onClick={handleLinkOnClick}>카드 조회</NextBtn> */}
        </Header>
        <Table>
          <thead>
            <HRow>
              <Number>번호</Number>
              <CardNumber>카드번호</CardNumber>
              <DateTime>날짜</DateTime>
              <Name>이름</Name>
              <Phone>전화번호</Phone>
              <Reason>방문목적</Reason>
              <InTime>입실시간</InTime>
              {/* <OutTime>퇴실시간</OutTime> */}
            </HRow>
          </thead>
          <tbody>
            {isSuccess ? (
              data.map((item, index) => {
                if (item.exitTime == null) {
                  item.exitTime = "-";
                }
                return (
                  <React.Fragment key={index}>
                    <Row>
                      <Number>{index + 1}</Number>
                      <CardNumber>{item.pinNumber}</CardNumber>
                      <DateTime>
                        {item.entranceMonth}/{item.entranceDay}
                      </DateTime>
                      <Name>{item.visitorName}</Name>
                      <Phone>{item.visitorPhoneNumber}</Phone>
                      <Reason>{item.visitorReason}</Reason>
                      <InTime>{item.entranceTime}</InTime>
                      {/* <OutTime>{item.exitTime}</OutTime> */}
                    </Row>
                  </React.Fragment>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

export default InquiryContainer;

const Container = styled.div`
  width: 1400px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 50px;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Day = styled.input`
  width: 400px;
  font-style: normal;
  font-weight: 700;
  font-size: 3.5rem;
  border: none;
  &:focus {
    outline: none;
  }
  &::-webkit-calendar-picker-indicator {
    background: url(${Calendar});
  }
`;

const NextBtn = styled.button`
  margin-left: 20px;
  width: 200px;
  height: 70px;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  color: #ffffff;
  background: #389df9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  border: none;
`;

const Table = styled.table`
  width: 1400px;
  height: 60px;
  border-collapse: collapse;
`;

const HRow = styled.tr`
  width: 1440px;
  height: 60px;
  line-height: 30px;
  border: none;
  text-align: center;
  background: #f3f3f3;
`;

const Row = styled.tr`
  width: 1440px;
  height: 60px;
  line-height: 30px;
  border: none;
  text-align: center;
`;

const Number = styled.td`
  width: 150px;
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
`;

const CardNumber = styled.td`
  width: 150px;
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
`;

const DateTime = styled.td`
  width: 200px;
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
`;
const Name = styled.td`
  width: 200px;
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
`;
const Phone = styled.td`
  width: 250px;
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
`;
const Reason = styled.td`
  width: 200px;
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
`;
const InTime = styled.td`
  width: 200px;
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
`;
const OutTime = styled.td`
  width: 200px;
  line-height: 30px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
`;
