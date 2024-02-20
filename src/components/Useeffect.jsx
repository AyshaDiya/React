import { Typography,TextField,Button } from '@mui/material'
import React,{useState} from 'react'

const Useeffect = () => {
    var[x,setData]=useState();
    const Input=()=>{
        setData("react");
    }
    const inp2=()=>{
        setData("angular");
    }
    const inp3=()=>{
        setData("next");
    }
    
    
  return (
    <div>
        <br /><br /><br />
        <Typography>welcome to {x}</Typography>
        <br /><br /><br /><br />
        <Button variant='contained'color='primary' onclick={Input}>React</Button>&nbsp;
        <Button variant='contained'color='primary' onclick={inp2}>Angular</Button>&nbsp;
        <Button variant='contained' color='primary' onclick={inp3}>next</Button>

    </div>
  )
}

export default Useeffect