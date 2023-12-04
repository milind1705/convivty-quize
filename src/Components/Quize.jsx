import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import CheckIcon from '@mui/icons-material/Check';
import questionBank from '../Quentions_bank/questionBank';
import QuestionCard from './QuestionCard';
import ClearIcon from '@mui/icons-material/Clear';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
const Quize = () => {
  const [mute, setMute] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questionBank[0]);
  const [status, setStatus]  = useState("active");
  const [flag, setFlag] = useState(false);

  const handleNext = ()=>{
    currentQuestion.status = currentQuestion.status === "active" ? "not visited" : currentQuestion.status;
    console.log(currentQuestion)
    let currentIndex = questionBank.indexOf(currentQuestion);
    
    setCurrentQuestion(questionBank[currentIndex + 1])
    if(currentQuestion.status !== "flag"){
      if(currentQuestion.attempts > 0){

        setFlag(false)
        // currentQuestion.status = "active";
      }
    }else{
      setFlag(true)
    }

  }
  useEffect(()=>{

    if(currentQuestion.status !== "flag"){
      if(currentQuestion.attempts > 0){

        setFlag(false)
        currentQuestion.status = "active";
      }
    }else{
      setFlag(true)
    }

  },[currentQuestion]);

  const handleFlag = () =>{
    setFlag(!flag);
    currentQuestion.status = flag ?   "active" :  "flag";
    console.log(currentQuestion)
  };
  const handleSelectQuestion = (q)=>{
    currentQuestion.status = currentQuestion.status === "active" ? "not visited" : currentQuestion.status;
    setCurrentQuestion(q);
    console.log(q)
    if(q.status !== "flag"){
      if(q.attempts > 0){
        setFlag(false)
        q.status = "active";
      }
    }else{
      setFlag(true)
    }
  }


  return (
    <Box
      component="div"
      sx={{
        paddingTop: 10,
        paddingLeft: 4, 
        marginBlock:2
      }}
    >
        <Box component={"div"} sx={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 2,
        }} >

      <Typography variant="h3">Task Quize</Typography>

      <Button
        variant="contained"
        sx={{ background: 'green', borderRadius: '20%', marginLeft: 2 }}
        size="large"
        onClick={() => setMute(!mute)}
      >
        {mute ? <VolumeOffIcon /> : <VolumeUpIcon />}
      </Button>
        </Box>

      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          paddingTop: 2,
        }}
      >
        {questionBank.map((que, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              background: que.status === "active" ? "purple": que.status === "flag" ? "orange" : que.status === "correct" ? "green": que.status === "wrong" ? "red" : "white",
              borderRadius: '50%',
              padding: 2,
              color:"black",
              marginLeft: index === 0 ? 0 : 2, 
            }}
            size="large"
            onClick={() => handleSelectQuestion(que)}
          >
            <Typography variant="h6">{que.id}</Typography>
            {que.status === "active" ? "": que.status === "flag" ? <TurnedInIcon/> : que.status === "correct" ? <CheckIcon />: que.status === "wrong" ? <ClearIcon /> : ""}
          </Button>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{ display:"block", background: 'orange', padding: 1, marginBlock: 2, marginLeft: 2 }}
        size="large"
        onClick={()=>{handleFlag()}}
      >
        <Typography variant="body1">{ flag ? "Unflag": "Flag"}</Typography>
      </Button>

      <Box component={"div"} sx={{
        display:"block"
      }}>
                <QuestionCard question={currentQuestion} mute={mute} setStatus={setStatus}/>

      </Box>
        <Button sx={{marginLeft:2, padding:2, display:"block", background:"green"}} variant='contained' type='submit' disabled={questionBank.indexOf(currentQuestion) === questionBank.length -1 }  onClick={()=>{handleNext()}}>
            <Typography>Next</Typography>
        </Button>
    </Box>
  );
};

export default Quize;
