import { Typography,Button,TextField } from '@mui/material'
import React,{useState} from 'react'


const Signup = () => {
    var[data,setData]= useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }


  return (
    <div>
        <h1>Sign Up</h1>
        <TextField variant='outlined' label='username' name='fname' onChange={inputHandler}/>&nbsp;
        <br /><br />
        <TextField variant='outlined' label='password' name='password' onChange={inputHandler}/>&nbsp;&nbsp;
        <br /><br />
        <TextField variant='outlined'label='Email' name='Email' onChange={inputHandler}/>
        <br /><br />
        <Button variant='contained'>submit</Button>
        
        
        
    </div>
  )
}

export default Signup