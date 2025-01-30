
import Head from 'next/head';

import React, { useEffect } from 'react'
import Home from './home';
import { useDispatch, useSelector } from 'react-redux';
import { setError, setSelectedlocation } from '@/store/slices/locationSlice';



function HomePage({slug}) {
  const dispatch = useDispatch();
  const {selectedlocation} = useSelector((state) => state.location);
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      dispatch(setError("Geolocation is not supported by your browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(setSelectedlocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }));
      },
      (error) => {
        dispatch(setError(error.message));
        dispatch(setSelectedlocation({
          lat: 33.1833, 
          lon: 73.7667,
        }));
      }
    );
  };
  useEffect(() => {
    if(!slug){
      getUserLocation()
    }
  }, []); // Empty dependency array ensures this runs once on component mount
  return (
    <div>
      <Head>
        <title>WeaCool</title>
      </Head>
      <Home></Home>
    </div>
  )
}

export default HomePage