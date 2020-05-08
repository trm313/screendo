import React, { useState } from "react"
import ImageUploader from "react-images-upload"
import { useSelector, useDispatch } from "react-redux"

import { setImage } from "../../../reducers/graphicReducer"
import { gaImageUpload } from "../../../utils/ga"

const Uploader = props => {
  const { label = "Upload Screenshot" } = props
  const dispatch = useDispatch()
  const graphic = useSelector(store => store.graphic)

  const onDrop = pictures => {
    let imageData = {
      filename: pictures[0].name,
      image: URL.createObjectURL(pictures[0]),
    }
    dispatch(setImage(imageData))
    gaImageUpload()
  }

  return (
    <ImageUploader
      {...props}
      withIcon={true}
      buttonText="Choose images"
      onChange={onDrop}
      imgExtension={[".jpg", ".png"]}
      // label="Max file size: 5mb \n| Accepts: png, jpg"
      label={label}
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
