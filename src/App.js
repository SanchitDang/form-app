import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './pages/Form'
import Submitted from './pages/Submitted';

function App() {

  return(

  <BrowserRouter>
    <Routes>     
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Submitted" element={<Submitted/>}/>
    </Routes>
  </BrowserRouter>

  ) 
  
}

export default App;
