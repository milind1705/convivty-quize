import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import success from "../assets/wrong.mp3"
import CheckIcon from '@mui/icons-material/Check';
import questionBank from "../Quentions_bank/questionBank"
import FreeAns from './QuestionTypes/FreeAns';
const Quize = () => {
    const [mute, setMute] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(questionBank[0])
    let correct = new Audio(success);
    console.log(correct)
  return (
    <Box component={"div"} sx={{
        paddingTop:10
    }}>
        <Typography variant='h3'>Task Quize</Typography>

        <Button variant='contained' sx={{background:"green", borderRadius:"20%"}} size='large' onClick={()=>correct.play()}>
            {
                mute ? <VolumeOffIcon /> : <VolumeUpIcon />
            }
            
        </Button>

        <Box component={"div"} sx={{
            // display:"flex",
            // flexDirection:"row",
            // justifyContent:"space-between"
        }} justifyContent={"space-between"} paddingTop={2}>

        {questionBank.map((que)=>{
            return(
                    <Button variant='contained'  sx={{background:"green", borderRadius:"50%", padding:3}} size='large' onClick={()=>{setCurrentQuestion(que)}} >
                      <Typography variant='h6'>{que.id}</Typography>
                    <CheckIcon />
        </Button>
            )
        })}
        </Box>

        <Button  variant='contained'  sx={{background:"orange",  padding:3, marginBlock:2}} size='large' >
                      <Typography variant='p'>FLag</Typography>
        </Button>

       <Box>
        <FreeAns que={currentQuestion} />
       </Box>
        
    </Box>
  )
}

export default Quize