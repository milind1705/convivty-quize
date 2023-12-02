import React from 'react';
import { Card, CardContent, Typography, Button, Box, TextField } from '@mui/material';
import FreeAns from './QuestionTypes/FreeAns';
import FiillInBlanks from './QuestionTypes/FillBlanks';

const QuestionCard = ({ question }) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    const answer =  e.target.ans.value.trim();
    // console.log(answer, que.ans)
    if(question.ans.includes(answer)){
        alert("correct")
    }else{
        alert("wrong answer")
    }
}
  return (
    <Card sx={{ maxWidth:"50%", paddingBlock:1, marginBlock:2}}>
      <CardContent sx={{textAlign: "start"}}>
        {
          question.type == "free_ans" ?  <FreeAns que={question} /> : <FiillInBlanks que={question} />
        }
        
        {/* <Typography variant='h5'>{question.question}</Typography> */}
        
        {/* <Box component={"form"} onSubmit={(e)=>handleSubmit(e)}>

        <Button sx={{marginLeft:2, padding:2}} variant='contained' type='submit'>
            Check
        </Button>
    </Box> */}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;