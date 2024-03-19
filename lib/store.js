import { configureStore } from '@reduxjs/toolkit'
import dietTypeReducer from './slices/dietTypeSlice'
import mealsPerDayReducer from './slices/mealsPerDaySlice'
import caloriesPerDaySlice from './slices/caloriesPerDaySlice'
import allergysSlice from './slices/allergysSlice'
import menuSlice from './slices/menuSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      dietType: dietTypeReducer,
      mealsPerDay : mealsPerDayReducer,
      caloriesPerDay : caloriesPerDaySlice,
      allergys : allergysSlice,
      menu : menuSlice,
    }
  })
}