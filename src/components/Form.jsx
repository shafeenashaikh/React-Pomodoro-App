import React from 'react'
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import * as $ from 'jquery';

const Container = styled.div`
    display:flex;
    justify-content: center;
`;

const Input = styled.input`
    font-size: 20px;
    padding: 5px;
    margin: 0px 5px;
`;

const Text = styled.p`
    margin: 5px 5px;
    font-size: 20px;
`;

const Form = ({setTimeLeft, setIsPaused}) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data.minutes);
        $('#pomodoro-form').trigger("reset");
        setTimeLeft(data.minutes*60);
        setIsPaused(false);
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
                <Input type='submit'/>
            </form>
        </Container>
        <div align='center'>{errors && <p>{errors.minutes.message}</p>}</div>
        </>
    )
}

export default Form