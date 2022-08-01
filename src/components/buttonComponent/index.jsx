import React from 'react'
import styled from 'styled-components';
import Next from "../../assets/images/NextPage.png";

function Button(){
    return(
        <NextBtn>
            <Title>다음</Title><Img src={Next} alt="Next"/>
        </NextBtn>
    )
}

const NextBtn = styled.div`
    border: none;
    width: 153px;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #5686E1;
    border-radius: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    &:focus{
        outline: none;
    }
`

const Title = styled.span`
    font-style: normal;
    font-weight: 400;
    padding-left: 5px;
`

const Img = styled.img`
     padding: 0 0 0 5px;
`

export default Button;