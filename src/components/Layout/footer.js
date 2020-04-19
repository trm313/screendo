import React from "react"

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 w-full py-8 px-6 flex justify-between">
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
    </footer>
  )
}

export default Footer
