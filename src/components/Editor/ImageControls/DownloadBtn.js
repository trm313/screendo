import React, { useState, useEffect } from "react"
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

  // If Input is dirty, we will permanently honor it (and not autogenerate filenames on graphic changes)
  const [dirtyInput, setDirtyInput] = useState(false)

  useEffect(() => {
    if (graphic.source.filename && !dirtyInput) {
      let name = generateFilename()
      dispatch(setImageName(name))
      // setFilename(name);
    }
  }, [
    dirtyInput,
    graphic.source.image,
    graphic.source.filename,
    graphic.device,
    graphic.deviceConfigSettings.type,
  ])

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

  const generateFilename = () => {
    let name = `${graphic.source.filename.split(".")[0]}_${graphic.device}_${
      graphic.deviceConfigSettings.type
    }.png`
    return name
  }

  const handleChangeInput = val => {
    if (!dirtyInput) {
      setDirtyInput(true)
    }

    dispatch(setImageName(val))
  }

  // To "un-dirty" the input, this function will reinstate the default filename generation
  const resetInput = () => {
    let name = generateFilename()
    dispatch(setImageName(name))
    setDirtyInput(false)
  }

  return (
    <div className="form-group max-w-lg my-8 shadow">
      <button
        className={`btn bg-gray-200 rounded-r-none ${
          dirtyInput ? "text-accent" : "text-gray-400"
        }`}
        title="Reset Default"
        onClick={() => resetInput()}
        disabled={!dirtyInput}
      >
        <i className="ri-refresh-line" />
      </button>
      <input
        className="form-input rounded-none"
        value={graphic.source.name}
        onChange={e => handleChangeInput(e.target.value)}
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
