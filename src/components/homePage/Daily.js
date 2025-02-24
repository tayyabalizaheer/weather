import React from 'react'
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Basic Swiper styles
import { useSelector } from 'react-redux';
import { formatDate, formatTime, getDay, isDayOrNight} from "../../utils/time";
import Icon from '../weather/Icon';
import { Swiper, SwiperSlide } from 'swiper/react';

function Daily() {
  const {weekly,data,loading} = useSelector((state) => state.weather);
  return (
    <div className="daily-wather night-moon">
        <div className="container">
          <div className="content-sec-wh">
          <h1> Weekly Weather Forecast </h1>
          <div className="weekly-weather">
          <Swiper
                            modules={[Navigation, Pagination, Autoplay]} // Use the imported modules
                            spaceBetween={10} // Space between slides
                            slidesPerView={6} // Number of slides to show at once
                            navigation={true} // Enables navigation buttons
                            pagination={{ clickable: true }} // Enables pagination bullets
                            breakpoints={{
                                // when the window width is >= 320px
                                320: {
                                  slidesPerView: 3, // Show 1 slide
                                  spaceBetween: 10, // Space between slides
                                },
                                // when the window width is >= 768px
                                768: {
                                  slidesPerView: 3, // Show 3 slides
                                  spaceBetween: 15, // Space between slides
                                },
                                // when the window width is >= 1024px
                                1024: {
                                  slidesPerView: 6, // Show 6 slides
                                  spaceBetween: 20, // Space between slides
                                },
                              }}
                            >
                            {
                                
                                
                                weekly && weekly.map((f) => {
                                    return ( // Explicitly return the JSX
                                        <SwiperSlide key={f.date}> 
                                            <div className="col">
                                                <div className="comon-days">
                                                    <h4> { getDay( f.date)} </h4>
                                                    <Icon status={f.day.condition.text} icon={f.day.condition.icon}></Icon>
                                                    <h6> {f.day.maxtemp_c}° / <span className="ms-1"> {f.day.mintemp_c}°</span> </h6>
                                                </div>
                                            </div>  
                                        </SwiperSlide>
                                    );
                                })
                               
                            }
                                
            </Swiper>                 
            

           
        </div>

        <div className="all-forcuset mt-5">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
          {
                weekly && weekly.map((f,index) => {
                    return ( // Explicitly return the JSX
                        <li key={`trehg${index}`} className="nav-item" role="presentation">
                            <button className={`nav-link ${index==0?"active":""}`} id={`home-tab-${index}`} data-bs-toggle="tab" data-bs-target={`#home-${index}`} type="button" role="tab" aria-controls="home" aria-selected="true">
                            {
                                index === 0 ? (
                                    "Today"
                                ) : index === 1 ? (
                                    "Tomorrow"
                                ) : (
                                    <>{formatDate(f.date)}</>
                                )
                            }
                            </button>
                        </li>
                    );
                })
            }
           
            
          </ul>
          <div className="tab-content" id="myTabContent">
          {
                weekly && weekly.map((f,index) => {
                    return ( // Explicitly return the JSX
                        <div key={`neikn${index}`} className={`tab-pane fade ${index==0?"show active":""}`} id={`home-${index}`} role="tabpanel" aria-labelledby={`home-tab-${index}`}>
                            <div className="comon-report-divbn">
                                <h2 className="today-hilights1 mt-4"> 
                                {
                                        index === 0 ? (
                                            "Today's "
                                        ) : index === 1 ? (
                                            "Tomorrow's "
                                        ) : (
                                            <>{formatDate(f.date)+" "}</>
                                        )
                                }
                                    Highlights
                                </h2>
                                <div className="row mt-4 gy-5 gx-lg-5">
                                    <div className="col-lg-4">
                                    <div className="left-sec-d1">
                                        <div className="sunny"></div>
                                        <h2 className='mb-1'> {f.day.avgtemp_c} <sup> °C</sup></h2>
                                        <p>Precipitation:   <b> {f.day.totalprecip_mm}%  </b></p>
                                        
                                        <div className="d-flex justify-content-between">

                                            
                                 

                                            <span> <i className="fas fa-map-marker-alt"></i> {data.location.name}   </span>
                                            <span> {formatDate(f.date)} </span>
                                        </div>
                                        <hr/>
                                        <ul className="list-unstyled mt-3 mb-0">
                                            <li> <i className="fas fa-cloud"></i> {f.day.condition.text}
                                            </li>
                                            <li>
                                                <i className={`fas fa-${isDayOrNight(data.location.localtime)}`}></i> {formatTime(data.location.localtime) } 
                                            </li>
                                        </ul>
                                    </div>
                                        
                                    </div>

                                    <div className="col-lg-8">
                                    

                                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                                            <div className="col">
                                                <div className="comon-report uv">
                                                    <h5> UV Index </h5>
                                                    <figure>
                                                        <img src="images/5643142.png" alt="pn"/>
                                                    </figure>
                                                    <ul className="list-unstyled d-flex justify-content-center">
                                                        <li> {f.day.uv} </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="col">
                                            <div className="comon-report uv">
                                                <h5> Wind Staus </h5>
                                                <h2> {f.day.maxwind_kph} <sub>  km/h </sub> </h2>
                                            </div>
                                            </div>

                                            <div className="col">
                                            <div className="comon-report sun-set-div">
                                                <h5> Sunrise & Sunset </h5>
                                                
                                                <div className="sum">
                                                <h6> <i className="fas fa-sun"></i> {f.astro.sunrise }  </h6>
                                                </div>
                                                <div className="sum">
                                                    <h6> <i className="fas fa-moon"></i> {f.astro.sunset }  </h6>
                                                </div>
                                            </div>
                                            </div>

                                            <div className="col">
                                            <div className="comon-report sun-set-div">
                                                <h5> Moonrise & Moonset </h5>
                                                
                                                <div className="sum">
                                                <h6> <i className="fas fa-moon"></i> {f.astro.moonrise }  </h6>
                                                </div>
                                                <div className="sum">
                                                    <h6> <i className="fas fa-cloud-moon"></i> {f.astro.moonset }  </h6>
                                                </div>
                                            </div>
                                            </div>

                                            <div className="col">
                                            <div className="comon-report uv">
                                                <h5>Humidity </h5>
                                                <h2>  {f.day.avghumidity}  <sup>  % </sup> </h2>
                                            </div>
                                            </div>

                                            <div className="col">
                                            <div className="comon-report uv">
                                                <h5> Visibility </h5>
                                                <h2> {f.day.avgvis_km} <sup> KM </sup>  </h2>
                                            </div>
                                            </div>

                                          

                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
            
            
          </div>
        </div>

            
        </div>
        </div>



        <figure className="bg-wath">
        <img src="images/pexels-tom-fisk-2739666.jpg" alt="gb"/>
        </figure>

        </div> 
  )
}

export default Daily