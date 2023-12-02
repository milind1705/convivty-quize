import { Box, Button, ListItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const Sorting = ({que}) => {
    const [options, setOptions] = useState(que.options)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const answer =  options;
        alert(checkAns(answer, que.ans))
       console.log(checkAns(answer, que.ans))
     
    };
    const checkAns  = (newAns, orignleAns)=>{

        for (let i = 0; i < newAns.length; i++) {
            if (newAns[i].id !== orignleAns[i].id || newAns[i].option !== orignleAns[i].option) {
                return false
            } 
           
        }
        return true
    }
    const onDragEnd = (result)=>{
        console.log(result)
        if(!result.destination.droppableId) return;
        const newOptions = [...options];
        const [removed] = newOptions.splice(result.source.index, 1);
        newOptions.splice(result.destination.index, 0, removed);
        setOptions(newOptions)

    }
  return (
    <Box component={"form"} onSubmit={(e)=>handleSubmit(e)}>
        <Typography variant='h4'>
            {que.question}
        </Typography>
      
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='droppable'>
                {
                    (provided)=>(
                       <Box component={"div"}  {...provided.droppableProps}  
                       ref={provided.innerRef} >
                        
                        {
                             options.map((item, index)=>{
                                return(
                                    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>  
                                    {(provided, snapshot) => (  
                                   <Box component={"div"}
                                     ref={provided.innerRef}  
                                     {...provided.draggableProps}  
                                     {...provided.dragHandleProps}  
                                   >  
                                   <Box component={"div"} sx={{padding:2, border:"solid 1px gold", marginBlock:1}}>

                                   <Typography>{item.option}</Typography>
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

        <Button sx={{margin:2, padding:2, display:"block"}} variant='contained' type='submit'>
            Check
        </Button>
    </Box>
  )
}

export default Sorting