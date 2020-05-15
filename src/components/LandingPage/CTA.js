import React from "react"
import { Link } from "gatsby"

const CTA = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl mx-auto my-8 px-4">
      <h2 className="highlight text-3xl font-header font-thin my-4">
        Make Your Website Pop
      </h2>
      <p className="text-xl my-4">
        Quickly create beautiful graphics for your landing page or marketing
        materials
      </p>
      <Link to="/app" className="btn btn-primary my-4">
        Start Creating
      </Link>
    </div>
  )
}

export default CTA
