export function calculateAirQualityIndex(airQuality) {
    const { co, no2, o3, so2, pm2_5, pm10, "us-epa-index": epaIndex, "gb-defra-index": defraIndex } = airQuality;

    // Use the highest severity pollutant index to classify air quality
    if (epaIndex === 1 || defraIndex <= 2) return "Good";
    if (epaIndex === 2 || defraIndex <= 4) return "Fair";
    if (epaIndex === 3 || defraIndex <= 6) return "Moderate";
    if (epaIndex === 4 || defraIndex <= 8) return "Bad";
    if (epaIndex === 5 || defraIndex <= 10) return "Very Bad";
    return "Dangerous";
}