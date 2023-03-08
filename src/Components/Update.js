import React from "react";
import '../styles/table_nodes.css'
import Button from 'react-bootstrap/Button';

const Popup = ({ nombreNodo, ipNodo, id_nodo, togglePopupU, handleUpdate, handleSubmit, handleChange }) => {
  return (
    <div className="popup-box-update">
      <div className="box-update">
        <div className='div-popup'>
          <div className='div-form'>
            <h2 style={{ textAlign: 'center' }}>User Form</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='nombreNodo' className='form-label'>Nombre de nodo</label>
                <input value={nombreNodo} name='nombreNodo' onChange={handleChange} type='text' id='nombreNodo' className='form-control' />
              </div>
              <div className='mb-3'>
                <label htmlFor='ipNodo' className='form-label'>Dirección IP</label>
                <input value={ipNodo} name='ipNodo' onChange={handleChange} type='text' id='ipNodo' className='form-control' />
              </div>
              <Button onClick={togglePopupU} className="button-cancelar-popup">Cancelar</Button>
              <Button onClick={() => handleUpdate(id_nodo)} className='btn btn-primary'>Enviar</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;