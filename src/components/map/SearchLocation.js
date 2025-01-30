"use client";

import { setLoading, setSelectedlocation } from "@/store/slices/locationSlice";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const SearchLocation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const {selectedlocation,loading} = useSelector((state) => state.location);

  const controllerRef = useRef(null); // Ref to store AbortController
  
  // Fetch location suggestions from Nominatim API with request cancellation
  const fetchSuggestions = async (query) => {
    dispatch(setLoading(true));
    if (query.length < 3) {
      setSuggestions([]);
      dispatch(setLoading(false));
      return;
    }

    // Cancel previous request if exists
    if (controllerRef.current) {
      controllerRef.current.abort(); // Abort the previous request
    }

    // Create a new AbortController for the current request
    const controller = new AbortController();
    const signal = controller.signal;
    controllerRef.current = controller;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`,
        { signal }
      );

      if (!response.ok) throw new Error("Request failed");

      const data = await response.json();
      setSuggestions(data);
      dispatch(setLoading(false));
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Previous request cancelled.");
      } else {
        console.error("Error fetching data:", error);
      }
    }
  };

  // Handle search input change on key up or key down
  const handleKeyEvents = (e) => {
    if (e.key === "Enter" && suggestions.length > 0) {
      handleLocationSelect(suggestions[0]); // Select the first result on Enter
      return;
    }

    setSearchQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  // Handle location selection
  const handleLocationSelect = (location) => {
    setSearchQuery(location.display_name);
    setSuggestions([]);
    dispatch(setSelectedlocation(location));
    // router.push("/"+location.name); // Navigate to "/about"
  };

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        className="form-control"
        placeholder="Search location..."
        value={searchQuery}
        onChange={handleKeyEvents} // Triggers on key events
      />

      {/* Suggestions Dropdown */}
      {
        loading && (
          <div className="search-loading">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          </div>
        )
      }
      {suggestions.length > 0 && (
        <ul className="search-list">
          {suggestions.map((location, index) => (
            <li
              key={index}
              className="search-item"
              onClick={() => handleLocationSelect(location)}
              data-bs-dismiss="modal" aria-label="Close"
            >
              {location.display_name}
            </li>
          ))}
        </ul>
      )}

      {/* Map Container */}
    </div>
  );
};

export default SearchLocation;
