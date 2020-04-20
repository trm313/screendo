import React from "react"

import { devices } from "../../constants"

import Browser from "./Browser"
import Android from "./Android"
import IPhoneX from "./IPhoneX"
import IMacPro from "./IMacPro"
import MacAir from "./MacAir"

const Frame = props => {
  const { graphic, device, image } = props

  let styleParams = device.styles.find(
    style => style.type === graphic.deviceConfigSettings.type
  )
  if (!styleParams) {
    styleParams = device.styles.find(style => style.default)
  }

  console.log({ graphic, device, styleParams })

  return (
    <div>
      {graphic.device === devices.SAFARIBROWSER && (
        <Browser
          image={image}
          graphic={graphic}
          device={device}
          styleParams={styleParams}
        />
      )}
      {graphic.device === devices.ANDROID && (
        <Android
          image={image}
          graphic={graphic}
          device={device}
          styleParams={styleParams}
        />
      )}
      {graphic.device === devices.IPHONEX && (
        <IPhoneX
          image={image}
          graphic={graphic}
          device={device}
          styleParams={styleParams}
        />
      )}
      {graphic.device === devices.IMACPRO && (
        <IMacPro
          image={image}
          graphic={graphic}
          device={device}
          styleParams={styleParams}
        />
      )}
      {graphic.device === devices.MACAIR && (
        <MacAir
          image={image}
          graphic={graphic}
          device={device}
          styleParams={styleParams}
        />
      )}
    </div>
  )
}

export default Frame
