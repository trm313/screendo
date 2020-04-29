import React from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

import { devices } from "../../constants"

import Browser from "./Browser"
import Android from "./Android"
import IPhoneX from "./IPhoneX"
import IMacPro from "./IMacPro"
import MacAir from "./MacAir"
import FrameControls from "./FrameControls"

const wrapperOptions = {
  type: true,
  limitToBounds: true,
  panningEnabled: true,
  transformEnabled: true,
  pinchEnabled: true,
  limitToWrapper: false,
  disabled: false,
  dbClickEnabled: true,
  lockAxisX: false,
  lockAxisY: false,
  velocityEqualToMove: true,
  enableWheel: false,
  enableTouchPadPinch: true,
  enableVelocity: true,
  limitsOnWheel: false,
}

const {
  type,
  limitToBounds,
  panningEnabled,
  transformEnabled,
  pinchEnabled,
  limitToWrapper,
  disabled,
  dbClickEnabled,
  lockAxisX,
  lockAxisY,
  velocityEqualToMove,
  enableWheel,
  enableTouchPadPinch,
  enableVelocity,
  limitsOnWheel,
} = wrapperOptions

const Frame = props => {
  const { graphic, device, image } = props

  let styleParams = device.styles.find(
    style => style.type === graphic.deviceConfigSettings.type
  )
  if (!styleParams) {
    styleParams = device.styles.find(style => style.default)
  }

  // console.log({ graphic, device, styleParams })

  return (
    <TransformWrapper
      options={{
        limitToBounds,
        transformEnabled,
        disabled,
        limitToWrapper,
      }}
      pan={{
        disabled: !panningEnabled,
        lockAxisX,
        lockAxisY,
        velocityEqualToMove,
        velocity: enableVelocity,
      }}
      pinch={{ disabled: !pinchEnabled }}
      doubleClick={{ disabled: !dbClickEnabled }}
      wheel={{
        wheelEnabled: enableWheel,
        touchPadEnabled: enableTouchPadPinch,
        limitsOnWheel,
      }}
    >
      {({
        zoomIn,
        zoomOut,
        resetTransform,
        setDefaultState,
        positionX,
        positionY,
        scale,
        previousScale,
        options: { limitToBounds, transformEnabled, disabled },
        ...rest
      }) => (
        <React.Fragment>
          <FrameControls
            zoomIn={zoomIn}
            zoomOut={zoomOut}
            resetTransform={resetTransform}
          />
          <div
            className="flex justify-center"
            style={{
              width: "800px",
            }}
          >
            <TransformComponent>
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
            </TransformComponent>
          </div>
        </React.Fragment>
      )}
    </TransformWrapper>
  )
}

export default Frame
