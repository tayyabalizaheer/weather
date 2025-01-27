import dynamic from 'next/dynamic';
import Head from 'next/head';

import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setData } from '../store/slices/weatherSlice';
import React, { useEffect } from 'react';


// Dynamically import the component
const Main = dynamic(() => import('@/components/homePage/Main'), {  ssr: false, });
const Recent = dynamic(() => import('@/components/homePage/Recent'), {  ssr: false, });
const Daily = dynamic(() => import('@/components/homePage/Daily'), {  ssr: false, });
const World = dynamic(() => import('@/components/homePage/World'), {  ssr: false, });

function HomePage() {

  const dispatch = useDispatch();

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/current'); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json(); // Parse JSON data
        console.log(result);
        dispatch(setData(result)); // Update data state
      } catch (err) {
        console.error(err);
        setLoading(false); // Set loading to false
      } 
    };
    fetchData(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs once on component mount

  
  return (
    <div>
      <Head>
        <title>WeaCool</title>
      </Head>
      <Main></Main>
      <section className="body-part float-start w-100">
        <Daily></Daily>
        <Recent></Recent>
        <World></World>

        {/* */}


        {/*  */}

        {/*  */}

        {/* <div className="forecast-videos">
        <div className="container">
          <div className="row g-lg-5">
              <div className="col-lg-8">
                  <h1> Forecast Videos </h1>
                  <div className="best-sl-m owl-carousel owl-theme">
                      <div className="comon-part-video">
                      <a href="#" className="btn p-0">
                          <figure>
                              <img src="images/pexels-adhitya-andanu-1561806.jpg" alt="pn"/>
                          <i className="fas fa-play-circle"></i>
                          </figure>
                        </a>
                          <h5 className="mt-1"> Where is the lightning capital of Australia? </h5>
                          <p className="mt-1"> It is a long established fact that a reader will be distracted by the readable content of a 
                          page when looking at its layout.</p>
                      </div>

                      <div className="comon-part-video">
                      <a href="#" className="btn p-0">
                          <figure>
                              <img src="images/pexels-genaro-servín-763398.jpg" alt="pn"/>
                          <i className="fas fa-play-circle"></i>
                          </figure>
                        </a>
                          <h5 className="mt-1"> Bitter cold snap catches kangaroos on the hop </h5>
                          <p className="mt-1"> It is a long established fact that a reader will be distracted by the readable content of a 
                          page when looking at its layout.</p>
                      </div>

                      <div className="comon-part-video">
                        <a href="#" className="btn p-0">
                          <figure>
                              <img src="images/pexels-elina-sazonova-1907049.jpg" alt="pn"/>
                          <i className="fas fa-play-circle"></i>
                          </figure>
                        </a>
                          <h5 className="mt-1"> Black ice and white snow in the Blue Mountains </h5>
                          <p className="mt-1"> It is a long established fact that a reader will be distracted by the readable content of a 
                          page when looking at its layout.</p>
                      </div>

                  </div>
              </div>

              <div className="col-lg-4">
                <h3> Weather In Pictures </h3>
                <div className="row row-cols-2 row-cols-lg-2 g-2">
                    <div className="col">
                        <a href="#" className="comon-pic">
                          <figure className="m-0">
                              <img src="images/sm-news.jfif" alt="hm"/>
                          </figure>
                          <span className="hover-effect">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
                            </svg>
                          </span>
                        </a>
                        
                    </div>

                    <div className="col">
                      <a href="#" className="comon-pic">
                        <figure className="m-0">
                            <img src="images/small-photo1.jpg" alt="hm"/>
                        </figure>
                        <span className="hover-effect">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
                          </svg>
                        </span>
                      </a>
                      
                    </div>

                      <div className="col">
                        <a href="#" className="comon-pic">
                          <figure className="m-0">
                            <img src="images/worl-sm-3.jpg" alt="hm"/>
                          </figure>
                          <span className="hover-effect">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
                            </svg>
                          </span>
                        </a>
                        
                      </div>

                      <div className="col">
                        <a href="#" className="comon-pic">
                          <figure className="m-0">
                            <img src="images/sm-news.jfif" alt="hm"/>
                          </figure>
                          <span className="hover-effect">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
                            </svg>
                          </span>
                        </a>
                        
                      </div>
                </div>

                <a href="#" className="btn more-btn mt-3"> More Pictures </a>
              </div>
          </div>
        </div>
        </div> */}


      </section>
    </div>
  )
}

export default HomePage