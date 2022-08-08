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
          <TableHeader>
            <ThRow>
              <HeadDataNumber>번호</HeadDataNumber>
              <HeadDataDate>날짜</HeadDataDate>
              <HeadDataName>이름</HeadDataName>
              <HeadDataPhone>전화번호</HeadDataPhone>
              <HeadDataReason>방문목적</HeadDataReason>
              <HeadDataInTime>입실시간</HeadDataInTime>
              <HeadDataOutTime>퇴실시간</HeadDataOutTime>
            </ThRow>
          </TableHeader>
        </HeadTable>

        <Over>
          <BodyTable>
            <TableBody>
              <TbRow>
                <Number>1</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>2</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>3</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>4</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>5</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>6</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>7</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>8</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>9</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
              <TbRow>
                <Number>10</Number>
                <DateTime>07/18</DateTime>
                <Name>홍길동</Name>
                <Phone>010-1234-5678</Phone>
                <Reason>강의진행</Reason>
                <InTime>08:12</InTime>
                <OutTime>16:30</OutTime>
              </TbRow>
            
            </TableBody>
          </BodyTable>
        </Over>
      </Content>
    </Container>
  );
}

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

const TableHeader = styled.thead`
    width: 1400px;
    height: 60px;
    background: #F3F3F3;
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
`;

const TableBody = styled.tbody`
    width: 1440px;
    height: 480px;
`;

const TbRow = styled.tr`
    height: 60px;
    border: none;
    text-align: center;
`;

const Number = styled.td`
    width: 150px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
`;

const DateTime = styled.td`
    width: 200px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
`;
const Name = styled.td`
      width: 200px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
`;
const Phone = styled.td`
    width: auto;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
`;
const Reason = styled.td`
    width: 200px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
`;
const InTime = styled.td`
    width: 200px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
`;
const OutTime = styled.td`
    width: 200px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
`;

export default InquiryContainer;
