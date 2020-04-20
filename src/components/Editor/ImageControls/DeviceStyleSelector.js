import React from "react"

const colors = {
  Light: "#dbdbdb",
  Dark: "#3c3c3e",
}

const StyleItem = ({ styleSettings, selected, onSelect, index }) => (
  <>
    {index === 2 && <div style={{ height: 0, flexBasis: "100%" }} />}
    <div
      className={`h-12 w-12 rounded-full m-1 flex items-center justify-center cursor-pointer ${
        selected ? "border border-primary" : ""
      }`}
      style={{
        backgroundColor: styleSettings.color,
        color: styleSettings.type === "Dark" ? colors.Light : colors.Dark,
      }}
      title={styleSettings.type}
      onClick={() => onSelect(styleSettings.type)}
    ></div>
  </>
)

const DeviceStyleSelector = props => {
  const { styles, onSelect, selectedType } = props
  return (
    <div className="flex flex-wrap justify-center items-center mb-4">
      {styles.map((styleSettings, index) => (
        <StyleItem
          styleSettings={styleSettings}
          selected={styleSettings.type === selectedType}
          onSelect={onSelect}
          index={index}
        />
      ))}
    </div>
  )
}

/*
<div
          className={`w-24 p-2 my-1 flex items-center justify-center cursor-pointer ${
            selectedType === style.type && "border border-primary"
          }`}
          style={{
            backgroundColor: style.color,
            color: style.type === "Light" ? colors.Dark : colors.Light,
          }}
          onClick={() => onSelect(style.type)}
        >
          <p className="uppercase text-gray-600 text-center text-xs">
            {style.type}
          </p>
        </div>
        */

export default DeviceStyleSelector
