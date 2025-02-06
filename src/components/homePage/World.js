import Link from 'next/link'
import React from 'react'

function World() {
  return (
    <div className="world-forcust-div">
        <div className="container">
            <h1 className="text-center"> World Weather Forecast </h1>
            <div className="col-lg-10 mx-auto mt-5">
                <ul className="list-unstyled p-0 m-0">
                  <li>
                    <Link href="/Pakistan" className="comon-fom-st"> 
                      <figure>
                          <img src="images/pak.png" alt="aus"/>
                      </figure>
                        Pakistan
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Australia" className="comon-fom-st"> 
                      <figure>
                          <img src="images/aus.jpg" alt="aus"/>
                      </figure>
                        Australia 
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Indonesia" className="comon-fom-st"> 
                      <figure>
                          <img src="images/indo.jpg" alt="aus"/>
                      </figure>
                      Indonesia
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>


                  <li>
                    <Link href="/Sweden" className="comon-fom-st"> 
                      <figure>
                          <img src="images/swi.jpg" alt="aus"/>
                      </figure>
                        Sweden
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Japan" className="comon-fom-st"> 
                      <figure>
                          <img src="images/japan.jpg" alt="aus"/>
                      </figure>
                        Japan
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Canda" className="comon-fom-st"> 
                      <figure>
                          <img src="images/candna.jpg" alt="aus"/>
                      </figure>
                        Canda
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Netherland" className="comon-fom-st"> 
                      <figure>
                          <img src="images/nth.jpg" alt="aus"/>
                      </figure>
                        Netherland
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>


                  

                  <li>
                    <Link href="/China" className="comon-fom-st"> 
                      <figure>
                          <img src="images/china.jpg" alt="aus"/>
                      </figure>
                        China
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/London" className="comon-fom-st"> 
                      <figure>
                          <img src="images/londoan.jpg" alt="aus"/>
                      </figure>
                      London
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Spain" className="comon-fom-st"> 
                      <figure>
                          <img src="images/spian.jpg" alt="aus"/>
                      </figure>
                      Spain
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>


                  <li>
                    <Link href="/France" className="comon-fom-st"> 
                      <figure>
                          <img src="images/fra.jpg" alt="aus"/>
                      </figure>
                      France
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>


                  <li>
                    <Link href="/Brazil" className="comon-fom-st"> 
                      <figure>
                          <img src="images/brzil.jpg" alt="aus"/>
                      </figure>
                      Brazil
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>



                  <li>
                    <Link href="/Poland" className="comon-fom-st"> 
                      <figure>
                          <img src="images/poland.jpg" alt="aus"/>
                      </figure>
                      Poland
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>


                  <li>
                    <Link href="/Germaney" className="comon-fom-st"> 
                      <figure>
                          <img src="images/ger.jpg" alt="aus"/>
                      </figure>
                      Germaney
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Dubai" className="comon-fom-st"> 
                      <figure>
                          <img src="images/arb.jpg" alt="aus"/>
                      </figure>
                      Dubai
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Saudia Arabia" className="comon-fom-st"> 
                      <figure>
                          <img src="images/urb.jpg" alt="aus"/>
                      </figure>
                      Saudia Arabia
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>

                  <li>
                    <Link href="/Bali" className="comon-fom-st"> 
                      <figure>
                          <img src="images/um.jpg" alt="aus"/>
                      </figure>
                      Bali
                        <i className="fas fa-arrow-right"></i>
                    </Link>
                  </li>





                </ul>
            </div>
            {/* <a href="#" className="btn explore-btn mt-4"> Explore All locations </a> */}
        </div>
    </div>
  )
}

export default World