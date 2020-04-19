import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import LogoFull from "../../images/Logo/Logo_Full_Light@2x.png"

let styles = {
  links:
    "w-full md:visible md:block flex-grow md:flex md:items-center md:w-auto",
  link:
    "block mt-4 md:inline-block md:mt-0 mr-4 uppercase hover:text-primary rounded py-2 px-4",
}

const NavLink = props => {
  const { to, className = styles.link } = props
  return (
    <Link to={to} className={className}>
      {props.children}
    </Link>
  )
}

const Header = ({ siteTitle }) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white text-gray-600 py-4 px-6 md:px-12 border-b border-gray-200 font-header font-light">
      <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">
        <img style={{ height: "50px" }} src={LogoFull} alt="Screendo Logo" />
      </Link>
      <div className="block md:hidden">
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="flex items-center px-3 py-2 border rounded"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          "w-full md:visible md:block flex-grow md:flex md:items-center md:w-auto" +
          (navOpen ? " block visible" : " hidden invisible")
        }
      >
        <div className="text-sm md:flex-grow ml-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/app">App</NavLink>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
