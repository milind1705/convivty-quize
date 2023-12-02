import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'

const SingleChoice = ({que}) => {
    const question = que.question;
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        const answer =  e.target.answer.value;

        if(que.ans.toString() === answer){
            alert("correct")
        }else{
            alert("wrong answer")
        }
    }
  return (
    <Box component={"form"} onSubmit={(e)=>handleSubmit(e)}>
        <Typography variant='h4'>
            {question}
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

export default SingleChoice