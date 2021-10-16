import React, { useState } from 'react'

export const FormularioContainer = () => {

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  // const [notificaciones, setNotificaciones] = useState(false);

  return (
    <>
      <h2>DEJAMOS TU MENSAJE</h2>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div>
          <label htmlFor="correo">Correo:</label>
          <input type="email" id="correo" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </div>
        {/* <div>
          <label htmlFor="notificaciones">Acepto Término y Condiciones</label>
          <input type="checkbox" id="notificaciones" name="notificaciones" onChange={(e) => setNotificaciones(e.target.checked)} />
        </div> */}
      </form>
    </>
  )
}
