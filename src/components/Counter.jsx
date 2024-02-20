import { Typography,Button,TextField } from '@mui/material'
import React,{useState} from 'react'

const Counter = () => {
    var [count,setCount]=useState(0);
    const add=()=>{
        console.log("add btn clicked");
        setCount(count+1);

    }
    const sub=()=>{
        console.log("sub btn clicked");
        setCount(count-1);
    }
     return (
    <div>
        <Typography variant ='h3'>count:{count}</Typography>
        <br /><br /><br />
    
        <Button variant="contained" color="success">+</Button>&nbsp;
        <Button variant="contained" color="error">-</Button>
        <Button variant="contained" onClick={add}></Button>
    </div>
  )
  }

export default Counter