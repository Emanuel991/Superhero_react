import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Superhero app</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link to='/home' className='nav-link'>Home</Link>
                </li>
                <li className="nav-item">
                <Link to='/search' className='nav-link'>Search</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar