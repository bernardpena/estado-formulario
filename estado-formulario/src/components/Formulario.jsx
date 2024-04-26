import React from 'react'

export default function Formulario() {
    return (
            <form className='formIngreso'>
                <div className="container">
                <div className="mb-3 formIngresoDiv">
                    <h1 className='titulo' >Crea una Cuenta</h1>
                    <div>
                        <h3 className='iconos'>Iconos</h3>
                    </div>
                    <div>
                        <h4 className='mensaje'>o usa tu email para registrarte</h4>
                    </div>
                    <div className="mb-3 infoPersona">
                        <div className="mb-3">
                            <input type="text" className='form-control nombre' />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control email" aria-describedby="emailHelp" />
                        </div>
                    </div>

                </div>
                <div className="mb-3">
                    <input type="password" className="form-control password" />
                 </div>
                 <div className="mb-3">
                    <input type="password" className="form-control confirmPassword" />
                 </div>
                <div className="mb-3">
                <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
                </div>
            </form>
            
    )
}
