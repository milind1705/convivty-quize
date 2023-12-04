import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import playSound from '../PlaySound'
const FiillInBlanks = ({que, mute}) => {
    const [attempts, setAttempts] = useState(que.attempts)

    const question = que.question;
    const regex = /{([^}]+)}/g
    const ans = question.match(regex);
    let removeCurlyBraces = ans.map(match => match.slice(1, -1));
    let finalAns =  removeCurlyBraces.map(item => item.replace(/\[|\]/g, ''))
    let finalAnswer = finalAns[0].split(",")
    const newQuestion = question.replace(regex, '______');
    const handleSubmit = (e) =>{
        e.preventDefault();
        que.attempts = que.attempts -1 ;
        setAttempts(que.attempts);
        const answer =  e.target.answer.value;

        if(finalAnswer.includes(answer)){
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
            {newQuestion}
        </Typography>
        <Typography paddingBlock={1}>{`${attempts} attempt(s) left`} </Typography>
        <FormControl >
            <RadioGroup disabled={que.attempts <= 0}>
            {que.options.map((option)=>{
                return(

                    <FormControlLabel key={option.toString()} name='answer' label={option} value={option} control={<Radio/>} />
                )
            })}
            </RadioGroup>
        </FormControl>

        <Button sx={{margin:2, padding:2, display:"block"}} variant='contained'disabled={que.attempts <= 0} type='submit'>
            Check
        </Button>
    </Box>
  )
}

export default FiillInBlanks