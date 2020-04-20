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
const Screen = styled.div`
  padding: 25px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  background-color: #000;

  box-shadow: 0px 6px 20px 1px rgba(0, 0, 0, 0.4);
`
const Trim = styled.div`
  background-color: ${props => props.color};
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 80px;

  box-shadow: 0px 6px 20px 1px rgba(0, 0, 0, 0.4);
`

const StandVert = styled.div`
  width: 25%;
  margin: 0 auto;
  height: 100px;
  background-color: ${props => props.color};
  box-shadow: inset 0px 7px 18px 0px rgba(0, 0, 0, 0.2),
    inset 0px -19px 10px 0px rgba(0, 0, 0, 0.4);
`

const StandHoriz = styled.div`
  position: relative;
  bottom: 3px;
  width: 30%;
  margin-left: 35%;
  height: 25px;
  background-color: ${props => props.color};
  transform: perspective(10px) rotateX(10deg);
  box-shadow: inset 0px 19px 10px 0px rgba(0, 0, 0, 0.4);
`

const StandThickness = styled.div`
  height: 4px;
  background-color: ${props => props.color};
  width: 38%;
  margin: 0 auto;
`

const IMacPro = props => {
  const { image, graphic, device, styleParams } = props

  let buttonColor = "#c3c3c3"
  if (styleParams.type === "Dark") {
    buttonColor = "#404040"
  }

  return (
    <Container
      data-label="Container"
      id={`screenshot-0`}
      bgColor={graphic.imageConfigSettings.bgColor}
      padding={graphic.imageConfigSettings.padding}
    >
      <Frame>
        <Screen data-label="Screen">
          <Img
            src={image}
            loader={<ImageLoader height={399} width={710} />}
            data-label="Image"
            style={{
              maxHeight: "500px",
            }}
          />
        </Screen>
        <Trim color={styleParams.color} />
        <StandVert color={styleParams.color} />
        <StandHoriz color={styleParams.color} />
        <StandThickness color={styleParams.color} />
      </Frame>
    </Container>
  )
}

export default IMacPro
