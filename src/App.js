
import { Box, Typography } from '@mui/material';
import './App.css';
import PrimarySearchAppBar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Box>
        <PrimarySearchAppBar />
        <Home />
      </Box>
    </div>
  );
}

export default App;
