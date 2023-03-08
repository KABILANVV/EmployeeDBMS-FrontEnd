import React from 'react';
import axios from 'axios';
import { useState} from 'react';


function Deleteform() {
    const [id, setId] = useState();
    function del() {
        // useEffect(() => {
        axios.delete('http://localhost:8080/deleteDetails/' + id);
        alert("User Deleted");
    }
    return (
        <div>  <center>
            <h2>Delete The Details</h2>
            <div>

                <input type="number" placeholder='Enter ID Number' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            </div>

            <button type="submit" class="btn btn-primary" onClick
                ={del}>Submit</button>
                </center>
          
          
        </div>
    );
}

export default Deleteform;