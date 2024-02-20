import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import Useeffect from './components/Useeffect';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Useeffect/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/c' element={<counter/>}/>
      </Routes>

     
    </div>
  );
}

export default App;