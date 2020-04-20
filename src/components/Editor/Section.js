import React from "react"

const Section = props => {
  const { label } = props
  return (
    <div
      className="lg:my-4 flex flex-col items-center justify-between"
      data-label={`Section-${label}`}
    >
      {label && (
        <h6 className="text-xs font-thin uppercase text-gray-600">{label}</h6>
      )}
      <div className="flex flex-col justify-center">{props.children}</div>
      {label && <div className="" />}
    </div>
  )
}

export default Section
