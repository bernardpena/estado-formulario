import React from 'react'

export default function Formulario() {
    return (
        <div>
            <form>
                <div className="mb-3 formIngreso">
                    <h1>Crea una Cuenta</h1>
                    <div>
                        <h3>Iconos</h3>
                    </div>
                    <div>
                        <h4>o usa tu email para registrarte</h4>
                    </div>
                    <div>
                        <input type="text" className='form-control nombre' />
                    </div>
                    <input type="email" className="form-control email" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">

                    <input type="password" className="form-control password" />
                    <input type="password" className="form-control confirmPassword" />
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}
