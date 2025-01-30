import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './slices/weatherSlice';
import locationReducer from './slices/locationSlice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    weather: weatherReducer,
  },
});

export default store;
