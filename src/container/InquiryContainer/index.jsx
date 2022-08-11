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
      <HeadTable>
        <thead>
          <ThRow>
              <HeadDataNumber>번호</HeadDataNumber>
              <HeadDataDate>날짜</HeadDataDate>
              <HeadDataName>이름</HeadDataName>
              <HeadDataPhone>전화번호</HeadDataPhone>
              <HeadDataReason>방문목적</HeadDataReason>
              <HeadDataInTime>입실시간</HeadDataInTime>
              <HeadDataOutTime>퇴실시간</HeadDataOutTime>
            </ThRow>
        </thead>
        </HeadTable>
        <Over>
          <BodyTable>
            <tbody>
              <GetData />
            </tbody>
          </BodyTable>
        </Over>
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
              <TbRow>
                <Number>{index+1}</Number>
                <DateTime>07/18</DateTime>
                <Name>{item.visitorName}</Name>
                <Phone>{item.visitorPhoneNumber}</Phone>
                <Reason>{item.visitorReason}</Reason>
                <InTime>{item.entranceTime}</InTime>
                <OutTime>{item.exitTime}</OutTime>
              </TbRow>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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

const HeadTable = styled.table`
    width: 1400px;
    height: 60px;
    border-collapse: collapse;
`;
const ThRow = styled.tr`
    height: 60px;
    border: none;
    text-align: center;
`;

const HeadDataNumber = styled.td`
    width: 150px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
`;

const HeadDataDate = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
`;

const HeadDataName =styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
`;

const HeadDataPhone = styled.td`
    width: auto;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
`;

const HeadDataReason = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
`;

const HeadDataInTime = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
`;

const HeadDataOutTime = styled.td`
    width: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    text-align: center;
`;

const Over = styled.div`
    width: 1400px;
    height: 480px;
    overflow-x: hidden;
    overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-track {
    background-color: initial;
  }
`;

const BodyTable = styled.table`
    width: 1400px;
    height: 480px;
    border-collapse: collapse;
`;

const TbRow = styled.tr`
    width: 1440px;
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
