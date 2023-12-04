import { Box, Button, Typography } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Restart = () => {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate("/quize")
  }
  return (
    <Box sx={{padding:4}} component={"div"}>
            <Button sx={{display:"block", marginBlock:10, background:"green"}} variant='contained' onClick={()=>handleClick()}>
                <Typography>Resume Test</Typography>
            </Button>
    </Box>
  )
}

export default Restart