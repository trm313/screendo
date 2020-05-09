import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 w-full py-8 px-6">
      <div className="flex justify-between">
        <h6 className="font-thin">
          Created by{" "}
          <a
            href="https://taylormcman.us"
            target="_blank"
            className="text-primary-800 font-header font-normal"
          >
            Taylor McManus
          </a>
        </h6>
        <p>Hubbub Studios © {new Date().getFullYear()}</p>
      </div>
      <div className="flex justify-center">
        <Link to="/privacy-policy" className="mx-4 text-sm">
          Privacy Policy
        </Link>
        <span>&#183;</span>
        <Link to="/terms-of-service" className="mx-4 text-sm">
          Terms of Service
        </Link>
      </div>
    </footer>
  )
}

export default Footer
