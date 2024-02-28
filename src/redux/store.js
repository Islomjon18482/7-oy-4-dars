import { configureStore } from "@reduxjs/toolkit"
import weather from "./weather.js"

export const store = configureStore({
    reducer: {
        weather: weather
    }
})
