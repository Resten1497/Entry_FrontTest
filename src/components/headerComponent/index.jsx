import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/images/selectImageView.png';

function headerComponent(){
    return(
        <Container>
            서울디지텍고등학교
            {/* <Logo src={logo} alt="schoolLogo" /> */}
        </Container>
    )
}

export default headerComponent;

const Container = styled.div`
    color: white;
    margin-bottom: 20px;
    width: 100vw;
    height: 50px;
    background: #5686e1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    height: 40px;
    position: relative;
    left: 60px;
`

