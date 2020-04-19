import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/Layout/seo"

import HeroHeader from "../components/LandingPage/HeroHeader"
import FramesList from "../components/LandingPage/FramesList"
import FAQ from "../components/LandingPage/FAQ"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="LandingPage">
      <HeroHeader />
      <FramesList />
      <FAQ />
    </div>
  </Layout>
)

export default IndexPage
