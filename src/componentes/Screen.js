import React from 'react'

const Screen = ({ children }) => {
  return (
    <div>
    <div className='screen'>
    <div className="container-fluid">
    <div className="row internal-sections">
      <div className="col-lg-2 bg-light"> {/* Columna izquierda */}
        <h2>Sección Izquierda</h2>
        <p>Contenido de la sección izquierda...</p>
      </div>
      <div className="col-lg-7 bg-secondary"> {/* Columna central */}
        <h2>Sección Central</h2>
        {children}
      </div>
      <div className="col-lg-3 bg-light"> {/* Columna derecha */}
        <h2>Sección Derecha</h2>
        <p>Contenido de la sección derecha...</p>
      </div>
    </div>
    <footer className="mt-5 py-3 bg-dark text-white text-center"> 
        <div className="row internal-sections">
            <div className="col-lg-4 bg-light">correos</div>
            <div className="col-lg-4 bg-light">telefonos</div>
            <div className="col-lg-4 bg-light">direcciones</div>
        </div>
    </footer>
  </div>
    </div>
    </div>
  )
}

export default Screen
