import React from 'react'
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import * as $ from 'jquery'

const Container = styled.div`
    display:flex;
    justify-content: center;
`

const Text = styled.p`
   margin: 0px 0px
`

function Form() {

    const {register, handleSubmit, errors } = useForm();

    const onsubmit = data => {
        console.log(data);
        $('#pomodoro-form').trigger("reset")
    };

    return (
        <>
        <Container>
            <Text>Minutes:</Text>
            <form noValidate onSubmit={handleSubmit(onsubmit)} id='pomodoro-form'>
                <input
                    type='number'
                    name='minutes'
                    id='minutes-input'
                    {...register('test', {required: {value: true, message: "please enter the number of minutes that you wpild like to study.."}},
                                         {min: {value: .01, message: "please enter a number between .01 and 100."}},
                                         {max: {value: true, message: "please enter number between .01 and 100."}}
                    )}      
                 
                >
                </input>
                <input type="submit"></input>
            </form>
          </Container>
            {errors && <p>{errors.message}</p>}
        </>
    )
}

export default Form
