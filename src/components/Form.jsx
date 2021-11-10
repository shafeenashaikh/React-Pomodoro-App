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

    const {register, handleSubmit, errors } = useForm();
    return (
        <Container>
            <Text>Minutes:</Text>
            <form noValidate>
                <input
                    type="number"
                    {...register('test', {required: {value: true, message: "please enter the number of minutes that you wpild like to study.."}},
                                         {min: {value: .01, message: "please enter a number between .01 and 100."}},
                                         {max: {value: true, message: "please enter number between .01 and 100."}}
                    )}      
                 
                >
                </input>
                <input type="submit"></input>
            </form>
            {/* {errors.minutes && <p>{errors.minutes.message}</p>} */}
        </Container>
    )
}

export default Form
