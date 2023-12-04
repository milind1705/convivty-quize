import { Box, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{
        width:1/4,
        overflowY: 'auto',
         minHeight: '100vh',
        background:"#CFC89A"
    }}>
      <Box component={"div"} sx={{
        paddingBlock:2,
        border:"1px transperent ",
        marginBlock: 10,
        cursor:"pointer"
      }} onClick={()=>{
        navigate("/")
      }}> 
        <Typography variant='h6' color={"#301014"}>Task Quize</Typography>
      </Box>
    </Box>
  )
}

export default Sidebar