
import { Box, Typography } from '@mui/material';
import './App.css';
import PrimarySearchAppBar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Restart from './Components/Restart';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
     
      <Routes>
         <Route path='/' element={<Home />}>
          <Route path='/' element={<Restart />}/>
          <Route path='/quize' element={<Main />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
