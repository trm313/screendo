import React from "react"

const FrameControls = ({ zoomIn, zoomOut, resetTransform }) => {
  return (
    <div className="w-full flex items-center justify-end pr-40 my-1">
      <button
        className="btn mx-1 bg-gray-200 text-accent"
        onClick={zoomOut}
        title="Zoom out"
      >
        <i className="ri-zoom-out-line" />
      </button>
      <button
        className="btn mx-1 bg-gray-200 text-accent"
        onClick={zoomIn}
        title="Zoom in"
      >
        <i className="ri-zoom-in-line" />
      </button>
      <button
        className="btn btn-primary mx-1 "
        onClick={resetTransform}
        title="Fill"
      >
        <i className="ri-fullscreen-line" />
      </button>
    </div>
  )
}

export default FrameControls
