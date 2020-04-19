import React from "react"
import { Link } from "gatsby"
import HeaderImg from "../../images/LandingPage/Logo_Macbook-iPhone_Dark.png"

const HeroHeader = () => {
  return (
    <section className="w-full flex flex-wrap items-center justify-around px-8 py-12 text-gray">
      <div className="max-w-md">
        <h1 className="font-header font-thin text-5xl my-4 highlight">
          Easy Device Screenshots
        </h1>
        <h2 className="font-paragraph font-thin text-2xl my-4 normal-case">
          Devices are dynamically generated to fit your image
        </h2>
        <h6 className="my-2 text-gray-600 text-center mx-auto">
          No cropping, no stretching, no headaches
        </h6>
        <Link
          className="btn btn-primary shadow-lg w-40 justify-center mx-auto"
          to="/app"
        >
          <span>Go To App</span>
          <i className="ri-arrow-right-fill ml-4" />
        </Link>
      </div>
      <img className="max-w-md" src={HeaderImg} />
    </section>
  )
}

export default HeroHeader
