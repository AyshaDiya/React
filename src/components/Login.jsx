import { TextField, Typography,Button } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br/><br/>
        <h1>login page</h1>
        <input placeholder='username'/>
        <br/><br/>
        <input placeholder='password'/>
        <br/><br/>
        <button>submit</button>
        <br /><br /><br /><br />
        <Typography variant='h4'>login page</Typography>
        <br /><br />
        <TextField variant='outlined' label='username'/>&nbsp;&nbsp;
    
        <TextField variant='filled' label='password'/>&nbsp;&nbsp;
        <br /><br />
        <TextField variant='standard'label='Email'/>
        
        <Button variant="text">Text</Button>
    
        
    </div>
  )
}

export default Login