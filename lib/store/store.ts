import { configureStore } from "@reduxjs/toolkit"
import videosReducer from "./slices/videos-slice"
import uiReducer from "./slices/ui-slice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      videos: videosReducer,
      ui: uiReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
