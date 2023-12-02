import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

const FiillInBlanks = ({que}) => {
    const question = que.question;
    const regex = /{([^}]+)}/g
    const ans = question.match(regex);
    let removeCurlyBraces = ans.map(match => match.slice(1, -1));
    let finalAns =  removeCurlyBraces.map(item => item.replace(/\[|\]/g, ''))
    let finalAnswer = finalAns[0].split(",")
    const newQuestion = question.replace(regex, '______');
    const handleSubmit = (e) =>{
        e.preventDefault();
        const answer =  e.target.answer.value;

        if(finalAnswer.includes(answer)){
            alert("correct")
        }else{
            alert("wrong answer")
        }
    }
  return (
    <Box component={"form"} onSubmit={(e)=>handleSubmit(e)}>
        <Typography variant='h4'>
            {newQuestion}
        </Typography>
        
        <FormControl >
            <RadioGroup>
            {que.options.map((option)=>{
                return(

                    <FormControlLabel name='answer' label={option} value={option} control={<Radio/>} />
                )
            })}
            </RadioGroup>
        </FormControl>

        <Button sx={{margin:2, padding:2, display:"block"}} variant='contained' type='submit'>
            Check
        </Button>
    </Box>
  )
}

export default FiillInBlanks