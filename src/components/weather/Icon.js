import React from 'react'

function Icon({status="sunny",icon=""}) {
    status = status.trim();
    var renderHTML = ""

    if(status=="Sunny" ){
        renderHTML = (
            <div className="sunny"></div>
    );
    }
    else if( status.trim() =="Clear" ){
        renderHTML = (
            <div className="fas fa-moon moon-icon fa-lg"></div>
    );
    }
    else if(status.trim() =="Partly Cloudy"  ){
        renderHTML = (
            <div className="partly_cloudy">
                    <div className="partly_cloudy__sun"></div>
                    <div className="partly_cloudy__cloud"></div>
            </div>
        );
    }
    else if( status =="Cloudy" ){
        renderHTML = (
            <div className="cloudy"></div>
        );
    }
    else if( status =="Light drizzle"  
        || status =="Freezing drizzle"  
        || status =="Moderate rain"  
        || status =="Light rain"  
        || status =="Light rain"  
        || status =="Moderate or heavy freezing rain"  
        || status =="Light freezing rain"  
        || status =="Moderate rain at times"  
        || status =="Thundery outbreaks in nearby"  
    ){
        renderHTML = (
            <div className="rainy">
                <div className="rainy__cloud"></div>
                <div className="rainy__rain"></div>
            </div>
        );
    }
    else if( status =="Patchy rain possible" 
        || status =="Patchy freezing drizzle possible"  
        || status =="Patchy light rain"  
        || status =="Patchy rain nearby"  
        || status =="Patchy light drizzle"){
        renderHTML = (
            <div className="rainy">
                <div className="only_sunny"></div>
                <div className="rainy__cloud"></div>
                <div className="rainy__rain"></div>
            </div>
        );
    }
    else if( status =="Heavy freezing drizzle"
        || status =="Heavy rain at times"  
        || status =="Heavy rain"  
        || status =="Patchy light rain with thunder"  
        || status =="Moderate or heavy rain with thunder"  
        || status =="Patchy light snow with thunder"  
        || status =="Moderate or heavy snow with thunder"  
        || status =="Thundery outbreaks possible"  
        
     ){
        renderHTML = (
            <div className="thundery">
                <div className="thundery__cloud"></div>
                <div className="thundery__rain"></div>
            </div>
        );
    }
    else {
        renderHTML = (
            <div className="weather_status"><img src={icon.replaceAll("64x64","128x128")} alt={status}></img></div>
        );
    }
    return ( 
        <div>{renderHTML}</div>
    )
}

export default Icon