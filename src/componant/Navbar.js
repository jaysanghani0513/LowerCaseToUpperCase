import React from 'react'

export default function Navbar(props) {
  return (
   
      <nav className={`navbar navbar-expand-lg navbar-${props.mod} bg-${props.mod}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            </ul>
            <div class={`form-check form-switch text-${props.mod==='light'?'dark':'white'}`}>
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMod} />
              <label class="form-check-label" htmlfor="flexSwitchCheckDefault">{props.mod==='light'?'dark':'light'}mode enable</label>
            </div>
            <form className="d-flex">
              <input className="form-control me-2 mx-5" type="search" placeholder="Search" aria-label="Search" />

              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    
  )
}
