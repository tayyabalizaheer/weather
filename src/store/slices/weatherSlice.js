import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  weekly: null,
  today: null,
  loading : false
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.weekly = action.payload?.forecast?.forecastday.slice(0,7)??null;
      state.hourly = action.payload?.forecast?.forecastday[0]?.hour??null;
    },
    setLoading: (state, action) => {
        state.loading = action.payload;
    }
  },
});

export const { setLoading, setData } = weatherSlice.actions;
export default weatherSlice.reducer;
