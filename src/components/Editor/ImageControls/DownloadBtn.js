import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import domtoimage from "dom-to-image"
import download from "downloadjs"

import { setImageName } from "../../../reducers/graphicReducer"

const triggerDownload = (filename = "Screenshot.png") => {
  let canvas = document.getElementById("screenshot-0")

  domtoimage
    .toPng(canvas)
    .then(dataUrl => {
      console.log(dataUrl)
      download(dataUrl, filename)
    })
    .catch(error => {
      console.error("Something went wrong downloading image", error)
    })
}

const DownloadBtn = ({ renameInput = true }) => {
  const dispatch = useDispatch()
  const graphic = useSelector(store => store.graphic)

  if (!renameInput) {
    return (
      <button
        className="btn btn-primary my-8"
        onClick={() => triggerDownload()}
      >
        <i className="ri-download-fill mr-2" />
        Download
      </button>
    )
  }

  return (
    <div className="form-group max-w-md my-8 shadow">
      <input
        className="form-input rounded-r-none"
        value={graphic.source.name}
        onChange={e => dispatch(setImageName(e.target.value))}
      />
      <button
        className="btn btn-primary rounded-l-none"
        onClick={() => triggerDownload(graphic.source.name)}
      >
        <i className="ri-download-fill mr-2" />
        Download
      </button>
    </div>
  )
}

export default DownloadBtn
