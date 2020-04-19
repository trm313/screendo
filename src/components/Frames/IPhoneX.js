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
  padding: 8px;
  background-color: ${props => props.bgColor || "#444"};
  border-radius: 35px;
  position: relative;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
`

const InteriorBorder = styled.div`
  padding: 4px;
  background-color: #000;
  border-radius: 30px;
`
const Notch = styled.div`
  height: 20px;
  width: 50%;
  position: absolute;
  top: 8px;
  left: 0;
  transform: translateX(50%);
  background-color: ${props => props.bgColor || "#000"};
  border-radius: 0 0 15px 15px;
`

const LeftSideButtons = styled.div`
  position: absolute;
  top: 100px;
  left: -2px;
  display: flex;
  flex-direction: column;
  height: 80px;
  justify-content: space-between;
`
const LeftButton = styled.div`
  background-color: ${props => props.bgColor || "#000"};
  height: 35px;
  width: 2px;
  box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.4);
`
const RightButton = styled.div`
  background-color: ${props => props.bgColor || "#000"};
  height: 50px;
  width: 2px;
  position: absolute;
  top: 100px;
  right: -2px;
  box-shadow: 2px 1px 6px rgba(0, 0, 0, 0.4);
`

const Image = styled.img`
  max-height: 500px;
  border-radius: ${props => props.borderRadius + "px" || "30px"};
`

const IPhoneX = props => {
  const { image, imageKey, graphic, device, styleParams } = props

  let buttonColor = "#c3c3c3"
  if (styleParams.type === "Dark") {
    buttonColor = "#404040"
  }

  const { includeNotch } = graphic.imageConfigSettings

  return (
    <Container
      data-label="Container"
      id={`screenshot-${imageKey}`}
      bgColor={graphic.imageConfigSettings.bgColor}
      padding={graphic.imageConfigSettings.padding}
    >
      <Frame
        data-label="Frame"
        className="device-frame"
        shadow={graphic.imageConfigSettings.boxShadow}
        bgColor={styleParams.color}
      >
        <LeftSideButtons data-label="LeftButtons">
          <LeftButton bgColor={buttonColor} />
          <LeftButton bgColor={buttonColor} />
        </LeftSideButtons>

        {includeNotch ? (
          <InteriorBorder>
            <Notch bgColor={"#000"} />
            {/* <Image src={image} data-label="Image" borderRadius={26} /> */}
            <Img
              src={image}
              loader={<ImageLoader height={500} width={231} />}
              data-label="Image"
              style={{
                borderRadius: "26px",
                maxHeight: "500px",
              }}
            />
          </InteriorBorder>
        ) : (
          // <Image src={image} data-label="Image" borderRadius={30} />
          <Img
            src={image}
            loader={<ImageLoader height={500} width={231} />}
            data-label="Image"
            style={{
              borderRadius: "30px",
              maxHeight: "500px",
            }}
          />
        )}

        <RightButton data-label="RightButton" bgColor={buttonColor} />
      </Frame>
    </Container>
  )
}

export default IPhoneX
