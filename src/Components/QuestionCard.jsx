import React from 'react';
import { Card, CardContent, Typography, Button, Box, TextField } from '@mui/material';
import FreeAns from './QuestionTypes/FreeAns';
import FiillInBlanks from './QuestionTypes/FillBlanks';
import Sorting from './QuestionTypes/Sorting';
import SingleChoice from './QuestionTypes/SingleChoice';
import SelectMultiple from './QuestionTypes/SelectMultiple';
import MatrixSorting from './QuestionTypes/MatrixSorting';

const QuestionCard = ({ question, mute, setStatus }) => {
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
    <Card sx={{ maxWidth:"50%", minWidth:"20vw", paddingBlock:1, marginBlock:2}}>
      <CardContent sx={{textAlign: "start"}}>
        {
           question.type === "fill_in_the_blanks" ?  <FiillInBlanks que={question} mute={mute}/> : question.type === "single_choice" ?  <SingleChoice que={question} mute={mute} /> : question.type === "select_multiple" ?  <SelectMultiple que={question} mute={mute} /> : question.type === "sorting" ? <Sorting que={question} mute={mute} /> : question.type === "matrix_sorting" ? <MatrixSorting que={question} mute={mute}/> : <FreeAns que={question} mute={mute} />
        }
        
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
