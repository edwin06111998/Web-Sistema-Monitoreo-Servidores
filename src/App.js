import React, { Fragment, useState, useEffect } from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Subtitle from './Components/Subtitle'
import UserList from './Components/UserList'
import './styles/app.css'
import './styles/popup.css'
import './styles/table_nodes.css'

function App() {

  const [user, setUser] = useState({
    nombreNodo: '',
    ipNodo: ''
  })

  const [isOpenD, setIsOpenD] = useState(false);
  const [isOpenU, setIsOpenU] = useState(false);
  const [users, setUsers] = useState([])
  const [idNodo, setIdNodo] = useState([])
  const [listUpdated, setListUpdated] = useState(false)
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:9000/api')
        .then(res => res.json())
        .then(res => {
          setUsers(res);
        })
    }
    getUsers()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <div className='container_principal'>
      <Fragment>
        <NavBar brand='Maxitel' />
        <Subtitle principal='Monitoreo de IP’s' secondary='Sistema de alarma Maxitel mediante la API de WhatsApp ' setUsers={setUsers} users={users} busqueda={busqueda} setBusqueda={setBusqueda} />
        <div className='container-table'>
          <UserList user={user} setUser={setUser} users={users} setListUpdated={setListUpdated} isOpenD={isOpenD} setIsOpenD={setIsOpenD} isOpenU={isOpenU} setIsOpenU={setIsOpenU} idNodo={idNodo} setIdNodo={setIdNodo} />
        </div>
        <Footer />
      </Fragment>

    </div>
  );
}

export default App;
