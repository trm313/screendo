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
  border-radius: 15px;
  box-shadow: none;
  position: relative;
  padding: 30px 8px 22px;
  background-color: ${props => props.bgColor || "#000"};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
`

const Speaker = styled.div`
  position: absolute;
  top: 12px;
  left: 0;
  transform: translateX(50%);
  background-color: ${props => props.bgColor || "#fff"};
  width: 50%;
  height: 6px;
  border-radius: 499rem;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2) inset;
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
`

const Android = props => {
  const { image, graphic, device, styleParams } = props

  let buttonColor = "#c3c3c3"
  let speakerColor = "#bbbaba"
  if (styleParams.type === "Dark") {
    buttonColor = "#404040"
    speakerColor = "#444"
  }

  return (
    <Container
      data-label="Container"
      id={`screenshot-0`}
      bgColor={graphic.imageConfigSettings.bgColor}
      padding={graphic.imageConfigSettings.padding}
    >
      <Frame
        data-label="Frame"
        shadow={graphic.imageConfigSettings.boxShadow}
        bgColor={styleParams.color}
      >
        <Speaker data-label="Speaker" bgColor={speakerColor} />
        <LeftSideButtons data-label="LeftButtons">
          <LeftButton bgColor={buttonColor} />
          <LeftButton bgColor={buttonColor} />
        </LeftSideButtons>
        {/* <Image
          src={image}
          data-label="Image"
          phoneColor={styleParams.phoneColor}
          styleType={styleParams.type}
        /> */}
        <Img
          src={image}
          loader={<ImageLoader height={500} width={250} />}
          data-label="Image"
          style={{
            maxHeight: "500px",
          }}
        />
        <RightButton data-label="RightButton" bgColor={buttonColor} />
      </Frame>
    </Container>
  )
}

export default Android
