import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Img from "react-image"
import ImageLoader from "./ImageLoader"

const Container = styled.div`
  max-width: 800px;
  box-sizing: border-box;
  background-color: ${props => props.bgColor || "transparent"};
  padding: ${props => props.padding + "px" || "10px"};
`

const Frame = styled.div`
  position: relative;
`
const Lid = styled.div`
  padding: 15px 10px 8px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border: 2px solid ${props => props.color};
  background-color: #000;
  position: relative;
  width: 80%;
  margin: 0 auto;
`

const Image = styled.img`
  max-height: 500px;
  border-radius: ${props => props.borderRadius + "px" || "30px"};
`

const Base = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: ${props => props.color};
  height: 8px;
  width: 95%;
  position: relative;
  margin: 0 auto;
  box-shadow: 0px 22px 10px -2px rgba(0, 0, 0, 0.4);
  margin-bottom: 20px;
`

const Notch = styled.div`
  height: 8px;
  margin: 0 40%;
  width: 20%;
  position: absolute;
  top: 0;
  background-color: ${props => props.color};
  box-shadow: inset 8px 0 4px -1px rgba(0, 0, 0, 0.2),
    inset -8px 0 4px -1px rgba(0, 0, 0, 0.2);
`

const Curvature = styled.div`
  height: 15px;
  background-color: ${props => props.color};
  background: linear-gradient(
    to bottom,
    ${props => props.color},
    ${props => (props.styleType !== "Dark" ? "#333" : "#111")}
  );
  width: 100%;
  position: absolute;
  bottom: -14px;
  clip-path: polygon(-4% 0%, 104% 0%, 85% 100%, 15% 100%);
`
// clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);

const MacAir = props => {
  const { image, graphic, device, styleParams } = props

  let buttonColor = "#c3c3c3"
  if (styleParams.type === "Dark") {
    buttonColor = "#404040"
  }

  const { includeNotch } = graphic.imageConfigSettings

  return (
    <Container
      data-label="Container"
      id={`screenshot-0`}
      bgColor={graphic.imageConfigSettings.bgColor}
      padding={graphic.imageConfigSettings.padding}
    >
      <Frame>
        <Lid
          data-label="LidFrame"
          className="device-frame"
          color={styleParams.color}
        >
          <Img
            src={image}
            loader={<ImageLoader height={389} width={584} />}
            data-label="Image"
            style={{
              maxHeight: "500px",
            }}
          />
        </Lid>
        <Base data-label="BaseFrame" color={styleParams.color}>
          <Notch color={styleParams.color} data-label="Base-Notch" />
          <Curvature color={styleParams.color} styleType={styleParams.type} />
        </Base>
      </Frame>
    </Container>
  )
}

export default MacAir
