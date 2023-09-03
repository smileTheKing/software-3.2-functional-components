import React from 'react'

const NavBar = () => {
  return (
    <div className='nav'>
        <nav className='navWrapper'>
            <h1 className='logo'>W3 movie</h1>
            <ul>
                <li>Search</li>
                <li>Library</li>
                <li>About</li>
            </ul>
            <p className='login'>Login</p>
        </nav>
    </div>
  )
}

export default NavBar