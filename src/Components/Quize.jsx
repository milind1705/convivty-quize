import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import success from '../assets/wrong.mp3';
import CheckIcon from '@mui/icons-material/Check';
import questionBank from '../Quentions_bank/questionBank';
import FreeAns from './QuestionTypes/FreeAns';
import QuestionCard from './QuestionCard';

const Quize = () => {
  const [mute, setMute] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(questionBank[0]);
  let correct = new Audio(success);

  return (
    <Box
      component="div"
      sx={{
        paddingTop: 10,
        paddingLeft: 4, 
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
        onClick={() => correct.play()}
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
              background: 'green',
              borderRadius: '50%',
              padding: 2,
              marginLeft: index === 0 ? 0 : 2, 
            }}
            size="large"
            onClick={() => setCurrentQuestion(que)}
          >
            <Typography variant="h6">{que.id}</Typography>
            <CheckIcon />
          </Button>
        ))}
      </Box>

      <Button
        variant="contained"
        sx={{ display:"block", background: 'orange', padding: 1, marginBlock: 2, marginLeft: 2 }}
        size="large"
      >
        <Typography variant="body1">FLag</Typography>
      </Button>

      <Box component={"div"} sx={{
        display:"block"
      }}>
                <QuestionCard question={currentQuestion}/>

      </Box>
        {/* <Button sx={{marginLeft:2, padding:2, display:"block"}} variant='contained' type='submit'>
            Check
        </Button> */}
    </Box>
  );
};

export default Quize;
