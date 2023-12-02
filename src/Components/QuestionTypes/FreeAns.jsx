import { Box, Button, Input, TextField, Typography } from '@mui/material'
import React from 'react'

const FreeAns = ({que}) => {
    let ansArray = que.ans.map(item => item.toString())
    console.log(ansArray)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const answer =  e.target.ans.value.trim();
        if(ansArray.includes(answer)){
            alert("correct")
        }else{
            alert("wrong answer")
        }
    }
  return (
    <Box component={"form"} onSubmit={(e)=>handleSubmit(e)}>
        <Typography variant='h4'>
            {que.question}
        </Typography>
        <TextField label="Answer" name='ans' variant='outlined' required/>

        <Button sx={{margin:2, padding:2, display:"block"}} variant='contained' type='submit'>
            Check
        </Button>
    </Box>
  )
}

export default FreeAns