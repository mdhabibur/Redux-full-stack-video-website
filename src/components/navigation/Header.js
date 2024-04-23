import React from 'react'
import lws from '../../assets/lws.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    // <!-- header  -->
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
            {/* <!-- Brand/logo --> */}
            <Link className="navbar-brand header-logo-width"  to={'/'}>
                <img src={lws} alt="" className="img-fluid" />
            </Link>
            {/* <!-- Add button --> */}
            <Link to='/videos/add'>
                <button className="btn btn-primary add-button">+ Add Video</button>
            </Link>

        </div>
    </nav>
  )
}

export default Header