import React from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import logo from '../../assets/images/schoolLogo.png';
import enter from '../../assets/images/enter.png';
import exit from '../../assets/images/exit.png';

function Main(){
    const navigate = useNavigate();
    const LogIn = useCallback(() => navigate("/"), [navigate]);
    const LogOut = useCallback(() => navigate("/exit"), [navigate]);
    const Admin = useCallback(() => navigate("/admin"), [navigate]);
    return(
        <Container>
            <Content>
                <Header>
                    <Logo src={logo}/>
                    <Title>출입자 명부 관리 서비스</Title>
                </Header>
                <Section>
                    <Btn onClick={LogIn}>
                        <LogImg src={enter}/>
                        <BtnText>입실</BtnText>
                    </Btn>
                    <Btn onClick={LogOut}>
                        <LogImg src={exit}/>
                        <BtnText>퇴실</BtnText>
                    </Btn>
                </Section>
                    {/* <AdminBtn onClick={Admin}>관리자 페이지</AdminBtn> */}
            </Content>
        </Container>
    )
}

export default Main;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Content = styled.div`
    width: 1400px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: center;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Logo = styled.img`
    margin-bottom: 30px;
    width: 130px;
`;

const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
`;

const Section = styled.div`
    width: 1400px;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
`;

const Btn = styled.button`
    width: 400px;
    height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #5686E1;
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`;

const LogImg = styled.img`
    width: 130px;
    margin-bottom: 50px;
`;

const BtnText = styled.p`
    padding-top: 50px;
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 58px;
    color: #FFFFFF;
`;

const AdminBtn = styled.button`
    width: 516px;
    height: 98px;
    margin: 0 auto;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    color: #222222;
    background: #FFFFFF;
    border: 0.1px solid #000;
    border-radius: 30px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`;