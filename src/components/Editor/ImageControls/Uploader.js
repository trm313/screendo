import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const Uploader = (props) => {
  const { onUpload } = props;

  return (
    <ImageUploader
      {...props}
      withIcon={true}
      buttonText="Choose images"
      onChange={onUpload}
      imgExtension={[".jpg", ".png"]}
      // label="Max file size: 5mb \n| Accepts: png, jpg"
      label="Upload Screenshot"
      // withLabel={false}
      maxFileSize={5242880}
      buttonClassName="btn btn-primary"
      className="shadow-none"
      fileContainerStyle={{ boxShadow: "none" }}
      // singleImage={true}
      // withPreview={true}
    />
  );
};

export default Uploader;
