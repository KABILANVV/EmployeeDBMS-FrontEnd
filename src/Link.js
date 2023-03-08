
import { Route, Routes } from 'react-router-dom';
import Add from './routes/add';
import Deleteform from './routes/delete';
import LoginSignUp from './routes/login';
import Open from './routes/open';
import Show from './routes/show';
import Update from './routes/update';
function Linking() {
  return (
<div>
<Routes>
<Route path="/" element={<Open/>}/>
<Route path="/add" element={<Add/>}/>
<Route path="/show" element={<Show/>}/>
<Route path="/update" element={<Update/>}/>
<Route path="/delete" element={<Deleteform/>}/>
<Route path="/login" element={<LoginSignUp/>}/>
</Routes>
</div>
  );
}
 
export default Linking;