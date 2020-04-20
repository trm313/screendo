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
  border-radius: ${props => props.radius + "px" || 0};
  box-shadow: ${props => props.shadow || "none"};
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  background-color: ${props => props.bgColor};
  border-top-left-radius: ${props => props.radius + "px" || 0};
  border-top-right-radius: ${props => props.radius + "px" || 0};
`
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`
const Button = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 100%;
  background-color: ${props => props.color || "red"};
  margin-left: 6px;
`

const Image = styled.img`
  border-bottom-left-radius: ${props => props.radius + "px" || 0};
  border-bottom-right-radius: ${props => props.radius + "px" || 0};
`

const Browser = props => {
  const { image, graphic, device, styleParams } = props

  const [borderRadius, setBorderRadius] = useState(15)
  const [boxShadow, setBoxShadow] = useState("0 0 4px rgba(0,0,0,.2)")

  return (
    <Container
      data-label="Container"
      id={`screenshot-0`}
      bgColor={graphic.imageConfigSettings.bgColor}
      padding={graphic.imageConfigSettings.padding}
    >
      <Frame data-label="Frame" radius={borderRadius} shadow={boxShadow}>
        <Nav data-label="Nav" radius={borderRadius} bgColor={styleParams.color}>
          <ButtonGroup>
            <Button color="#f7624e" />
            <Button color="#f8c007" />
            <Button color="#11cc35" />
          </ButtonGroup>
        </Nav>
        {/* <Image src={image} data-label="Image" radius={borderRadius} /> */}
        <Img
          src={image}
          loader={<ImageLoader width={760} height={428} />}
          data-label="Image"
          style={{
            borderBottomRightRadius: borderRadius + "px",
            borderBottomLeftRadius: borderRadius + "px",
          }}
        />
      </Frame>
    </Container>
  )
}

export default Browser
