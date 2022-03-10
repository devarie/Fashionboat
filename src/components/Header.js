import styled from 'styled-components'
import logo from '../png/FashionBoat_logo.png'
const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 24rem;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  margin-bottom: 50px;
  @media (max-width: 768px) {
    height: 2rem;
    margin-top: 140px;
  }
`

const Title = styled.h1`
  justify-content: center;
  font-size: 10rem;
  color: palegoldenrod;
  @media (max-width: 768px) {
    font-size: 3.4rem;
  }
`

/* ... */

const HeaderImg = styled.img.attrs({
  src: `${logo}`
})`
width: 400px;
height: 400px;
animation-duration: 3.3s;
animation-name: slidein;
backface-visibility: hidden;
margin-top: 76px;

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 100%;
    height: 100%;
  }

  to {
    margin-left: 0%;
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 768px) {
width: auto;
}`

export default function Header() {
  return (
    <StyledHeader>
      <HeaderImg />
    </StyledHeader>
  )
}
