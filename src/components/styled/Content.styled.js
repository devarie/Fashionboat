import styled from 'styled-components'

export const Pricing = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  grid-gap: 20px;
  align-content: space-around;
  justify-content: space-evenly;
  margin-right: 20px;
  margin-left: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 100px 20px 250px 20px;
    grid-gap: 180px;
  }
`

export const PricingCard = styled.div`
  color: white;
  background: mediumspringgreen;
  opacity: 0.9; 
  padding: 10px;
  border-radius: 25px;
  box-shadow: 2px 2px 2px #ccc;
  text-align: center;

  &:hover {
    box-shadow: 6px 6px 6px #ccc;
    transform: translateY(-8px);
    scale: 130%;
  }
`

export const PricingTitle = styled.h1`
  text-align: center;
  font-weight: 300;
`

export const PricingFeatures = styled.ul`
  font-size: 1.8rem;
  text-align: left;
  list-style: none;
  margin-bottom: 20px;
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
  }
`
