import React from 'react'

export default function Contacto() {
  return (
    <form>
        <h1>Contacto</h1>
        <label for="email">Email</label>
        <br/>
        <input id="email" type="email" required/>
        <br/>
        <label for="Mensaje">Mensaje</label>
        <br/>
        <textarea id="Mensaje" type="text" required/>
        <br/>
        <button type='button' >Enviar</button>
    </form>
  )
}
