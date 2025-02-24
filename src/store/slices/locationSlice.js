import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedlocation: null,
  loading : false,
  slug : false,
  error : false
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setSelectedlocation: (state, action) => {
      state.selectedlocation = action.payload;
      console.log("action.payload",action.payload);
    },
    setLoading: (state, action) => {
        state.loading = action.payload;
    }
    ,
    setError: (state, action) => {
        state.error = action.payload;
    }
    ,
    setSlug: (state, action) => {
        state.slug = action.payload;
    }
  },
});

export const { setLoading, setSelectedlocation,setError,setSlug } = locationSlice.actions;
export default locationSlice.reducer;
