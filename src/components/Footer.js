import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="float-start w-100">
        <div className="container">
            <div className="row">
                
                <div className="left-footer">
                    
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 mt-4">
                        <div className="col">
                        <h5>Reference </h5>
                            <ul className="list-unstyled">
                                <li> <a href="https://nextjs.org/"> Next Js </a> </li>
                                <li> <a href="https://vercel.com/"> Vercel </a> </li>
                                <li> <a href="https://www.weatherapi.com/"> WeahterApi </a> </li>
                            </ul>
                        </div>
                        <div className="col">
                        <h5>Company </h5>
                            <ul className="list-unstyled">
                            <li> <Link href="photo">Photo </Link> </li>
                            <li> <Link href="contactus"> Contact Us </Link> </li>
                            <li> <Link href="map"> Map </Link> </li>
                            </ul>
                        </div>
                        <div className="col">
                        <h5>Support </h5>
                        <ul className="list-unstyled">
                            <li> <i className="fas fa-phone-square-alt"></i> <a href='tel:+971 56 190 2113'>+971 56 190 2113</a>  </li>
                            <li> <i className="fas fa-phone-square-alt"></i> <a href='tel:+92 348 7964843'>+92 348 7964843</a>  </li>
                            <li> <i className="fas fa-envelope"></i> <a href='mailto:contact@engrtayyabali.com'>contact@engrtayyabali.com</a>  </li>
                        </ul>
                        </div>
                        <div className="col ">
                        <a href="#" className="mt-2 d-table logo-img">
                            <img src="images/logo.png" alt="logo"/>
                        </a>
                        <p className="mt-3"> 
                            This website is created and maintained by Engr. Tayyab Ali for educational purposes. The content on this website is sourced from the internet. If you believe any material is used unlawfully, please feel free to contact me.
                        </p>
                        
                        </div>
                        
                        
                    </div>
                    <hr/>

                    <div className="d-flex justify-content-between">
                        <p className="text-center">{new Date().getFullYear()} © <a href='engrtayyabali.com'>Engr. Tayyab Ali</a>  All rights reserved.</p>
                        <ul className="list-unstyled">
                        <li className="d-flex sc1"> 
                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                            <a href="#" className="mx-3"> <i className="fab fa-twitter"></i> </a>
                            <a href="#"> <i className="fab fa-pinterest"></i> </a>
                        </li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer