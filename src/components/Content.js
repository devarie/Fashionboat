import React from 'react'
import { Pricing, PricingCard, PricingTitle, Price, PricingFeatures } from './styled/Content.styled.js'
export default function PricingPage() {
  return (
    <>
      <Pricing>
        <PricingCard>
          <PricingTitle>9 April 2022</PricingTitle>
          <p>
            <Price>Die Grande Spectacle</Price>
          </p>{' '}
          <PricingFeatures>
            <li>Oude Houthavens</li>
            <li>Van Diemenkade 18</li>
            <li>Bateau Excelsior</li>
          </PricingFeatures>
          {/* <Button>Get Started</Button> */}
        </PricingCard>
        <PricingCard>
          <PricingTitle>Open from 19:00</PricingTitle>
          <p>
            <Price>Golden Hour@20:00</Price>
          </p>{' '}
          <PricingFeatures>
            <li>Diverse drankjes zonder calorien</li>
            <li>Eikenmelange, ijsbergsla, andijvie</li>
            <li>Fruit en groente</li>
          </PricingFeatures>
          {/* <Button primary>Get Started</Button> */}
        </PricingCard>
        <PricingCard>
          <PricingTitle>Dior Bitch</PricingTitle>
          <p>
            <Price>$35 inclusief fotografie</Price>
          </p>
          <PricingFeatures>
            <li>Dior bitch kan weigeren</li>
            <li>Geen kopieen</li>
            <li>Haute couture</li>
          </PricingFeatures>
          {/* <Button>Get Started</Button> */}
        </PricingCard>
      </Pricing>
    </>
  )
}
