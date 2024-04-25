import React from 'react'

export default function Formulario() {
    return (
        <div>
            <form action="">
                <input type="text" className='nombre' />
                <input type="email" className='email' />
                <input type="text" className='contrasena' />
                <input type="text" className='verificaContrasena' />
                <button type="submit">Enviar</button>

            </form>
        </div>
    )
}
