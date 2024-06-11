import React from 'react'
import styled from 'styled-components'

const CardComponent = styled.button`
  width: 100%;
  text-align: left;
  font-size: 17px;
  font-weight: bold;
  font-family: 'Segoe UI';
  margin-bottom: 10px;
  border-radius: 15px;
  background-color: black;
  border: none;
  color: #97a4b1;
  cursor: pointer;
  padding: 10px;
  &:hover {
    background-color: #485248;
    color: white;
  }
`
const AddCard = props => {
  return (
    <>
      <CardComponent>{props.card}</CardComponent>
    </>
  )
}

export default AddCard
