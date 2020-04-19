import React from "react";

const Section = (props) => {
  const { label } = props;
  return (
    <div
      className="my-2 md:my-0 flex flex-col justify-center px-12 justify-between border-b last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0 border-gray-200"
      data-label={`Section-${label}`}
    >
      <>{props.children}</>
      <h6 className="font-header font-thin text-xs text-center uppercase text-gray-600">
        {label}
      </h6>
    </div>
  );
};

export default Section;
