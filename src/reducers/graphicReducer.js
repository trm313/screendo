import { createSlice } from "@reduxjs/toolkit"

import { devices } from "../constants"

let initialState = {
  source: {
    type: "UPLOAD",
    image: null,
    filename: null,
    name: "Screenshot.png",
  },
  device: devices.IMACPRO,
  deviceConfigSettings: {
    type: "Light",
  },
  imageConfigSettings: {
    bgColor: "#6AAEE8",
    borderRadius: 15,
    padding: 20,
    boxShadow: "none",
    includeNotch: true,
  },
}

const graphicSlice = createSlice({
  name: "graphic",
  initialState,
  reducers: {
    setImage(state, action) {
      state.source.image = action.payload
      return state
    },
    setImageName(state, action) {
      state.source.name = action.payload
    },
    setDevice(state, action) {
      state.device = action.payload
      return state
    },
    handleDeviceConfigChange(state, action) {
      state.deviceConfigSettings[action.payload.field] = action.payload.value
      return state
    },
    handleImageConfigChange(state, action) {
      state.imageConfigSettings[action.payload.field] = action.payload.value
      return state
    },
    startNew() {
      return initialState
    },
  },
})

const { actions, reducer } = graphicSlice
export const {
  setImage,
  setImageName,
  setDevice,
  startNew,
  handleImageConfigChange,
  handleDeviceConfigChange,
} = actions
export default reducer
