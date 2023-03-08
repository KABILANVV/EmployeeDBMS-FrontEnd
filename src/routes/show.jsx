import React, { Component } from 'react'
import { Table,TableHead,TableCell, TableRow,TableContainer, Paper, TableBody } from '@mui/material';
import axios from "axios";
export default class Show extends Component {
        state = {
        data: []
        }
      
        componentDidMount() {
        axios.get('http://127.0.0.1:8080/showDetails')
          .then(response => {
            this.setState({ data: response.data });
          })
          .catch(error => {
            console.log(error);
          });
      }
    
        render() {   
          return (
            <div>
            <TableContainer component={Paper}>
     <Table aria-label="simple table">
       <TableHead>
         <TableRow>
           <TableCell>S.No</TableCell>
           <TableCell align="right">Id</TableCell>
           <TableCell align="right">Name</TableCell>
           <TableCell align="right">Age</TableCell>
           <TableCell align="right">DateOfBirth</TableCell>
           <TableCell align="right">Mobile Number</TableCell>
           <TableCell align="right">Designation</TableCell>
           <TableCell align="right">Department</TableCell>
           <TableCell align="right">grade</TableCell>
           <TableCell align="right">Salary</TableCell>
           <TableCell align="right">Email</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {this.state.data.map((row) => (
           <TableRow key={row.id}>
             <TableCell component="th" scope="row">
               {row.id}
             </TableCell>
             <TableCell align="right">{row.id}</TableCell>
             <TableCell align="right">{row.name}</TableCell>
             <TableCell align="right">{row.age}</TableCell>
             <TableCell align="right">{row.dob}</TableCell>
             <TableCell align="right">{row.mobilenumber}</TableCell>
             <TableCell align="right">{row.designation}</TableCell>
             <TableCell align="right">{row.department}</TableCell>
             <TableCell align="right">{row.grade}</TableCell>
             <TableCell align="right">{row.salary}</TableCell>
             <TableCell align="right">{row.email}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
            </div>  
            
            );
          }}
          