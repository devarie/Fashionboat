import styled from 'styled-components'

export const Pricing = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.95fr);
  grid-template-rows: min-content;
  grid-gap: 20px;
  align-items:center;
  align-self: center;
  margin-right: 20px;
  margin-left: 20px;
  animation-duration: 2.5s;
  animation-name: slidein;
  backface-visibility: hidden;
  justify-content: center;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 50%;
      height: 50%;
    }

    to {
      margin-left: 0%;
      width: 50%;
      height: 50%;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 100px 10px 250px 10px;
    grid-gap: 100px;
  }
`

export const PricingCard = styled.div`
  align-items: center;
  color: black;
  background: mediumspringgreen;
  opacity: 0.88;
  padding: 10px;
  border-radius: 120px;
  box-shadow: 2px 2px 2px #ccc;
  text-align: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 6px 6px 6px #ccc;
    transform: translateY(-8px);
  }
`

export const PricingTitle = styled.h1`
  text-align: center;
  font-weight: 300;
  margin: auto;
  justify-content: center;
`

export const PricingFeatures = styled.ul`
    display: grid;
    align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  text-align: center;
  list-style: none;
  margin-bottom: 20px;
  margin-right: 50px;
  @media (max-width: 768px) {
    margin-bottom: 1px;
  }
`

export const Price = styled.span`
  text-align: center;
  font-size: 2.8rem;
  margin-top: 30px;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 2rem;
    justify-content: center;

  }
`
