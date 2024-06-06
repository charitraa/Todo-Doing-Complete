import React from 'react'
import styled from 'styled-components'
import Heading from './Heading.jsx'
import Body from './Body.jsx'
import AddCard from './AddCard.jsx'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  background-color: black;
  border-radius: 15px;
  padding: 0 10px;
  gap: 5px;
`
const Todo = () => {
  return (
    <>
      <MainContainer>
        <Heading />
        <Body />
        <AddCard />
      </MainContainer>
    </>
  )
}

export default Todo
