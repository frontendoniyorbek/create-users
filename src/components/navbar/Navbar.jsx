import './Navbar.css'

const Navbar = ({userLength}) => {
  return (
    <div className='navbar'>
      <div className='navbar-container container'>
        <h1 className='navbar-logo'>Creat-User</h1>
        <h3 className='navbar-counter'>
          {userLength > 0 ? 'You have:' + userLength : 'No user :('}
        </h3>
      </div>
    </div>
  )
}

export default Navbar