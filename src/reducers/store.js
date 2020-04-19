import { configureStore } from "@reduxjs/toolkit"

import graphicReducer from "./graphicReducer"

const store = configureStore({
  reducer: {
    graphic: graphicReducer,
  },
})

export default store
