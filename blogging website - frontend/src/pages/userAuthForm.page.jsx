import InputBox from "../components/input.component"
import googleLogo from "./../imgs/google.png"
import { Link } from "react-router-dom"

const UserAuthForm = ({type}) =>{
    return (
        <section className="h-cover flex items-center justify-center">
            <form className="w-[80%] max-w-[400px]" action="">
                <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
                    {type == "Iniciar-Sesion" ? "Bienvenido" : "Registrate Hoy"}
                </h1>

                {
                    type != "Iniciar-Sesion"?
                    <InputBox 
                        name="Nombre completo..."
                        type="text"
                        placeholder="Nombre completo"
                        icon="fi-rr-user"
                    />
                    : ""
                }

                <InputBox 
                    name="Email"
                    type="email"
                    placeholder="Email..."
                    icon="fi-rr-envelope"
                />
                <InputBox 
                    name="Cpntraseña"
                    type="password"
                    placeholder="Contraseña..."
                    icon="fi fi-rr-key"
                />
                    
                <button
                    className="btn-dark center mt-14"
                    type="submit">
                        {type.replace("-", " ")}
                </button>

                <div className="relative w-full items-center 
                    flex gap-2 my-10 opacity-10 uppercase text-black font-bold">
                        <hr className="w-1/2 border-black"/>
                        <p>o</p>
                        <hr className="w-1/2 border-black"/>
                </div>

                <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
                    <img src={googleLogo} className="w-5"/>
                    Continuar con Google
                </button>

                {
                    type == "Iniciar-Sesion" ?
                    <p className="mt-6 text-dark-grey text-xl text-center">
                        ¿No tienes una cuenta?
                        <Link to="/registrarse" className="underline text-black
                            text-xl ml-1">
                                Crea una ahora
                        </Link>
                    </p>:<p className="mt-6 text-dark-grey text-xl text-center">
                        ¿Ya tienes una cuenta?
                        <Link to="/iniciarsesion" className="underline text-black
                            text-xl ml-1">
                                Inicia sesión aca
                        </Link>
                    </p>
                }
            </form>
        </section>
    )
}

export default UserAuthForm