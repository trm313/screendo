import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { setDevice } from "../../reducers/graphicReducer"
import { deviceTypes, deviceTypesMeta, deviceConfigs } from "../../constants"

// TODO: Add this to selector: https://github.com/luispuig/react-snaplist-carousel?v=3

const DeviceSelector = props => {
  const dispatch = useDispatch()
  const graphic = useSelector(store => store.graphic)

  const [selectedType, setSelectedType] = useState("ALL")

  const handleSelect = device => {
    dispatch(setDevice(device))
  }

  // Filter deviceConfigs to show selected types
  let visibleDevices
  if (selectedType === "ALL") {
    visibleDevices = deviceConfigs
  } else {
    visibleDevices = deviceConfigs.filter(
      device => device.type === selectedType
    )
  }

  return (
    <div className="w-full text-gray-600">
      <div className="w-full flex">
        {deviceTypesMeta.map(type => (
          <div
            onClick={() => setSelectedType(type.type)}
            className={`flex-grow p-4 flex flex-col items-center justify-center cursor-pointer border-gray-200 border-r last:border-r-0 ${
              selectedType !== type.type && "border-b border-gray-200"
            } ${selectedType === type.type && "text-primary bg-white"}`}
          >
            <i
              className={`${type.icon}${
                selectedType === type.type ? "-fill" : "-line"
              } text-3xl`}
            />
            <h6 className={`font-thin mt-1 `}>{type.name}</h6>
          </div>
        ))}
      </div>
      <div className="bg-white shadow w-full flex justify-around border-gray-200 border-b">
        {visibleDevices.map(device => (
          <div
            className={`flex-grow flex justify-center py-4 cursor-pointer ${
              graphic.device === device.device && "shadow-inner"
            }`}
            onClick={() => handleSelect(device.device)}
          >
            <h6
              className={`font-thin  ${
                graphic.device === device.device && "text-primary font-normal"
              }`}
            >
              {device.name}
            </h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DeviceSelector
