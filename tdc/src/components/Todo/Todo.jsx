import React from 'react'
import styled from 'styled-components'
import Heading from './Heading.jsx'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
`
const Todo = () => {
  return (
    <>
      <MainContainer>
        <Heading />
      </MainContainer>
    </>
  )
}

export default Todo
