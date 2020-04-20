import React, { useState } from "react"
import ImageUploader from "react-images-upload"
import { useSelector, useDispatch } from "react-redux"

import { setImage } from "../../../reducers/graphicReducer"

const Uploader = props => {
  const { onUpload } = props

  const dispatch = useDispatch()
  const graphic = useSelector(store => store.graphic)

  const onDrop = pictures => {
    console.log("onDrop", pictures)

    let imageData = {
      filename: pictures[0].name,
      image: URL.createObjectURL(pictures[0]),
    }
    dispatch(setImage(imageData))
  }

  return (
    <ImageUploader
      {...props}
      withIcon={true}
      buttonText="Choose images"
      onChange={onDrop}
      imgExtension={[".jpg", ".png"]}
      // label="Max file size: 5mb \n| Accepts: png, jpg"
      label="Upload Screenshot"
      // withLabel={false}
      maxFileSize={5242880}
      buttonClassName="btn btn-primary"
      className="shadow-none"
      fileContainerStyle={{ boxShadow: "none" }}
      singleImage={true}
      // withPreview={true}
    />
  )
}

export default Uploader
