import React from 'react';
import Button from 'react-bootstrap/Button';

const Form = ({ user, togglePopupU }) => {

    let { nombreNodo, ipNodo } = user

   
    return (
        
            <Button onClick={togglePopupU} className="button-cancelar-popup">Cancelar</Button>
    );
}

export default Form;

/*
<div className='col-5'>
              <h2 style={{ textAlign: 'center' }}>User Form</h2>
              <Form user={user} setUser={setUser} />
            </div>


            import Form from './Components/Form'

    <h3 type="button" onClick={() => handleUpdate(user.idNodo)} className="texto-acciones-editar" title="Editar nodo">Editar</h3>

*/