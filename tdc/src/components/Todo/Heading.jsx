import React from 'react'
import styled from 'styled-components'

const HeadContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  font-family: monospace;
  color: #c2c0c0;
  width: 100%;
  margin-left: 30px;
  padding: 8px;
`
const Heading = props => {
  return (
    <>
      <HeadContainer>{props.title}</HeadContainer>
    </>
  )
}

export default Heading
