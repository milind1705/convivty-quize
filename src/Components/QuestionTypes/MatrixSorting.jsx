import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import playSound from '../PlaySound'

const MatrixSorting = ({que, mute}) => {
  const [options, setOptions] = useState(que.options);
  const [attempts, setAttempts] = useState(que.attempts);

  const handleSubmit = (e) =>{
    e.preventDefault();
    que.attempts = que.attempts -1 ;
    setAttempts(que.attempts);
    const answer =  options;
    if(checkAns(answer, que.ans)){
      playSound(mute, true);
            que.status = "correct";
        }else{
            playSound(mute, false);
            que.status = "wrong";
        }
   
 
};
const checkAns  = (newAns, orignleAns)=>{

    for (let i = 0; i < newAns.length; i++) {
        if (newAns[i] !== orignleAns[i]) {
            return false
        } 
       
    }
    return true
}
  const onDragEnd = (result)=>{
    console.log(result)
    if(!result.destination){
        return;
    };
    const newOptions = [...options];
    const [removed] = newOptions.splice(result.source.index, 1);
    newOptions.splice(result.destination.index, 0, removed);
    setOptions(newOptions)

}
  return (
   <Box component={"form"} onSubmit={(e)=>{handleSubmit(e)}}>
     <Typography variant='h6'>
            {que.question.statement}
        </Typography>
        <Typography paddingBlock={1}>{`${attempts} attempt(s) left`} </Typography>

    <Grid container columns={2} columnSpacing={1}>
      <Grid item>
        {que.question.choices.map((item, index)=>{
          return(
            <Box component={"div"} sx={{padding:2, border:"solid 1px gold", marginBlock:1}}>
      
        <Typography>{item}</Typography>
      </Box>
          )
        })}
      

      </Grid>
        <Grid item>
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='droppable'>
                {
                    (provided)=>(
                       <Box component={"div"}  {...provided.droppableProps}  
                       ref={provided.innerRef} >
                        
                        {
                             options.map((item, index)=>{
                                return(
                                    <Draggable key={item} draggableId={item.toString()} index={index} isDragDisabled={que.attempts <= 0} >  
                                    {(provided, snapshot) => (  
                                   <Box component={"div"}
                                     ref={provided.innerRef}  
                                     {...provided.draggableProps}  
                                     {...provided.dragHandleProps}  
                                   >  
                                   <Box component={"div"} sx={{padding:2, border:"solid 1px gold", marginBlock:1}}>

                                   <Typography>{item}</Typography>
                                   </Box>
                                    {/* <ListItem item={item} /> */}
                                   </Box>  
                                )}  
                            </Draggable>  
                                )})
                        }
                            {provided.placeholder}
                       </Box>
                          
                    )
                }
         
            </Droppable>
        </DragDropContext>
        </Grid>
    </Grid>
      <Button sx={{margin:2, padding:2, display:"block"}} variant='contained' disabled={que.attempts <= 0}  type='submit'>
            Check
        </Button>
   </Box>
  )
}

export default MatrixSorting