import React from 'react'
import styled from 'styled-components';

function ReturnComponent(){
    return(
        <Btn>반납</Btn>
    )
}

export default ReturnComponent;

const Btn = styled.button`
    width: 130px;
    height: 50px;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
    background: #389DF9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 35px;
    border: none;
`;