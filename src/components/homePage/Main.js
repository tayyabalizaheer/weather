import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Basic Swiper styles
import { useSelector } from 'react-redux';
import {formatDate, formatTime, formatTimeWithDay} from "../../utils/time";
import Icon from '../weather/Icon';
import { calculateAirQualityIndex } from '@/utils/weather';

function Main() {
    const {data,hourly,loading} = useSelector((state) => state.weather);

  return (
    <section className="float-start w-100 banner-part1">
        {
            data ?
            <div className="container">
                <div className="row top-part-banner1 align-items-center">
                    <div className="col-12">
                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-12'>
                                <h3> {data.location.name}  
                                    <span className="d-block"> {formatTime(data.location.localtime) } </span>
                                </h3>
                            </div>
                            <div className='col-lg-8 col-md-6 col-12'>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center col-lg-6">
                                    <div className="partly_cloudy">
                                        <div className="partly_cloudy__sun"></div>
                                        <div className="partly_cloudy__cloud"></div>
                                    </div>
                                    <h1 className="mb-2 ms-3"> {data.current.temp_c} <small> °C</small>
                                        
                                    </h1>
                                    </div>
                                    <div className="d-flex align-items-center col-lg-6">
                                        <h2 className="text-white mt-0 "> Rain 
                                        <span className="d-block text-white mt-2">
                                        <span className="iconm">
                                            <img alt="hm" src="images/2060846.png"/>
                                        </span>
                                        {data.current.precip_mm}%</span>
                                        </h2>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>Feel Likes</span>
                                        <span className='main-detail-v'>{data.current.feelslike_c} <small> °C</small></span>
                                    </div>
                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>Wind</span>
                                        <span className='main-detail-v'>{data.current.wind_dir} {data.current.wind_kph} km/h</span>
                                    </div>
                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>Wind Gusts</span>
                                        <span className='main-detail-v'> {data.current.gust_kph} km/h</span>
                                    </div>
                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>Humidity</span>
                                        <span className='main-detail-v'>{data.current.humidity}%</span>
                                    </div>
                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>Air Quality</span>
                                        <span className='main-detail-v'>{calculateAirQualityIndex(data.current.air_quality)}</span>
                                    </div>
                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>Dew Points</span>
                                        <span className='main-detail-v'>{data.current.dewpoint_c} <small> °C</small> </span>
                                    </div>

                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>Visibility</span>
                                        <span className='main-detail-v'>{data.current.vis_km} <small> km</small> </span>
                                    </div>
                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>Cloud Cover</span>
                                        <span className='main-detail-v'>{data.current.cloud} %</span>
                                    </div>
                                    <div className='col-12 col-lg-4 d-flex main-detail'>
                                        <span className='me-2 main-detail-h'>UV Index</span>
                                        <span className='main-detail-v'>{data.current.uv} </span>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="hours-div">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]} // Use the imported modules
                            spaceBetween={10} // Space between slides
                            slidesPerView={6} // Number of slides to show at once
                            navigation // Enables navigation buttons
                            pagination={{ clickable: false }} // Enables pagination bullets
                            // autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
                            // loop={true} 
                            breakpoints={{
                                // when the window width is >= 320px
                                320: {
                                  slidesPerView: 2, // Show 1 slide
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
                                hourly ? hourly.map((f,index) => {
                                    if(f.time ){
                                        return ( // Explicitly return the JSX
                                            <SwiperSlide key={f.time}> 
                                                <div className="live-weather text-center">
                                                    <h5>
                                                    {formatTimeWithDay(f.time)+" "}
                                                    </h5>
                                                    <div className='icon-div main-icon'>
                                                    {/* {f.condition.text} */}
                                                    <Icon status={f.condition.text} icon={f.condition.icon}></Icon>
                                                    </div>
                                                    <div className="mintem05">
                                                        <h4 className="my-0"> {f.temp_c} <small>{f.feelslike_c}</small>  °C </h4>
                                                    </div>
                                                    <div className="readfeel d-inline-block w-100">
                                                        <div className='d-flex main-hourly'><span className='main-hourly-h'>Precipitation</span> <span className='main-hourly-v'>{f.precip_mm}%</span></div>
                                                        <div className='d-flex main-hourly'><span className='main-hourly-h'>Wind</span> <span className='main-hourly-v'>{f.wind_dir} {f.wind_kph} km/h</span></div>
                                                        <div className='d-flex main-hourly'><span className='main-hourly-h'>Air Qaulity</span> <span className='main-hourly-v'>{calculateAirQualityIndex(f.air_quality)}</span></div>
                                                        
                                                    </div>
                                                </div> 
                                                
                                            </SwiperSlide>
                                        );
                                    }
                                    
                                })
                                : <>loading..</>
                                
                                }
                             
                            
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
            :
            <>loading..</>
        }
      
    </section>
  )
}

export default Main