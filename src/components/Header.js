import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
        <header className="float-start w-100">
            <div className="top-bar">
            
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <Link className="navbar-brand logo-img" href="/">
                    <img src="images/logo.png" alt="logo"/>
                </Link>
                <div>
                    <a data-bs-toggle="modal" data-bs-target="#searchModal" class="btn navbar-toggler me-2"> <i className='fas fa-search'></i> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    
                    
                        <li className="nav-item">
                            <Link className="nav-link" href="/map">Map</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/photo">Photo</Link>
                        </li>
                        <li className="nav-item">
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/contactus">Contact us</Link>
                        </li>
                        <li>
                            <a data-bs-toggle="modal" data-bs-target="#searchModal" class="btn"> <i className='fas fa-search'></i> </a>
                        </li>
                    </ul>
                </div>
            
                </div>
            </nav>

            


            
            </div>
            
        </header> 
        <div className="offcanvas offcanvas-start mobile-menu-div" tabIndex="-1" id="mobile-menu">
            <div className="offcanvas-header">
            <button type="button" className="close-menu" data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
                </svg>
            </button>
            </div>
            
                
            <div className="offcanvas-body">
                
                <div className="head-contact">
                <Link href="/" className="logo-side logo-img">
                    <img src="images/logo.png" alt="logo"/>
                </Link>
                
                <div className="mobile-menu-sec mt-3">
                    <ul className="list-unstyled">
                        <li className="active-m">
                            <Link data-bs-dismiss="offcanvas" href="/"> Home </Link>
                        </li>
                        <li>
                            <Link data-bs-dismiss="offcanvas" href="/map">  Map  </Link>
                        </li>
                        <li>
                            <Link data-bs-dismiss="offcanvas" href="/photo"> Photo </Link>
                        </li>
                        <li>
                           <Link data-bs-dismiss="offcanvas" href="/contactus"> Contact Us</Link>
                        </li>
                   
                        
                    </ul>
                </div>
                
                <ul className="side-media list-unstyled">
                    <li> <a href="https://facebook.com/engrtayyabali"> <i className="fab fa-facebook-f"></i> </a> </li>
                    <li> <a href="https://x.com/tayyabalizaheer"> <i className="fab fa-twitter"></i> </a> </li>
                    <li> <a href="https://github.com/tayyabalizaheer"> <i className="fab fa-code"></i> </a> </li>
                    <li> <a href="https://instagram.com/tayyabalizaheer"> <i className="fab fa-instagram"></i> </a> </li>
                </ul>
                </div>
            </div>
            
        
        </div>
    </>
  
  )
}

export default Header