import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Basic Swiper styles
function Recent() {
  return (
    <div className="recent-search-div">
        <div className="container">
          <div className="row align-items-center g-lg-4">
              <div className="col-lg-4">
                <h2> Provide Your
                  <span className="d-block"> Search Weather </span>  </h2>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem</p>
              </div>
              <div className="col-lg-8">
                  <div className="d-flex justify-content-between align-items-center">
                      <h5> Recent Place </h5>
                      <a href="#" className="btn readmon"> 
                      <i className="fas fa-arrow-right"></i>
                      </a>
                  </div>
                
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]} // Use the imported modules
                        spaceBetween={10} // Space between slides
                        slidesPerView={3} // Number of slides to show at once
                        navigation // Enables navigation buttons
                        pagination={{ clickable: false }} // Enables pagination bullets
                        autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
                        loop={true} 
                    >
                            
                            <SwiperSlide> 
                            <div className="items text-center">
                            <div className="content-part">
                                <h4> New York </h4>
                                <h3> 12 <sup> 0c</sup></h3>
                                <h6> Thundery</h6>
                            </div>
                            <figure>
                                <img src="images/pexels-yuting-gao-1557547.jpg" alt="pnm"/>
                            </figure>
                            

                            <div className="rain"></div>
                            <div className="lightining"></div>
                            
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="items sunny-div text-center">
                            <div className="content-part">
                                <h4> Singapore </h4>
                                <h3> 32 <sup> 0c</sup></h3>
                                <h6>  Sunny</h6>
                            </div>
                            <figure>
                                <img src="images/pexels-photo-2426546.jpeg" alt="pnm"/>
                            </figure>
                            

                            <div className="sunny"></div>
                            
                            </div>
                            </SwiperSlide> 
                            <SwiperSlide> 
                            <div className="items text-center raing-div">
                                <div className="content-part">
                                <h4> Paris </h4>
                                <h3> 12 <sup> 0c</sup></h3>
                                <h6> Raining</h6>
                                </div>
                                <figure>
                                    <img src="images/pexels-marcin-gierbisz-1125212.jpg" alt="pnm"/>
                                </figure>
                                

                                <div className="rain"></div>
                                <div className="lightining"></div>
                            
                            </div>
    </SwiperSlide> 


                            <SwiperSlide> 
                            <div className="items text-center sunny-div">
                            <div className="content-part">
                                <h4> Dubai </h4>
                                <h3> 24 <sup> 0c</sup></h3>
                                <h6> Cloudy </h6>
                            </div>
                            <figure>
                                <img src="images/pexels-aleksandar-pasaric-2041556.jpg" alt="pnm"/>
                            </figure>
                            

                            <div class='clouds'>
                                <div class='clouds-1'></div>
                                <div class='clouds-2'></div>
                                <div class='clouds-3'></div>
                                </div>
                            
                            </div>
    </SwiperSlide> 


                    </Swiper>

              </div> 
                    
            
          </div>
        </div>
    </div>
  )
}

export default Recent