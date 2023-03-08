// import { CheckBox } from '@mui/icons-material'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { Component } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import SendIcon from '@mui/icons-material/Send';
// import "./add.css";
import axios from 'axios';

export default class Add extends Component {
  constructor(props){
    super(props);
    this.state={
      id:0,
      name:"",
      age:0,
      mobilenumber:"",
      email:"",
      designation:"",
      department:"",
      dob:"",
      grade:"",
      salary:""
      
    }
  }
   handleTheChange = (e)=> {
    if (e.target.id === 'eid') {
      var name = e.target.value;
      this.setState({
        id: name,
      });
    } else if (e.target.id === 'Ename') {
      var name1 = e.target.value;
      this.setState({
        name: name1,
      });
    } else if (e.target.id === 'sal') {
      var name3 = e.target.value;
      this.setState({
        sal: name3,
      });
    } else if (e.target.id === 'email') {
      var name4 = e.target.value;
      this.setState({
        email: name4,
      });
    } else if (e.target.id === 'mno') {
      var name5 = e.target.value;
      this.setState({
        mobilenumber: name5,
      });
    } else if (e.target.id === 'dept') {
      var name6 = e.target.value;
      this.setState({
        mobilenumber: name6,
      });
    } else if (e.target.id === 'desig') {
      var name7 = e.target.value;
      this.setState({
        mobilenumber: name7,
      });
    } else if (e.target.id === 'age') {
      var name8 = e.target.value;
      this.setState({
        mobilenumber: name8,
      });
    } else if (e.target.id === 'grd') {
      var name9 = e.target.value;
      this.setState({
        mobilenumber: name9,
      });
    } else if (e.target.id === 'dob') {
      var name10 = e.target.value;
      this.setState({
        mobilenumber: name10,
      });
  };
  }
   handleSubmit = (event) => {
    event.preventDefault();
    const data={
      id:this.state.id,
      name:this.state.name,
      age:this.state.age,
      mobilenumber:this.state.mobilenumber,
      email:this.state.email,
      designation:this.state.designation,
      department:this.state.department,
      dob:this.state.dob,
      grade:this.state.grade,
      salary:this.state.salary
    };
    axios.post('https://localhost:8080/addDetails', data);
  }
  // this.setState({
  //     textFieldValue: e.target.value
  // });


  render() {
    return (
      <div>
      <div class="box">
      <div class="row">
      <Box component="form" sx={{ mt: 3 }}>
      <Typography component="h2" variant="h3"
      style={{margin:"20px",color:"darkcyan"}}>
            <AddBoxIcon fontSize='large'/>ADD DETAILS
          </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                autoComplete="EmployeeId"
                label="Employee Id"
                id="eid"
                name="EmployeeId"
                required
                autoFocus
                fullWidth
                onChange={this.handleTheChange()}
                style={{color:"white"}}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12} >
                <TextField
                autoComplete="Employee Name"
                label="Employee Name"
                id="Ename"
                name="EmployeeName"
                fullWidth
                required
                onChange={this.handleTheChange()}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={this.handleTheChange()}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mno"
                  label="Mobile Number"
                  name="Mobile"
                  autoComplete="Mobile Number"
                  onChange={this.handleTheChange()}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="department"
                  label="Department Name"
                  name="dept"
                  autoComplete="Department"
                  onChange={this.handleTheChange()}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="desig"
                  label="Designation"
                  name="desig"
                  autoComplete="Designation"
                  onChange={this.handleTheChange()}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Age"
                  label="Age"
                  id="age"
                  autoComplete="Age"
                  onChange={this.handleTheChange()}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Grade"
                  label="Grade"
                  id="grd"
                  autoComplete="Grade"
                  onChange={this.handleTheChange()}
                />
              </Grid>
              <br/>
              <br/>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="salary"
                  label="Salary"
                  id="sal"
                  autoComplete="salary"
                  onChange={this.handleTheChange()}
                />
              </Grid>
              <br/>
              <br/> 
              <Grid item xs={12}>
              <TextField
              required
              fullWidth
              name="dob"
              label="Date Of Birth"
              id="dob"
              autoComplete="DateOfBirth"
              onChange={this.handleTheChange()}
              />
              <br/>
              <br/>
              <br/>
              </Grid>
              <Button className="btn1" variant="contained" onClick={this.handleSubmit()} endIcon={<SendIcon />}>Send</Button>
              </Grid>
              
              </Box>
      </div>
      </div>
      </div>
      );
  };
}

