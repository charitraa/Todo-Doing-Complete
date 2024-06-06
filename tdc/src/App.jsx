import './App.css'
import styled from 'styled-components'
import Hero from './Hero'
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

function App () {
  return (
    <>
      <MainContainer>
        <Hero />
      </MainContainer>
    </>
  )
}

export default App
