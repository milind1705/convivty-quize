import './App.css';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import ResumeTest from './Components/ResuemeTest';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
     
      <Routes>
         <Route path='/' element={<Home />}>
          <Route path='/' element={<ResumeTest />}/>
          <Route path='/quize' element={<Main />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
