import React from 'react'
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    justify-content: center;
`

const Text = styled.p`
   margin: 0px 0px
`

function Form() {
    return (
        <Container>
            <Text>Minutes:</Text>
            <form>
                <input type="number"></input>
                <input type="submit"></input>
            </form>
        </Container>
    )
}

export default Form
