import Home from './Pages/Home';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom"
import Registro from './Pages/Registro';
import Menu from './Components/Menu';
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Detalle from './Pages/Detalle';


    



function Public(){

return(

    <div>

<Router>

<Menu />
    
  <Routes>
    <Route path="/home" element={<Home/>}    />
    <Route path="/registro" element={<Registro/>} />
    <Route path="/login" element={<Login/>} />
    
    <Route path="/detalle/:id" element={<Detalle/>} />
    
</Routes>



</Router>
<Footer/>



</div>



)




}
export default Public;