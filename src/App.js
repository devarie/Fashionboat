import React from 'react'
import { Container } from './components/Container.js'
import Header from './components/Header'
import ParticlesBackground from './components/ParticlesBackground.js'
import GlobalStyle from './GlobalStyles'
import PricingPage from './components/Content.js'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Header />
        <ParticlesBackground></ParticlesBackground>
        <PricingPage />
      </Container>
    </div>
  )
}

export default App
