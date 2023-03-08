import React from 'react';
import Delete from './Delete';
import Update from './Update';
import '../styles/table_nodes.css'
import '../styles/popup.css'

const UserList = ({ user, setUser, users, setListUpdated, isOpenD, setIsOpenD, isOpenU, setIsOpenU, idNodo, setIdNodo }) => {

    let { nombreNodo, ipNodo } = user

    const togglePopupD = () => {
        setIsOpenD(!isOpenD);
    }

    const togglePopupU = () => {
        setIsOpenU(!isOpenU);
    }

    const setearID = (id) => {
        console.log("ID a configurar: " + id)
        setIdNodo(id);
    }

    const handleDelete = (id) => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))
        setListUpdated(true)
        togglePopupD()
    }

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        }) // target name = nombreNodo          target value = texto que se ingresa en el form
    }

    const handleUpdate = (idNodo) => {
        idNodo = parseInt(idNodo, 10)
        // Data validation
        if (nombreNodo === '' || ipNodo === '') {
            alert('Por favor, llene todos los campos.')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        fetch('http://localhost:9000/api/' + idNodo, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        // Reset User State
        setUser({
            nombreNodo: '',
            ipNodo: ''
        })

        setListUpdated(true)
        togglePopupU()
    }

    const handleSubmit = () => {
        // Data validation
        if (nombreNodo === '' || ipNodo === '') {
            alert('Por favor, llene todos los campos.')
            return
        }

        // Consult
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        fetch('http://localhost:9000/api', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        // Reset User State
        setUser({
            nombreNodo: '',
            ipNodo: ''
        })
    }

    return (
        <table className='table_nodes'>
            <tbody>
                <tr>
                    <th className='th-id'>ID</th>
                    <th className='th-nombre'>Nombre</th>
                    <th className='th-direccion-ip'>Dirección IP</th>
                    <th className='th-estado'>Estado</th>
                    <th className='th-ultimo-registro'>Último registro</th>
                    <th className='th-acciones'>Acciones</th>
                </tr>
                {users.map(user => (
                    <tr key={user.idNodo}>
                        <td className='th-id'>{user.idNodo}</td>
                        <td className='th-nombre'>{user.nombreNodo}</td>
                        <td className='th-direccion-ip'>{user.ipNodo}</td>
                        <td className='td-estado'>
                            <div className='div-estado'>
                                En línea
                            </div>
                        </td>
                        <td className='th-ultimo-registro'>06/11/1998 - 15:04</td>
                        <td className='td-acciones'>
                            <div className='div-acciones'>
                                <h3 type="button" onClick={function (event) { togglePopupU(); setearID(user.idNodo) }} className="texto-acciones-editar" title="Editar nodo">Editar</h3>
                                {isOpenU ?
                                    <Update nombreNodo = {nombreNodo} ipNodo = {ipNodo} id_nodo={idNodo} togglePopupU={togglePopupU} handleUpdate={handleUpdate} handleSubmit={handleSubmit} handleChange = {handleChange} /> : null}
                                <h3 type="button" onClick={function (event) { togglePopupD(); setearID(user.idNodo) }} className="texto-acciones-eliminar" title="Eliminar nodo">Eliminar</h3>
                                {isOpenD ?
                                    <Delete id_nodo={idNodo} togglePopupD={togglePopupD} handleDelete={handleDelete} /> : null}                                    
                            </div>
                        </td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    );
}

export default UserList;