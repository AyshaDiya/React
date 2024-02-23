import { Table, TableBody, TableCell,TableContainer, TableHead, TableRow, TextField,Button} from '@mui/material'

import React,{useState} from 'react'


const Mapping = () => {
    var[snames,setNames]=useState(
        [
            {"sname":"diya","age":20},
            {"sname":"maya","age":21},
            {"sname":"miya","age":22}
        ]
    )    
   
    
 return(

    <div>
        
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red', fontFamily:'cursive',fontSize:'50px'}}>Names</TableCell>
                        <TableCell style={{color:'red', fontFamily:'cursive',fontSize:'50px'}}>Age</TableCell>



                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {snames.map((v,i)=>{
                        return (
                            <TableRow>
                                <TableCell>{v.sname}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <br /><br /><br />
        <TextField variant='outlined' label='text'/>
        <br /><br /><br />
        <Button variant="contained">submit</Button>

    </div>
    
                    )}

export default Mapping