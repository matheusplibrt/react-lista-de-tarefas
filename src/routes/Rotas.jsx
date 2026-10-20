import { BrowserRouter, Route, Routes } from "react-router";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Naoencontrada from "../pages/Naoencontrada";

const Rotas = () => {
    return ( 
        <BrowserRouter>
        <Routes>
             <Route path="/" element={<Login/>}/>
             <Route path="/cadastro" element={<Cadastro/>}/>
             <Route path="/*" element={<Naoencontrada/>}/>
        </Routes>
        </BrowserRouter>
     );
}
 
export default Rotas;