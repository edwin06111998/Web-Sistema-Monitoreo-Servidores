import React from 'react';
import '../styles/subtitle.css'
import Button from 'react-bootstrap/Button';

const Subtitle = ({ principal, secondary, setUsers, users, busqueda, setBusqueda }) => {

    const handleChange = e => {
        console.log(e.target.value);
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadoBusqueda = users.filter((elemento) => {
            if (elemento.nombreNodo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        console.log("Resultado: " + resultadoBusqueda);
        setUsers(resultadoBusqueda);
    }

    return (
        <div className='subtitle'>
            <div className='subtitle_p_s'>
                <h1
                    className='subtitle_principal'>{principal}
                </h1>
                <h6
                    className='subtitle_secondary'>{secondary}
                </h6>
            </div>
            <div className='search_side'>
                <input className="form-control inputBuscar" value={busqueda} placeholder="Búsqueda por nodo o IP..." onChange={handleChange}/>
                <Button className="button-agregar">Agregar Nodo</Button>
            </div>
        </div>
    );
}

export default Subtitle;