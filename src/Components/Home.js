import { Box } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

const Home = () => {
  return (
    <Box sx={{
        display:"flex",
        flexDirection:"row"
    }}>
        <Sidebar />
        <Main />
    </Box>
  )
}

export default Home