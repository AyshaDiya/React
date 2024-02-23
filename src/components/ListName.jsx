import { TextField,Button} from '@mui/material';
import React, { useState } from 'react'

const ListName = () => {
    var[data,setData]=useState(["ICTAK"]);
    var[inp,setInp]=useState("");
    const inputHandle=(e)=>{
        console.log("on")
        setInp(e.target.value)
        console.log("inp",inp)
    
    }
    const add=()=>{
        console.log("c")
        setData([...data,inp]);
        console.log("sub",inp)
       
    }

    return(
        <div style={{marginTop:"50px"}}>
            <TextField variant='outlined' label="enter your name" 
            onChange={inputHandle}/>
            <Button variant='outlined' onClick={add}>submit</Button>
            <br /><br />
            <ul>
            {data.map((v,i)=>{
                return(
                    <li key={i}>{v}</li>
                )
                })}
            </ul>
        </div>
    )

    

  
}

export default ListName