import React from 'react'

export default function Formulario() {
    return (
        <form className='formIngreso'>
            <div className="container">
                <div className="mb-3 formIngresoDiv">
                    <h1 className='titulo' >Crea una Cuenta</h1>
                    <div>
                        <div className="footer-icon">
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 className='mensaje'>o usa tu email para registrarte</h4>
                    </div>
                    <div className="mb-3 infoPersona">
                        <div className="mb-3">
                            <input type="text" placeholder="Nombre" className='form-control nombre' />
                        </div>
                        <div className="mb-3">
                            <input type="email" placeholder="tuemail@ejemplo.com" className="form-control email" aria-describedby="emailHelp" />
                        </div>
                    </div>


                    <div className="mb-3 infoPass">
                        <input type="password" placeholder="contraseña" className='form-control password' />
                    </div>
                    <div className="mb-3">
                        <input type="password" placeholder="confirme contraseña" className="form-control confirmPassword" />
                    </div>
                    <div className="mb-3 d-grid gap-2">
                        <button type="submit" className="btn btn-success">Registrarse</button>
                    </div>
                </div>
            </div>
        </form>

    )
}
