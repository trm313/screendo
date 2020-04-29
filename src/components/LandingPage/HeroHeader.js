import React from "react"
import { Link } from "gatsby"
import HeaderImg from "../../images/LandingPage/HeaderImage.png"

const HeroHeader = () => {
  return (
    <section
      className="w-full flex flex-wrap items-center justify-around px-8 py-12 text-gray HeroHeader"
      id="HeroHeader"
    >
      <div className="w-full md:w-1/2 max-w-md text-center mx-auto md:mx-0 md:text-left">
        <h1 className="font-header font-thin text-gray-800 text-5xl my-4 highlight">
          Easy Device Screenshots
        </h1>
        <h2 className="font-paragraph font-thin text-2xl my-4 normal-case">
          Devices are dynamically generated to fit your image
        </h2>
        <h6 className="my-2 text-gray-600">
          No cropping, no stretching, no headaches
        </h6>
        <Link
          className="btn btn-primary shadow-lg justify-center w-40 mx-auto md:mx-0"
          to="/app"
        >
          <span>Go To App</span>
          <i className="ri-arrow-right-fill ml-4" />
        </Link>
      </div>
      <img className="w-full md:w-1/2 my-4 md:my-0 max-w-3xl" src={HeaderImg} alt="Screendo device screenshot Macbook and iPhone" />
    </section>
  )
}

export default HeroHeader
