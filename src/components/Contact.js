import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <>
      <section className="float-start w-100 banner-part1 sub-page-banner">
        <div className="map-oui d-inline-block w-100">
          <img alt="gnm" src="images/pexels-photo-2131830.jpg"/>
      </div>
            <div className="container">
                <div className="d-md-flex bed-cur align-items-center justify-content-between">
                      <h1 className="m-0"> Contact </h1>
                      <nav aria-label="breadcrumb m-0">
                          <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Contact</li>
                          </ol>
                      </nav>
                </div>
            </div>

      </section>
      <section className="body-part float-start w-100">

        <div className="new-page-toal mt-0 contact-page-total mb-5">
            
          <div className="container">
              <div className='row mb-3'>
                <div className='col-12'>
                <h5>This weather web app, developed and managed by Engr. Tayyab Ali. </h5>

                <p> 
                    WeaCool is designed for learning and educational purposes, providing users with real-time weather updates and forecasts. The app sources data from various online platforms to deliver accurate and reliable information to its users. It is intended to serve as a practical demonstration of web development and weather data integration. While every effort has been made to respect copyright and intellectual property rights, some content has been adapted from internet resources. If you identify any material that may have been used inappropriately or without proper authorization, please feel free to contact us. Your feedback is appreciated and will be addressed promptly.
                  </p>
                </div>
              </div>
              <div className="row g-lg-5">
                  <div className="col-md-5 cm-text-n">
                      <h2> Contact info</h2>
                     
                      <ul className="list-unstyled mt-4">
                          <li className="d-flex">
                            <span className="icon-c"><i className="fas fa-phone-square-alt"></i></span> 
                            <span className="text-c">  Call Us 
                              <small className="d-block mb-2"> <a href='tel:+971 56 190 2113'>+971 56 190 2113</a> </small> 
                              <small className="d-block"> <a href='tel:+92 348 7964843'>+92 348 7964843</a>  </small> 
                              
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="icon-c"><i className="fas fa-envelope"></i></span> 
                            <span className="text-c">  
                                Email: 
                              <small className="d-block"> <a href='mailto:contact@engrtayyabali.com'>contact@engrtayyabali.com</a> </small> 
                            </span>
                          </li>
                          <li className="d-flex">
                            <span className="icon-c"><i className="fas fa-code"></i></span> 
                            <span className="text-c"> Github: 
                              <small className="d-block"> <a href='https://github.com/tayyabalizaheer'>tayyabalizaheer</a>  </small> 
                            </span>
                          </li>
                      </ul>
                      
                  </div>
                  <div className="col-md-7">
                    <form method="get" action="ma">
                      <div className="conatct-form-div mb-5">
                          <h2 className="mt-0"> Feedback </h2>
                          <div className="row mt-4">
                              <div className="col-lg-6">
                                  <input type="text" className="form-control" placeholder="Name" required=""/>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Email" required=""/>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Phone" required=""/>
                              </div>
                              <div className="col-lg-6">
                                <input type="text" className="form-control" placeholder="Subject" required=""/>
                            </div>
                            <div className="col-lg-12">
                                <textarea className="form-control" placeholder="Message" required=""></textarea>
                            </div>
                            <div className="col-lg-12">
                                <input type="submit" className="btn subimt-message" value="Submit" />
                            </div>
                          </div>
                      </div>
                    </form>

                  </div>
              </div>
                    
          </div>

            
        </div>








      </section>
    </>

  )
}
