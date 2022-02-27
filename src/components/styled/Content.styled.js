import styled from 'styled-components'
import artist from '../../png/artist.png'

export const Pricing = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.95fr);
  grid-template-rows: min-content;
  grid-gap: 20px;
  align-items: center;
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
      margin-left: 10%;
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
  background-image: linear-gradient(to bottom, rgba(45, 146, 52, 0.52), rgba(117, 319, 93, 0.73)), url(${artist});
  /* background: url(${artist}) no-repeat left top, linear-gradient(to bottom right, #ffc300, #73ff00 80%); */

  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: 20x 40px 200px 200px #ff00b7;

  align-items: center;
  color: mediumslateblue;
  font-weight: 700;
  opacity: 0.98;
  padding: 10px;
  border-radius: 120px;
  text-align: center;
  justify-content: space-between;
  display: inline-block;
  /* #1 */
  border: 15px solid hsl(5, 0%, 40%, 0.94);

  /* #2 */
  padding: 5px;
  /* background: hsl(0, 0%, 20%); */

  /* #3 */
  outline: 15px solid hsla(275, 69%, 74%, 0.55);

  /* #4 AND INFINITY!!! (CSS3 only) */
  box-shadow: 0 0 0 25px hsla(324, 100%, 61%, 0.66), 0 0 0 89px hsla(63, 100%, 41%, 0.27);

  &:hover {
    box-shadow: 6px 6px 6px #ccc;
    transform: translateY(-8px);
    background-image: linear-gradient(to left, rgba(145, 146, 52, 0.92), rgba(317, 319, 93, 0.99)), none;
  }
  @media (max-width: 768px) {
    background-image: linear-gradient(to bottom, rgba(45, 146, 52, 0.52), rgba(117, 319, 93, 0.73)), none;
    margin-bottom: 10px;
    margin-top: 10px;
    justify-content: center;
  }
`

export const PricingTitle = styled.h1`
  text-align: center;
  font-weight: 700;
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
