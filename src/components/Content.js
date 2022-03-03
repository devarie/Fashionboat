import React from 'react'
import { Pricing, PricingCard, PricingTitle, Price, PricingFeatures } from './styled/Content.styled.js'
export default function PricingPage() {
  return (
    <>
      <Pricing>
        <PricingCard>
          <PricingTitle>9 April 2022</PricingTitle>
          <p>
            <Price>FASHIONBOAT</Price>
          </p>{' '}
          <PricingFeatures>
            <li>Oude Houthavens</li>
            <li>Van Diemenkade 18</li>
            <li>Yacht Excelsior</li>
          </PricingFeatures>
          {/* <Button>Get Started</Button> */}
        </PricingCard>
        <PricingCard>
          <PricingTitle>Open from 19:00</PricingTitle>
          <p>
            <Price>GOLDEN HOUR@20:00</Price>
          </p>{' '}
          <PricingFeatures>
            <li>Skinny Bitch drinks</li>
            <li>Jalousie est normale</li>
            <li>l'arrogance n'est pas désapprouver</li>

          </PricingFeatures>
          {/* <Button primary>Get Started</Button> */}
        </PricingCard>
        <PricingCard>
          <PricingTitle>Des détails</PricingTitle>
          <p>
            <Price>Entree €35</Price>
          </p>
          <PricingFeatures>
            <li>#Haute couture</li>
            <li>#Yachting</li>
            <li>La Dior bitch est fanatique....</li>
          </PricingFeatures>
          {/* <Button>Get Started</Button> */}
        </PricingCard>
      </Pricing>
    </>
  )
}
