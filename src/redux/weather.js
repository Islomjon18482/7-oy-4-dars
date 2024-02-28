import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getData = createAsyncThunk(
    "getData",
    async (cityName, thunkAPI) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f49653e026f6bd0c4262ce24fd7466ae`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return await response.json();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {weather: [], status: ''},
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(getData.pending, (state, actions)=>{
                state.status = "pending"
            })
            .addCase(getData.fulfilled, (state, actions)=>{
                state.weather = actions.payload
                state.status = "sucsess"
            })
            .addCase(getData.rejected, (state, actions)=>{
                state.status = "rejected"
            })
    }
})

export default weatherSlice.reducer