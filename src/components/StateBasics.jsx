import { Typography,TextField,Button } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var[fname,setFname]=useState("Diya");
    var[val,setval]=useState();
    
    const handleInput=(e)=>{
        // console.log(e.target.value);
        setval(e.target.value);
        console.log(val);
    }
    const submitHandler=()=>{
        console.log("clicked");
        setFname(val);
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {fname}</Typography>
        <br /><br />
        <TextField variant="outlined" onChange={handleInput} label="type your name"/>
        <br /><br />
        <Button variant="contained" onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default StateBasics