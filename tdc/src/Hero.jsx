import React from 'react'
import Todo from './components/Todo/Todo'
import Doing from './components/Doing/Doing'
import Complete from './components/Complete/Complete'
import styled from 'styled-components'

const SecondConatiner = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`
function Hero () {
  return (
    <SecondConatiner>
      <Todo />
      <Doing />
      <Complete />
    </SecondConatiner>
  )
}

export default Hero
