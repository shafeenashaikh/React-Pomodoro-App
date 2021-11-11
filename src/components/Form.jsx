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

function Form({setTimeLeft}) {

    const {register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data.minutes);
        $('#pomodoro-form').trigger("reset");
        setTimeLeft(data.minutes*60);
    };

    return (
        <>
        <Container>
            <Text>Minutes:</Text>
            <form noValidate onSubmit={handleSubmit(onSubmit)} id='pomodoro-form'>
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
