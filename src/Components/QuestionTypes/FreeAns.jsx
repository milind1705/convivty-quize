import { Box, Button, Input, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import playSound from '../PlaySound'
const FreeAns = ({que, mute, setStatus}) => {
    let ansArray = que.ans.map(item => item.toString())
    // console.log(ansArray)
    const [attempts, setAttempts] = useState(que.attempts)
    const handleSubmit = (e) =>{
        e.preventDefault();
        que.attempts = que.attempts -1 ;
        setAttempts(que.attempts);

        const answer =  e.target.ans.value.trim();
        playSound(mute, ansArray.includes(answer))
        if(ansArray.includes(answer)){
        que.status = "correct";
        }else{
            que.status = "wrong";
        }
        console.log(que)
    }
    useEffect(()=>{
        console.log(que.attempts)
    }, [que.attempts])
  return (
    <Box component={"form"} onSubmit={(e)=>handleSubmit(e)}>
        <Typography variant='h6'>
            {que.question}
        </Typography>
        <Typography paddingBlock={1}>{`${attempts} attempt(s) left`} </Typography>
        <TextField label="Answer" name='ans' variant='outlined' disabled={que.attempts <= 0} required/>

        <Button sx={{margin:2, padding:2, display:"block"}} variant='contained' disabled={que.attempts <= 0} type='submit'>
            Check
        </Button>
    </Box>
  )
}

export default FreeAns