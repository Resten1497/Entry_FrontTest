import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import React from "react";
import axios from "axios";
import styled from 'styled-components';
import Calendar from '../../assets/images/Calendar.png';

function InquiryContainer() {
  const day = new Date();
  const year = String(day.getFullYear());
  let first = String(day.getMonth() + 1).split('');
  if (first.length === 1) {
    first.unshift('0')
  }
  const month = [first].join().replace(/,/g, '');
  const dateValue = year + '-' + month;
  return (
    <Container>
      <Content>
        <Day type="month" name="day" defaultValue={dateValue} />
        <Table>
          <thead>
            <Row>
                <Number>번호</Number>
                <DateTime>날짜</DateTime>
                <Name>이름</Name>
                <Phone>전화번호</Phone>
                <Reason>방문목적</Reason>
                <InTime>입실시간</InTime>
                <OutTime>퇴실시간</OutTime>
              </Row>
          </thead>
          <tbody>
              <Row>
                  <Number>{1}</Number>
                  <DateTime>07/18</DateTime>
                  <Name>김여우</Name>
                  <Phone>010-1234-5678</Phone>
                  <Reason>산책</Reason>
                  <InTime>90시90분</InTime>
                  <OutTime>90시90분</OutTime>
              </Row>
                {/* <GetData /> */}
            </tbody>
          </Table>
      </Content>
    </Container>
  );
}

function GetData() {
  const { isLoading, error, data, isSuccess } = useQuery(["data"], async () => {
    const { data } = await axios.post("https://entrylist.herokuapp.com/admin/");
    return data;
  });
  if (error) {
    return <div>Error</div>;
  }
  if (isSuccess) {
    return (
      <>
        {data.map((item, index) => {
          console.log(item);
          return (
            <>
              <Row>
                <Number>{index+1}</Number>
                <DateTime>07/18</DateTime>
                <Name>{item.visitorName}</Name>
                <Phone>{item.visitorPhoneNumber}</Phone>
                <Reason>{item.visitorReason}</Reason>
                <InTime>{item.entranceTime}</InTime>
                <OutTime>{item.exitTime}</OutTime>
              </Row>
            </>
          );
        })}
      </>
    );
  }
}

export default InquiryContainer;

const Container = styled.div`
  width: 1400px;
  height: 100vh;
  margin: 0 auto;
  /* display: flex;
  justify-content: center;
  align-items: center; */
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
