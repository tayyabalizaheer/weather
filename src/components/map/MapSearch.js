"use client";

import { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { OSM } from "ol/source";
import { Tile as TileLayer } from "ol/layer";
import { fromLonLat, toLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Circle as CircleStyle, Fill, Stroke } from "ol/style";

const MapSearch = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [marker, setMarker] = useState(null);
  useEffect(() => {
    if (!mapRef.current) return;

    const initialMap = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]),
        zoom: 2,
      }),
    });

    setMap(initialMap);

    // Add click event listener to the map
    initialMap.on("click", (event) => {
      const coordinates = event.coordinate;
      const lonLat = toLonLat(coordinates);

      // Update input with clicked lat/lon
      setSearchQuery(`Lat: ${lonLat[1].toFixed(6)}, Lon: ${lonLat[0].toFixed(6)}`);

      // Update marker
      updateMarker(coordinates, initialMap);
    });
    return () => initialMap.setTarget(null); // Cleanup on unmount
  }, []);

  // Fetch location suggestions from Nominatim API
  const fetchSuggestions = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
    );
    const data = await response.json();

    setSuggestions(data);
  };

  // Handle search input change on key up or key down
  const handleKeyEvents = (e) => {
    if (e.key === "Enter") {
      if (suggestions.length > 0) {
        handleLocationSelect(suggestions[0]); // Select the first result on Enter
      }
      return;
    }

    setSearchQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  // Handle location selection
  const handleLocationSelect = (location) => {
    setSearchQuery(location.display_name);
    setSuggestions([]);
    setSelectedLocation(location);

    const { lat, lon } = location;
    const coordinates = fromLonLat([parseFloat(lon), parseFloat(lat)]);

    // Move the map view
    map.getView().animate({
      center: coordinates,
      zoom: 12,
      duration: 1000,
    });

    // Remove old markers
    map.getLayers().forEach((layer) => {
      if (layer instanceof VectorLayer) {
        map.removeLayer(layer);
      }
    });

    // Add marker
    const initmarker = new Feature({
      geometry: new Point(coordinates),
    });

    initmarker.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({ color: "red" }),
          stroke: new Stroke({ color: "white", width: 2 }),
        }),
      })
    );

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [initmarker],
      }),
    });
    
    map.addLayer(vectorLayer);
    // Update marker state
    setMarker(initmarker);
  };
  // Function to update the marker position
  const updateMarker = (coordinates, mapInstance) => {
    if (!mapInstance) return;

    // Remove previous marker
    if (marker) {
      mapInstance.removeLayer(marker);
    }

    // Create a new marker
    const newMarkerFeature = new Feature({
      geometry: new Point(coordinates),
    });

    newMarkerFeature.setStyle(
      new Style({
        image: new CircleStyle({
          radius: 7,
          fill: new Fill({ color: "red" }),
          stroke: new Stroke({ color: "white", width: 2 }),
        }),
      })
    );

    // Create a new vector layer
    const newMarkerLayer = new VectorLayer({
      source: new VectorSource({
        features: [newMarkerFeature],
      }),
    });

    // Add marker layer to the map
    mapInstance.addLayer(newMarkerLayer);

    // Update marker state
    setMarker(newMarkerLayer);
  };
  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search location..."
        value={searchQuery}
        onChange={handleKeyEvents} // Triggers on key up
        // Alternatively, use onKeyDown={handleKeyEvents}
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          padding: "5px",
          borderRadius: "5px",
          width: "300px",
        }}
      />

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: 40,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            background: "white",
            listStyle: "none",
            padding: 0,
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "300px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {suggestions.map((location, index) => (
            <li
              key={index}
              onClick={() => handleLocationSelect(location)}
              style={{
                padding: "8px",
                cursor: "pointer",
                borderBottom: "1px solid #ddd",
              }}
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}

      {/* Map Container */}
      {/* <div ref={mapRef} style={{ width: "100%", height: "100%" }}></div> */}
    </div>
  );
};

export default MapSearch;
