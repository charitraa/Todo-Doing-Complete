import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const EmojiContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  color: white;
  font-family: monospace;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: rgb(236, 92, 68);
`
const TextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 60px;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #22272b;
  color: #c2c0c0;
  & span {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    font-family: monospace;
  }
`

function Body (props) {
  return (
    <>
      <ImageContainer>
        <EmojiContainer>{props.emoji} </EmojiContainer>
        <TextContainer>
          <span>{props.text}</span>
        </TextContainer>
      </ImageContainer>
    </>
  )
}

export default Body
