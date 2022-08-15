import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Calendar from "../../assets/images/Calendar.png";
import qs from "qs";

function InquiryContainer() {
  const { data, refetch, isSuccess, isError } = useQuery(["data"], async () => {
    let year = searchDate.split("-")[0];
    let month = searchDate.split("-")[1];
    // console.log(year, month);
    const { data } = await axios.post(
      "https://entrylist.herokuapp.com/admin",
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
    refetch();
  }, [searchDate]);

  return (
    <Container>
      <Content>
        <Day
          type="month"
          name="day"
          defaultValue={dateValue}
          onChange={(e) => {
            setSearchDate(e.target.value);
          }}
        />
        <Table>
          <thead>
            <HRow>
              <Number>번호</Number>
              <DateTime>날짜</DateTime>
              <Name>이름</Name>
              <Phone>전화번호</Phone>
              <Reason>방문목적</Reason>
              <InTime>입실시간</InTime>
              <OutTime>퇴실시간</OutTime>
            </HRow>
          </thead>
          <tbody>
              {isSuccess ? (
                data.map((item, index) => {
                  return (  
                    <React.Fragment key={index}>
                      <Row>
                        <Number>{index + 1}</Number>
                        <DateTime>{item.entranceMonth}/{item.entranceDay}</DateTime>
                        <Name>{item.visitorName}</Name>
                        <Phone>{item.visitorPhoneNumber}</Phone>
                        <Reason>{item.visitorReason}</Reason>
                        <InTime>{item.entranceTime}</InTime>
                        <OutTime>{item.exitTime}</OutTime>
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
`;

const Content = styled.div`
  margin-top: 25%;
`;

const Day = styled.input`
    margin-bottom: 50px;
    width: 400px;
    font-style: normal;
    font-weight: 700;
    font-size: 3.5rem;
    border: none;
    &:focus{
      outline: none;
    }
    &::-webkit-calendar-picker-indicator {
      background: url(${Calendar});
    }
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
    background: #F3F3F3;
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