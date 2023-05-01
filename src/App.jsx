import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import UserList from './components/userList/UserList'
import NewUser from './components/newuser/NewUser'

function App() {
  const [users, setUsers] = useState([])

//delete user
const deleteUser = (id) => {
  setUsers((prev) => {
    return prev.filter((user)=> {
      return user.id !== id
    })
  })
}

const [showModal, setShowModal] = useState(false)

//close modal
const closeModal =  (e) => {
  if(e.target.className === 'overlay') {
    setShowModal(false)
  }

  if(e.key === "Escape") {
    setShowModal(false)
  }
}

//add user
const addUser = (user) => {
  setUsers((prev) => {
    return [...prev, user]
  })

  setShowModal(false)
}


  return (
    <div onClick={closeModal} className="App">
      <Navbar userLength={users.length}/>
          <main>
            <div className='no-users'>
              {users.length === 0 && <h2>No Users</h2>}
            </div>
            <UserList users={users} deleteUser={deleteUser}/>
          </main>
          {showModal && <NewUser addUser={addUser}/>}
          <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
      <Footer/>
    </div>
  )
}

export default App
