import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import img1 from "../../images/LandingPage/Logo_Macbook_Gold.png"
import img2 from "../../images/LandingPage/Logo_iPhone_Notch_Light.png"
import img3 from "../../images/LandingPage/Logo_Safari_Dark.png"
import img4 from "../../images/LandingPage/Logo_iMac_Light.png"
import img5 from "../../images/LandingPage/Logo_Android_Dark.png"
import img6 from "../../images/LandingPage/Logo_Macbook_Dark.png"

const imgArr = [
  {
    img: img2,
    alt: "Device screenshot iPhone phone white with notch",
    color: "#4cbbb9",
    bgColor: "bg-primary-400",
  },
  {
    img: img1,
    alt: "Device screenshot Macbook computer gold",
    color: "#035aa6",
    bgColor: "bg-accent-400",
  },

  {
    img: img4,
    alt: "Device screenshot iMac computer white",
    color: "#844685",
    bgColor: "bg-primary-400 md:bg-accent-400",
  },
  {
    img: img3,
    alt: "Device screenshot Safari browser dark",
    color: "#ffe75e",
    bgColor: "bg-accent-400 md:bg-primary-400",
  },
  {
    img: img5,
    alt: "Device screenshot Android phone dark",
    color: "#fb7b6b",
    bgColor: "bg-primary-400",
  },
  {
    img: img6,
    alt: "Device screenshot Macbook laptop dark",
    color: "#d4f8e8",
    bgColor: "bg-accent-400",
  },
]

const Block = ({ bgColor, color, src, alt }) => (
  <div
    className={`w-full md:w-1/2 flex items-center justify-center p-8 lg:pt-16 ${bgColor}`}
    // style={{ backgroundColor: color }}
  >
    <img src={src} alt={alt} style={{ maxHeight: "250px" }} />
  </div>
)

const DeviceBlocks = () => {
  return (
    <div className="w-full flex flex-wrap">
      {imgArr.map(item => (
        <Block
          bgColor={item.bgColor}
          color={item.color}
          src={item.img}
          alt={item.alt}
        />
      ))}
    </div>
  )
}

export default DeviceBlocks
