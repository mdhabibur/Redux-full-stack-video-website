import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';




const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="text-center text-white container-fluid fixed-bottom py-2 footer-background-color">
        {/* <!-- Grid container --> */}
        <div className="">
            {/* <!--Grid row--> */}
            <div className="row">


                {/* <div className="col-lg-6 col-md-6 d-flex justify-content-md-start justify-content-center align-items-center">
                    <span className="mx-3">Copyright &copy; 2024</span>
                </div>
                <div className="col-lg-6 col-md-6 text-lg-end d-flex justify-content-md-end justify-content-center align-items-center">
                    <ul className="list-unstyled mb-0">
                        <li className="">
                            <Link to="/" className="text-white mx-3 no-underline-link">Youtube</Link>
                        </li>
                    </ul>
                </div> */}


                <div className="col-md-6 offset-md-3 d-fle flex-column justify-content-center align-items-center">

                <ul className="list-unstyled mb-0 pb-2">
                        <li className="">
                            <Link to="/" className="text-white mx-3 no-underline-link fa-2x">
                            Copyright &copy; 2024
                            </Link>
                        </li>
                    </ul>

                    <ul className="list-unstyled mb-0">
                        <li className="">
                            <Link to="https://www.facebook.com/profile.php?id=100050626959689" className="text-white mx-3 no-underline-link">
                            <FontAwesomeIcon icon={faFacebook} size="2x"/>
                            </Link>

                            <Link to="https://www.instagram.com/mdhrahman532/" className="text-white mx-3 no-underline-link">
                            <FontAwesomeIcon icon={faInstagram} size="2x"/>  
                            </Link>

                            <Link to="https://twitter.com/mdhabibur123" className="text-white mx-3 no-underline-link">
                            <FontAwesomeIcon icon={faTwitter} size="2x"/>   
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        </div>

    </footer>
    // <!-- Footer -->
  )
}

export default Footer