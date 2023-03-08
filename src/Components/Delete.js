import React from "react";
import '../styles/table_nodes.css'
import Button from 'react-bootstrap/Button';

const Popup = ({ id_nodo, togglePopupD, handleDelete }) => {

  return (
    <div className="popup-box-delete">
      <div className="box-delete">
        <div className='div-popup'>
          <b className='title-popup'>Eliminar IP</b>
          <p className='subtitle-popup'>La dirección IP dejará de ser monitoreada y será eliminada de los registros.</p>
          <div className='div-buttons-delete'>
            <Button onClick={() => togglePopupD()} className="button-cancelar-popup">Cancelar</Button>
            <Button onClick={() => handleDelete(id_nodo)} className="button-eliminar-popup">Eliminar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;