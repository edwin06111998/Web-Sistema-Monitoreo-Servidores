import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import '../styles/login.css'

function App() {
  return (
    <MDBContainer className="my-5 gradient-form">

      <MDBRow>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">

            <div className="text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{width: '185px'}} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Sistema de Monitoreo Edwin Veloz</h4>
            </div>

            <p>Por favor, ingresa con tu cuenta</p>


            <MDBInput wrapperClass='mb-4' label='Correo electrónico' id='form1' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password'/>


            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn className="mb-4 w-100 gradient-custom-2">Iniciar sesión</MDBBtn>
              <a className="text-muted" href="#!">¿Olvidaste tu contraseña?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">¿No tienes cuenta?</p>
              <MDBBtn outline className='mx-2' color='danger'>
                Registrarse
              </MDBBtn>
            </div>

          </div>

        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 class="mb-4">Sistema de monitoreo de servidores</h4>
              <p class="small mb-0">Portal web multiusuarios para monitorear servidores a través de una conexión vía ping, el portal muestra una tabla con es estado de cada servidor, permitiendo editar o eliminar cada servidor. A su vez, el sistema envía un mensaje por WhatsApp al usuario cuando un servidor pierde conexión.
              </p>
            </div>

          </div>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default App;