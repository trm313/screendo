import React from "react"

const ImageLoader = ({ height = 1080, width = 1920 }) => {
  return (
    <div
      className="bg-gray-200 flex flex-col items-center justify-center"
      style={{ height, width }}
    >
      <i className="ri-loader-5-line text-6xl spin-inf text-gray-400" />
    </div>
  )
}

export default ImageLoader
