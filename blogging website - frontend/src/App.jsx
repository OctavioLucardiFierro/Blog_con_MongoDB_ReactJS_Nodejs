import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import UserAuthForm from "./pages/userAuthForm.page";

const App = () => {
    return (
        <Routes>
            {/*Beneficios de hacerlo asi, el navbar siempre se renderizando */}
            <Route path="/" element={<Navbar/>}> 
                <Route path="iniciarsesion" element={<UserAuthForm type="Iniciar-Sesion"/>}/>
                <Route path="registrarse" element={<UserAuthForm type="Registrarse"/>}/>
            </Route>
        </Routes>
    )
}

export default App;