import React from "react";
import '../styles/table_nodes.css'
import Button from 'react-bootstrap/Button';

const Popup = ({ nombreNodo, ipNodo, estadoNodo, registroNodo, id_nodo, togglePopupU, handleUpdate, handleSubmit, handleChange }) => {
  return (
    <div className="popup-box-update">
      <div className="box-update">
        <div className='div-popup-update'>
          <h2 className='title-popup'>Editar IP</h2>
          <form className="form-update" onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor='nombreNodo' className='form-label'>Nombre de nodo</label>
              <input value={nombreNodo} name='nombreNodo' onChange={handleChange} type='text' id='nombreNodo' className='form-control' />
            </div>
            <div className='mb-3'>
              <label htmlFor='ipNodo' className='form-label'>Dirección IP</label>
              <input value={ipNodo} name='ipNodo' onChange={handleChange} type='text' id='ipNodo' className='form-control' />
            </div>
            <div className='div-buttons-update'>
              <Button onClick={togglePopupU} className="button-cancelar-popup-update">Cancelar</Button>
              <Button onClick={() => handleUpdate(id_nodo)} className='button-enviar-popup-update'>Enviar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;