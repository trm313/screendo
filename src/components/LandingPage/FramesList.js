import React, { useRef, useState } from "react"
import {
  SnapList,
  SnapItem,
  useVisibleElements,
  useScroll,
  useDragToScroll,
  isTouchDevice,
} from "react-snaplist-carousel"

import Safari_Light from "../../images/LandingPage/Logo_Safari_Light.png"
import Safari_Dark from "../../images/LandingPage/Logo_Safari_Dark.png"
import iPhone_Light from "../../images/LandingPage/Logo_iPhone_Notch_Light.png"
import iPhone_Dark from "../../images/LandingPage/Logo_iPhone_Notch_Dark.png"
import Android_Light from "../../images/LandingPage/Logo_Android_Light.png"
import Android_Dark from "../../images/LandingPage/Logo_Android_Dark.png"
import Macbook_Light from "../../images/LandingPage/Logo_Macbook_Light.png"
import Macbook_Dark from "../../images/LandingPage/Logo_Macbook_Dark.png"
import iMac_Light from "../../images/LandingPage/Logo_iMac_Light.png"
import iMac_Dark from "../../images/LandingPage/Logo_iMac_Dark.png"

const list = [
  {
    name: "iPhone",
    styles: {
      Light: iPhone_Light,
      Dark: iPhone_Dark,
    },
  },
  {
    name: "Android",
    styles: {
      Light: Android_Light,
      Dark: Android_Dark,
    },
  },
  {
    name: "Browser",
    styles: {
      Light: Safari_Light,
      Dark: Safari_Dark,
    },
  },
  {
    name: "Macbook",
    styles: {
      Light: Macbook_Light,
      Dark: Macbook_Dark,
    },
  },
  {
    name: "iMac",
    styles: {
      Light: iMac_Light,
      Dark: iMac_Dark,
    },
  },
]

const Item = ({ device, index, goToElement, color }) => {
  return (
    <SnapItem snapAlign="center">
      <div
        className="flex flex-col justify-center items-center py-4 px-12"
        onClick={() => goToElement(index)}
      >
        <img style={{ maxHeight: "250px" }} src={device.styles[color]} />
        <h6 className="text-xl font-thin">{device.name}</h6>
      </div>
    </SnapItem>
  )
}

const StyleButton = ({
  children,
  value = "Light",
  selected = false,
  setColor,
}) => (
  <button
    onClick={() => setColor(value)}
    className={`btn m-1 rounded-none ${
      selected
        ? "bg-white text-primary"
        : "bg-transparent border border-white text-white"
    } `}
  >
    {children}
  </button>
)

const FramesList = () => {
  const [color, setColor] = useState("Light")
  const snapList = useRef(null)
  const selected = useVisibleElements(
    { ref: snapList, debounce: 10 },
    elements => elements[0]
  )

  const isDragging = useDragToScroll({ ref: snapList, disable: false })
  const goToElement = useScroll({ ref: snapList })

  return (
    <section
      className="w-full text-center bg-primary text-white py-8"
      id="FrameList"
    >
      <h2 className="my-2">Available Devices</h2>
      <div className="flex items-center justify-center">
        <StyleButton
          value="Light"
          setColor={setColor}
          selected={color === "Light"}
        >
          Light
        </StyleButton>
        <StyleButton
          value="Dark"
          setColor={setColor}
          selected={color === "Dark"}
        >
          Dark
        </StyleButton>
      </div>
      <p className="text-xs italic">
        Some devices have additional color options
      </p>
      <SnapList ref={snapList}>
        {list.map((d, index) => (
          <Item
            device={d}
            index={index}
            goToElement={goToElement}
            color={color}
          />
        ))}
      </SnapList>
      <div className="flex items-center justify-center">
        <i className="ri-arrow-left-fill" />
        <i className="ri-mouse-line text-2xl mx-2" />
        <i className="ri-arrow-right-fill" />
      </div>
    </section>
  )
}

export default FramesList
