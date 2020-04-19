import React, { useState } from "react";
import ReactSlider from "react-input-slider";

const Slider = (props) => {
  const {
    onChange,
    value = 10,
    min = 0,
    max = 100,
    step = 1,
    label = "Value",
    units = "px",
  } = props;

  return (
    <>
      <h6 className="uppercase font-paragraph text-gray text-xs font-thin">{`${label}`}</h6>
      <div className="flex items-center">
        <ReactSlider
          axis="x"
          xstep={step}
          xmin={min}
          xmax={max}
          x={value}
          onChange={({ x }) => onChange(parseFloat(x.toFixed(2)))}
          styles={{
            track: {
              backgroundColor: "#E4E4E4",
            },
            active: {
              backgroundColor: "#41BCEB",
            },
          }}
        />
        <p className="text-gray text-xs ml-2">{`${value}${units}`}</p>
      </div>
    </>
  );
};

export default Slider;
