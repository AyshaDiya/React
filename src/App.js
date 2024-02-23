import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Signup from './components/Signup';
import Useeffect from './components/Useeffect';
import {Route, Routes } from 'react-router-dom';
import Mapping from './components/Mapping';
import ListName from './components/ListName';
import Api from './components/Api';
import GridGet from './components/GridGet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Useeffect/> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/C' element={<counter/>}/>
        <Route path='/Sign' element={<Signup/>}/>
        <Route path='/t' element={<Mapping/>}/>
        <Route path='/I' element={<ListName/>}/>
        <Route path ='/A'element={<Api/>}/>
        <Route path='/b' element={<GridGet/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
