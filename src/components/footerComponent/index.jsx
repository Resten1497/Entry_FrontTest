import React from 'react'
import styled from 'styled-components';

function footerComponent(){
    return(
        <Container>
            Seoul Digitech High Schoolⓒ
        </Container>
    )
}

export default footerComponent;

const Container = styled.div`
    margin-top: 10px;
    width: 100vw;
    height: 50px;
    color: #6d6d6d;
    background: #9b9b9b;
    text-align: center;
    line-height: 50px;
`;

