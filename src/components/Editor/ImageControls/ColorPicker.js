import React, { useState } from "react"

const Selection = ({ color, onSelect, selected }) => {
  if (color === "transparent") {
    return (
      <div
        className={`w-8 h-8 rounded-full cursor-pointer mr-1 my-1 flex items-center justify-center ${
          selected ? "border-2 border-gray" : "border border-gray-400"
        }`}
        style={{ backgroundColor: color }}
        onClick={() => onSelect({ hex: color })}
        title="Transparent"
      >
        <i className="ri-close-line text-xs text-gray-400" />
      </div>
    )
  }

  return (
    <div
      className={`w-8 h-8 rounded-full cursor-pointer mr-1 my-1 ${
        selected && "border border-primary"
      }`}
      style={{ backgroundColor: color }}
      onClick={() => onSelect({ hex: color })}
      title={color}
    />
  )
}

const colors = ["#7BDCB5", "#6AAEE8", "#F78DA7", "#9900EF", "transparent"]

const ColorPicker = props => {
  const { onChange, value = "#6aaee8", label = "Background" } = props

  const handleChangeComplete = (color, event) => {
    console.log({ color })
    onChange(color.hex)
  }

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-wrap items-center"
        style={{ maxWidth: "150px" }}
      >
        {colors.map(color => (
          <Selection
            color={color}
            onSelect={handleChangeComplete}
            selected={color.toLowerCase() === value.toLowerCase()}
          />
        ))}
        <div className="flex">
          <input
            value={value}
            className="h-8 text-xs px-2 rounded text-gray-800 border border-gray"
            style={{ maxWidth: "100px" }}
            onChange={e => handleChangeComplete({ hex: e.target.value }, e)}
          />
        </div>
      </div>
    </div>
  )
}

export default ColorPicker

/*
colors={[
          "#FF6900",
          "#FCB900",
          "#7BDCB5",
          "#00D084",
          "#8ED1FC",
          "#0693E3",
          "#ABB8C3",
          "#EB144C",
          "#F78DA7",
          "#9900EF"
        ]}
        */
