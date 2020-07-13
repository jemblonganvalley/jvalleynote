import React from 'react'
import { Link } from 'react-router-dom'

const MainNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
          padding : '10px 10%',
          boxShadow : '3px 3px 5px #bebebe',
      }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Jvalley Notes</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Quotes</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/note">Note</Link>
                    </li>
                   
                </ul>
               
                </div>
            </div>
        </nav>
    </>
  )
}

export default MainNavbar
