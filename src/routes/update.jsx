import axios from 'axios';
import React, { useState } from 'react'

export default function Update() {
    const [id, setId] = useState('');
    const [name, setEmpName] = useState("");
    const [Dept, setDeptName] = useState("");
    const [Desig, setDes] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [age, setAge] = useState("");
    const [Email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [salary, setSal] = useState("");
    const [grade, setGrade] = useState("");
   
    
 
    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.put("http://localhost:8080/updateDetails",
        {
        
          id:id,
          name:name,
          age:age,
          mobilenumber:phoneNumber,
          email:Email,
          designation:Desig,
          department:Dept,
          dob:dateOfBirth,
          grade:grade,
          salary:salary
        });
          alert("Details Updated");
        
        
        }
    catch(err)
        {
          alert("Updation Failed");
        }
   }
    return (

        <div class="container mt-4"  style={{ display: 'block', 
        width: 700, 
        padding: 30 }}>
          <center><h1>Enter The Details To Update</h1></center>
        <form>
        <div class="form-group">
            <label><span>Employee Id</span></label>
            <input type="text" class="form-control" placeholder="Enter Id"
             value={id}
            onChange={(event) =>
              {
                setId(event.target.value);      
              }}
            />
        </div>
        <div class="form-group">
            <label><span>Employee Name</span></label>
            <input type="text" class="form-control" placeholder="Enter Emplyee Name"
             value={name}
            onChange={(event) =>
              {
                setEmpName(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Department</span></label>
            <input type="text" class="form-control" placeholder="Enter Department"
             value={Dept}
            onChange={(event) =>
              {
                setDeptName(event.target.value);      
              }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Designation</span></label>
            <input type="text" class="form-control" placeholder="Enter Designation"
             value={Desig}
             onChange={(event) =>
               {
                setDes(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Age</span></label>
            <input type="text" class="form-control" placeholder="Enter age"
             value={age}
             onChange={(event) =>
               {
                setAge(event.target.value);      
               }}
            />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>DateOfBirth</span></label>
            <input type="text" class="form-control" placeholder="Enter DOB"
            value={dateOfBirth}
            onChange={(event) =>
              {
                setDateOfBirth(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Salary</span></label>
            <input type="text" class="form-control" placeholder="Enter Salary"
            value={salary}
            onChange={(event) =>
              {
                setSal(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>PhoneNumber</span></label>
            <input type="text" class="form-control" placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(event) =>
              {
                setPhoneNumber(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Grade</span></label>
            <input type="text" class="form-control" placeholder="Enter Grade"
            value={grade}
            onChange={(event) =>
              {
                setGrade(event.target.value);      
              }}
           />
        </div>
        <br></br>
        <div class="form-group">
            <label><span>Email</span></label>
            <input type="text" class="form-control" placeholder="Enter Email"
            value={Email}
            onChange={(event) =>
              {
                setEmail(event.target.value);      
              }}
           />
        </div>
        <br></br>
       <center> <button type="submit" class="btn btn-primary mt-4"  onClick={save}>Update</button></center>
        </form>

 
    </div>

  )
}
