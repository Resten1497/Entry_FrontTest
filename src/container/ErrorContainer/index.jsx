import React from 'react'
import styled from 'styled-components';

function Error(){
    return(
        <Container>
            <div>
                <Text>에러가 발생했습니다.</Text>
                <Text>관리자에게 요청하세요.</Text>
            </div>
        </Container>
    )
}

export default Error;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: rgba(0, 0, 0, 0.25);
`;