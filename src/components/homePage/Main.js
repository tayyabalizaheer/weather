import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Basic Swiper styles
import { useSelector } from 'react-redux';
import {formatTime} from "../../utils/time";
import Icon from '../weather/Icon';

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
                                    <h1 className="mb-2 ms-3"> {data.current.temp_c}   <sup>0 </sup>
                                        
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
                            >
                                {
                                hourly ? hourly.map((f) => {
                                    if(f.time ){
                                        return ( // Explicitly return the JSX
                                            <SwiperSlide key={f.time}> 
                                                <div className="live-weather text-center">
                                                    <h5> Now </h5>
                                                    <div className='icon-div'>
                                                    {f.condition.text}
                                                    <Icon status={f.condition.text} icon={f.condition.icon}></Icon>
                                                    </div>
                                                    <div className="mintem05">
                                                    <h4 className="my-0"> {f.temp_c} <sup>0</sup> </h4>
                                                    <h4 className="my-2"> 29 <sup>0</sup> </h4>
                                                    </div>
                                                    <div className="readfeel d-inline-block w-100">
                                                    <h5>Real Feel
                                                        <span className="d-block">{f.feelslike_c}  <sup>0</sup></span></h5>
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