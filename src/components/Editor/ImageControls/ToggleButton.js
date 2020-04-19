import React from "react";
import Switch from "react-switch";

const ToggleButton = ({ onChange, value, label }) => {
  return (
    <div className="flex items-center">
      <label className="flex items-center">
        <span className="text-xs uppercase text-gray-600 mr-2">{label}</span>
        <Switch
          onChange={onChange}
          checked={value}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
          id="material-switch"
        />
      </label>
    </div>
  );
};

export default ToggleButton;
