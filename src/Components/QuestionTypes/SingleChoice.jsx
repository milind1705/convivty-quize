import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import playSound from '../PlaySound'

const SingleChoice = ({que, mute}) => {
    const question = que.question;
    const [attempts, setAttempts] = useState(que.attempts)

    const handleSubmit = (e) =>{
        e.preventDefault();
        que.attempts = que.attempts -1 ;
        setAttempts(que.attempts);
        const answer =  e.target.answer.value;

        if(que.ans.toString() === answer){
            playSound(mute, true);
            que.status = "correct";
        }else{
            playSound(mute, false);
            que.status = "wrong";
        }
    }
  return (
    <Box component={"form"} onSubmit={(e)=>handleSubmit(e)}>
        <Typography variant='h6'>
            {question}
        </Typography>
        <Typography paddingBlock={1}>{`${attempts} attempt(s) left`} </Typography>

        <FormControl >
            <RadioGroup disabled={que.attempts <= 0}>
            {que.options.map((option)=>{
                return(

                    <FormControlLabel name='answer' label={option} value={option} control={<Radio/>} />
                )
            })}
            </RadioGroup>
        </FormControl>

        <Button sx={{margin:2, padding:2, display:"block"}} variant='contained' disabled={que.attempts <= 0} type='submit'>
            Check
        </Button>
    </Box>
  )
}

export default SingleChoice