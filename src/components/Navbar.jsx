import React from 'react'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NEWZ!</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>setCategory("general")} href="#">General</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>setCategory("technology")}>Technology</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#" onClick={()=>setCategory('health')}>Health</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setCategory('science')}>Science</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#" onClick={()=>setCategory('sports')}>Sports</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar