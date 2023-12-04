import { Box } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import PrimarySearchAppBar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <Box>
      <PrimarySearchAppBar />
      <Box sx={{
          display:"flex",
          flexDirection:"row"
      }}>
          <Sidebar />
          <Outlet />
          {/* <Main /> */}
      </Box>
    </Box>
  )
}

export default Home