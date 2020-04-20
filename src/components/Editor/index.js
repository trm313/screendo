import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { devices, deviceConfigs } from "../../constants"
import {
  handleImageConfigChange,
  handleDeviceConfigChange,
} from "../../reducers/graphicReducer"

import Frame from "../Frames"

import Section from "./Section"
import DeviceStyleSelector from "./ImageControls/DeviceStyleSelector"
import Slider from "./ImageControls/Slider"
import ColorPicker from "./ImageControls/ColorPicker"
import ToggleButton from "./ImageControls/ToggleButton"
import Uploader from "./ImageControls/Uploader"
import DownloadBtn from "./ImageControls/DownloadBtn"

const Editor = props => {
  const dispatch = useDispatch()
  const graphic = useSelector(store => store.graphic)

  const device = deviceConfigs.find(device => device.device === graphic.device)

  let image = graphic.source.image
  if (!image) {
    image = device.defaultScreenshot
  }

  const handleEditorChange = (field, value) => {
    console.log({ field, value })
    dispatch(handleImageConfigChange({ field, value }))
  }

  const handleDeviceStyleChange = type => {
    dispatch(handleDeviceConfigChange({ field: "type", value: type }))
  }

  // return (
  //   <div className="flex w-full flex flex-col justify-center items-center">
  //     <div className="w-full p-8 my-2 flex flex-wrap justify-around">
  //       <Section label="Image">
  //         <Uploader />
  //       </Section>
  //       <Section label="Canvas">
  //         <Slider
  //           onChange={val => handleEditorChange("padding", val)}
  //           value={graphic.imageConfigSettings.padding}
  //           min={10}
  //           max={100}
  //           step={5}
  //           label="Padding"
  //           units="px"
  //         />
  //         <h6 className="uppercase font-paragraph text-gray text-xs font-thin">
  //           Background Color
  //         </h6>
  //         <ColorPicker
  //           onChange={val => handleEditorChange("bgColor", val)}
  //           value={graphic.imageConfigSettings.bgColor}
  //         />
  //       </Section>
  //       <Section label="Device">
  //         {device.enabledControls.frameStyleSelection && (
  //           <DeviceStyleSelector
  //             styles={device.styles}
  //             onSelect={handleDeviceStyleChange}
  //             selectedType={graphic.deviceConfigSettings.type}
  //           />
  //         )}
  //         {device.enabledControls.notchSelection && (
  //           <ToggleButton
  //             label="Notch"
  //             value={graphic.imageConfigSettings.includeNotch}
  //             onChange={val => handleEditorChange("includeNotch", val)}
  //           />
  //         )}
  //       </Section>
  //     </div>
  //     <DownloadBtn />
  //     <Frame graphic={graphic} device={device} image={image} />
  //   </div>
  // )

  return (
    <div className="flex flex-wrap w-full">
      <div className="w-full lg:w-1/4 flex items-center lg:flex-col lg:justify-center">
        <Section label="Image">
          <Uploader />
        </Section>
        <Section label="Canvas">
          <Slider
            onChange={val => handleEditorChange("padding", val)}
            value={graphic.imageConfigSettings.padding}
            min={10}
            max={100}
            step={5}
            label="Padding"
            units="px"
          />
          <h6 className="uppercase font-paragraph text-gray text-xs font-thin">
            Background Color
          </h6>
          <ColorPicker
            onChange={val => handleEditorChange("bgColor", val)}
            value={graphic.imageConfigSettings.bgColor}
          />
        </Section>
        <Section label="Device">
          {device.enabledControls.frameStyleSelection && (
            <DeviceStyleSelector
              styles={device.styles}
              onSelect={handleDeviceStyleChange}
              selectedType={graphic.deviceConfigSettings.type}
            />
          )}
          {device.enabledControls.notchSelection && (
            <ToggleButton
              label="Notch"
              value={graphic.imageConfigSettings.includeNotch}
              onChange={val => handleEditorChange("includeNotch", val)}
            />
          )}
        </Section>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center">
        <DownloadBtn />
        <Frame graphic={graphic} device={device} image={image} />
      </div>
    </div>
  )
}

export default Editor
