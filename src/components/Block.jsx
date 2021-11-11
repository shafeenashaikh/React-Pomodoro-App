import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    font-size: 40px;
`

const Block= ({number,param}) => {
    return (
        <div align='center'>
            <Text>{number}</Text>
            <h1>{param}</h1>
        </div>
    )
}

export default Block
