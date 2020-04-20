import React from "react"
// import { useSelector, useDispatch } from "react-redux"

import Layout from "../components/Layout"
import SEO from "../components/Layout/seo"

import DeviceSelector from "../components/DeviceSelector"
import Editor from "../components/Editor"

const AppPage = () => {
  return (
    <Layout>
      <SEO title="App" />
      <div
        className="min-h-screen w-full flex flex-col items-center mb-32"
        id="Polkadot--Grey"
      >
        <DeviceSelector />
        <Editor />
      </div>
    </Layout>
  )
}

export default AppPage
