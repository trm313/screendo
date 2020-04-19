import React from "react"
import { useSelector, useDispatch } from "react-redux"

import Layout from "../components/Layout"

import DeviceSelector from "../components/DeviceSelector"
import Editor from "../components/Editor"
import DownloadBtn from "../components/Editor/ImageControls/DownloadBtn"

const AppPage = () => {
  const dispatch = useDispatch()
  const graphic = useSelector(store => store.graphic)

  const onDrop = pictures => {
    console.log("onDrop", pictures)
    let imagesData = pictures.map(p => {
      return URL.createObjectURL(p)
    })

    console.log(imagesData)
  }

  return (
    <Layout>
      <div className="min-h-screen w-full flex flex-col items-center mb-32">
        <DeviceSelector />

        <Editor onUpload={onDrop} imageKey={0} />
      </div>
    </Layout>
  )
}

export default AppPage
