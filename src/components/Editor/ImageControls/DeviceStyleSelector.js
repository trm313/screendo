import React from "react";

const colors = {
  Light: "#dbdbdb",
  Dark: "#3c3c3e",
};

const DeviceStyleSelector = (props) => {
  const { styles, onSelect, selectedType } = props;
  return (
    <div className="flex flex-col justify-around">
      {styles.map((style) => (
        <div
          className={`h-12 w-40 p-2 my-1 flex items-center justify-center rounded cursor-pointer ${
            selectedType === style.type && "border-4 border-primary"
          }`}
          style={{
            backgroundColor: style.color,
            color: style.type === "Light" ? colors.Dark : colors.Light,
          }}
          onClick={() => onSelect(style.type)}
        >
          <p className="uppercase text-gray-600 text-center">{style.type}</p>
        </div>
      ))}
    </div>
  );
};

export default DeviceStyleSelector;
