import React from 'react'
import styled from 'styled-components'

const CardComponent = styled.button`
  width: 100%;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Segoe UI';
`
const AddCard = () => {
  return (
    <>
      <CardComponent>+ Add a Cart</CardComponent>
    </>
  )
}

export default AddCard
