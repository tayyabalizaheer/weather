
import dynamic from 'next/dynamic';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setData } from '../store/slices/weatherSlice';
import React, { useEffect } from 'react';
import { setError, setSelectedlocation } from '@/store/slices/locationSlice';
// Dynamically import the component
const Main = dynamic(() => import('@/components/homePage/Main'), {  ssr: false, });
const Recent = dynamic(() => import('@/components/homePage/Recent'), {  ssr: false, });
const Daily = dynamic(() => import('@/components/homePage/Daily'), {  ssr: false, });
const World = dynamic(() => import('@/components/homePage/World'), {  ssr: false, });

function Home({slug}) {
    const dispatch = useDispatch();
  const {selectedlocation} = useSelector((state) => state.location);

  useEffect(() => {
    if(selectedlocation||slug){
      fetchData(); // Call the fetch function
    }
  }, [selectedlocation,slug]); // Empty dependency array ensures this runs once on component mount

  const fetchData = async () => {
    try {
      console.log("selectedlocation",selectedlocation);
      var fetchUrl = `/api/current`;
      if(slug){
        fetchUrl = `/api/current?q=${slug}`;
      }
      else if(selectedlocation){
        fetchUrl = `/api/current?q=${selectedlocation.lat??""},${selectedlocation.lon??""}`;
      }
      const response = await fetch(fetchUrl); // Replace with your API URL
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
  return (
    <div>
        <Main></Main>
        <section className="body-part float-start w-100">
            <Daily></Daily>
            <Recent></Recent>
            <World></World>
        </section>
    </div>
  )
}

export default Home