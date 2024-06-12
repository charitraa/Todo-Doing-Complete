import React from 'react'
import styled from 'styled-components'
import Heading from '../Todo/Heading'
import Body from '../Todo/Body.jsx'
import AddCard from '../Todo/AddCard.jsx'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  background-color: black;
  border-radius: 15px;
  padding: 0 10px;
  gap: 5px;
`
const Doing = () => {
  return (
    <>
      <MainContainer>
        <Heading title={'Doing'} />
        <Body emoji={'😒Doing'} text={'Doing'} />
        <AddCard card={'+ Add a Cart'} />
      </MainContainer>
    </>
  )
}

export default Doing
