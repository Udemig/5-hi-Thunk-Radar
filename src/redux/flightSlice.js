import { createSlice } from '@reduxjs/toolkit';
import { getFlights } from './actions';

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: 'flightSlice',
  initialState,
  extraReducers: (builder) => {
    builder
      // cevap beklerken
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      // olumlu cevap geldiğinde
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
      })
      // olumsuz cevap geldiğinde
      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = 'Uçuş verilerini alırken bir hata oluştu';
      });
  },
});

export default flightSlice.reducer;

/*

 // cevap beklerken
    [getFlights.pending]: (state) => {
      state.isLoading = false;
    },
    // olumlu cevap gelddiğinde
    [getFlights.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.flights = action.payload;
    },
    // olumsuz cevap geldiğinde
    [getFlights.rejected]: (state) => {
      state.isLoading = false;
      state.isError = 'Uçuş verilerini alırken bir hata oluştu';
    },

*/
