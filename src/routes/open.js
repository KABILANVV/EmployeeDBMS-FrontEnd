import React from 'react'
import { Link } from 'react-router-dom';
import "./open.css"

import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ChangeCircleTwoToneIcon from '@mui/icons-material/ChangeCircleTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

function Open() {
  return (
    <div class="menu">
    <div class="main">
            
            <div class="work">
                <br/>
                <div class="d1">
                <Link to='/show'><button>SHOW<VisibilityTwoToneIcon/></button></Link><br/><br />
                <Link to='/add'><button>ADD<AddBoxTwoToneIcon/></button></Link><br/><br/>
                <Link to='/update'><button>Update<ChangeCircleTwoToneIcon/></button></Link><br/><br />
                <Link to='/delete'><button>Delete<DeleteTwoToneIcon/></button></Link><br/><br/>
                </div>
            </div>
            </div>
        </div>
  )
}

export default Open